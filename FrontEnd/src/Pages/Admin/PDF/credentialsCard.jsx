// PdfCard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { HiOutlinePrinter } from 'react-icons/hi';
import { BlobProvider } from '@react-pdf/renderer';
import Credentials from './Credentials.jsx';
import { getAllClient } from '../../../hooks/client.hook.js';

// eslint-disable-next-line react/prop-types
const PdfCredentialsCard = ({ title }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllClient();
        setUserData(data); // Asegúrate de que `data` tenga las propiedades esperadas (username, firstName, phoneNumber)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const styles = {
    container: {
      width: '220px',
      borderRadius: '5px',
      padding: '15px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    },
    flex: { width: '100%', display: 'flex', gap: '5px', alignItems: 'center' },
    bold: { fontSize: '13px', fontWeight: 600 },
    thin: { fontSize: '11px', color: '#6f6f6f', fontWeight: 500 },
    btn: {
      borderRadius: '3px',
      border: '1px solid gray',
      backgroundColor: '#4CAF50', // Color verde
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px',
      padding: '10px 20px',
      fontSize: '13px',
      color: 'white',
      fontWeight: 600,
      cursor: 'pointer',
      userSelect: 'none',
    },
  };

  // Función para imprimir el PDF
  const handlePrint = async (blob) => {
    try {
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'credencial.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error printing PDF:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.flex}>
        <span style={styles.bold}>{title}</span>
      </div>

      <div style={{ ...styles.flex, ...{ justifyContent: 'space-between' } }}>
        {userData && (
          <BlobProvider document={<Credentials data={userData} />}>
            {({ url, blob }) => (
              <a href={url} target="_blank" style={styles.btn} onClick={() => handlePrint(blob)}>
                <HiOutlinePrinter size={14} />
                <span>Imprimir</span>
              </a>
            )}
          </BlobProvider>
        )}
      </div>
    </div>
  );
};

export default PdfCredentialsCard;
