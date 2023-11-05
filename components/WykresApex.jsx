"use client"
import React from 'react';
import Chart from 'react-apexcharts';

const WykresApex = ({profits2}) => {

  if (typeof window !== 'undefined') {
    // Renderuj wykresy tylko w przeglądarce
    
  const chartData = profits2.map((entry, index) => ({
    x: index + 1,
    y: entry
  }));

  const options = {
    series: [
      {
        name: "Profit",
        data: chartData
      },
    ],
    chart: {
      type: 'area',
      stacked: false,
      height: '100%',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0.5,
    },
    title: {
      text: 'Profit konta',
      align: 'center',
      style: {
        color: "#fff",
        fontSize: '20px' // Kolor tekstu tytułu osi X (np. czerwony)
      }
    },
    // '#DC143C',"#00ff00"
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#00ff00" // Kolor liczb przy osi Y (np. zielony)
        },
        formatter: function (val) {
          return (val).toFixed(0);
        },
      },
      title: {
        text: 'Profit',
        style: {
          color: "#fff" // Kolor tekstu tytułu osi Y 
        }
      },
    },
    xaxis: {
      axisTicks: {
        show: false // Ukryj znaczniki osi X
      },
      axisBorder: {
        show: false // Ukryj obramowanie osi X
      },
      title: {
        text: 'Numer transakcji',
        style: {
          color: "#fff" // Kolor tekstu tytułu osi X
        }
      },
        type: 'numeric',
        tickPlacement: 'on',
        labels: {
          style: {
            colors: "#00ff00" // Kolor liczb przy osi Y (np. zielony)
          },
          formatter: function (val) {
            return val.toFixed(0); // Formatuj wartość osi X
          },
        }
        
      },

      tooltip: {
        theme: "dark", // Temat dymku (możesz wybrać "light" lub "dark")
      style: {
        fontSize: "12px", // Rozmiar czcionki w dymku
        color: "#ff0000" // Kolor czcionki w dymku (np. czerwony)
      },
      shared: true,
      y: {
        formatter: function (val) {
          return (val).toFixed(2);
        },
      },
    },
  };

  // Dostosuj kolory w oparciu o wartość Y
    // options.fill.colors = [function({ value }) {
    //   if (value < 0) {
    //     return '#DC143C'; // Kolor dla wartości poniżej 0
    //   } else {
    //     return '#000555'; // Kolor dla wartości powyżej lub równych 0
    //   }
    // }];

    return (
      <div id="chart">
      <Chart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
    </div>
    );
  } else {
    return ("nie można wyrenderować wykresu");
  }
};

export default WykresApex;