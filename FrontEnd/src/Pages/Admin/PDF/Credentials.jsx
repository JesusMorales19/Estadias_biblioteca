// Credentials.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FAE178',
    padding: 10,
    width: '85.6mm',
    height: '53.98mm',
  },
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 8,
    textAlign: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  footer: {
    marginTop: 10,
    fontSize: 6,
    textAlign: 'center',
  },
});

const Credentials = ({ data }) => (
  <Document>
    <Page size={[242.65, 153]} style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.name}>{data.username}</Text>
        <Text style={styles.text}>{data.firstName}</Text>
        <Text style={styles.text}>{data.phoneNumber}</Text>
      </View>
    </Page>
  </Document>
);

// Define la validación de props utilizando PropTypes
Credentials.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default Credentials;
