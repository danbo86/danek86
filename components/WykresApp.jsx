'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';




  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );




const WykresApp = ({profits2}) => {
  // Przygotuj dane do wykresu




  // Konfiguracja wykresu
 
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 21
          }
        }
      },
      title: {
        display: true,
        text: 'Profit konta po każdej transakcji',
        font: {
          size: 22
        }
      },
    },
  };


  const labels = profits2.map((entry, index) => index + 1 )
 



  const data = {
    labels,
    datasets: [
      {
        label: '',
        // data: labels.map(() => faker.number.int({ min: -100, max: 100 })),
        data: profits2,
       
        borderColor: '#DC143C',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   // data: labels.map(() => faker.number.int({ min: -50, max: 50 })),
      //   // data: labels,
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };



  return (
    <div>
      
      <Line data={data} options={options} />
    </div>
  );
};

export default WykresApp;
