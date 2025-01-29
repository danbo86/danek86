"use client"
import React, { useEffect, useState } from 'react';


const CircularCandlestickChart = () => {
  const [candlesticks, setCandlesticks] = useState([]);

  useEffect(() => {
    // Tworzenie danych świec co pewien czas
    const interval = setInterval(() => {
      setCandlesticks((prev) => {
        const newStick = {
          angle: prev.length * 15, // Ustawienie kąta (np. co 15 stopni)
          bodyHeight: Math.random() * 50 + 30, // Wysokość korpusu świecy
          wickHeight: Math.random() * 30 + 20, // Długość knota
          color: Math.random() > 0.5 ? '#00ff88' : '#ff4466', // Kolor świecy
        };
        return [...prev, newStick].slice(-24); // Maksymalnie 24 świece w okręgu
      });
    }, 500); // Dodawanie nowej świecy co 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-circle">
      {candlesticks.map((stick, index) => (
        <div
          key={index}
          className="candlestick"
          style={{
            '--angle': `${stick.angle}deg`,
            '--body-height': `${stick.bodyHeight}px`,
            '--wick-height': `${stick.wickHeight}px`,
            '--stick-color': stick.color,
          }}
        >
          <div className="wick" />
          <div className="body" />
        </div>
      ))}
    </div>
  );
};

export default CircularCandlestickChart;
