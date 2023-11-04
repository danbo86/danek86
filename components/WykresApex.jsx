"use client"

import React from 'react';
import Chart from 'react-apexcharts';

const WykresApex = ({profits2}) => {

    // console.log(profits2)
    
    // const labels = profits2.map((entry, index) => index + 1 )

    const chartData = profits2.map((entry, index) => ({
        x: index + 1,
        y: entry, // Wartość na osi Y
      
      }));

      const entry = chartData.map((dataPoint) => dataPoint.y
      )



      console.log(entry)
      console.log(chartData)
  


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
      height: 500,
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
      size: 0,
    },
    title: {
      text: 'Profit konta po każdej transakcji',
      align: 'center',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val).toFixed(2);
        },
      },
      title: {
        text: 'Profit',
      },
    },
    xaxis: {
        type: 'numeric',
        labels: {
          formatter: function (val) {
            return val.toFixed(0); // Formatuj wartość osi X
          },}
        
    },

    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val).toFixed(2);
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
    </div>
  );
};

export default WykresApex;


