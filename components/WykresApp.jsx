'use client'
import React from 'react';
import { useEffect, useState } from 'react'
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

  const [aspectRatio, setAspectRatio] = useState(1); // Domyślny aspect ratio

  // // Funkcja do ustawiania aspect ratio w zależności od szerokości ekranu
  // const setAspectRatioByScreenWidth = () => {
  //   if (window.innerWidth <= 600) {
  //     // Dla małych ekranów
  //     setAspectRatio(1.4); // Ustaw odpowiedni aspect ratio dla małych ekranów
  //   } else {
  //     // Dla dużych ekranów
  //     setAspectRatio(2); // Ustaw odpowiedni aspect ratio dla dużych ekranów
  //   }
  // };

  // // Wywołaj funkcję przy załadowaniu komponentu i zmianie szerokości ekranu
  // useLayoutEffect(() => {
  //   setAspectRatioByScreenWidth();
  //   window.addEventListener('resize', setAspectRatioByScreenWidth);
  //   return () => {
  //     window.removeEventListener('resize', setAspectRatioByScreenWidth);
  //   };
  // }, []);



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setAspectRatio(1.4); // Dla małych ekranów
      } else {
        setAspectRatio(2); // Dla dużych ekranów
      }
    };

    handleResize(); // Wywołaj raz przy załadowaniu komponentu

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  // Konfiguracja wykresu
 
const options = {
    responsive: true,
    // maintainAspectRatio: false, // Wyłącz zachowanie proporcji
    aspectRatio: aspectRatio, // Ustal dowolny stosunek szerokości do wysokości
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
        label: 'profit',
        data: profits2,
       
        borderColor: '#DC143C',
        backgroundColor: 'rgba(255, 99, 132, 0.45)',
      }
    ],
  };



  return (
    <div>
      
      <Line data={data} options={options} />
    </div>
  );
};

export default WykresApp;
