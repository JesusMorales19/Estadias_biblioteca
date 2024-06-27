// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Bar } from 'react-chartjs-2';

function Graph() {
    const data = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011'],
        datasets: [
          {
            label: 'Evolución del Programa Propio de Investigación',
            data: [1.03, 1.11, 1.22, 1.29, 1.38, 1.34],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md w-full md:w-2/3 dark:bg-neutral-800 mb-4 md:mb-0">
            <h2 className="text-center text-lg font-bold mb-4 dark:text-white">Evolución del Programa Propio de Investigación</h2>
            <Bar data={data} />
        </div>
    );
}

export default Graph;
