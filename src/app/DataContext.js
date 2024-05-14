'use client';

import { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (qry) => {
    const API_ENDPOINT = 'https://api.weatherapi.com/v1/forecast.json';
    const forecastAmount = 3;
    let weatherData;

    try {
      const response = await fetch(
        `${API_ENDPOINT}?key=${process.env.NEXT_PUBLIC_KEY}&q=${qry}&days=${forecastAmount}`,
        { cache: 'no-store' }
      );

      weatherData = await response.json();
    } catch (err) {
      console.log(err);
    }

    return weatherData;
  };

  return (
    <DataContext.Provider
      value={{
        location,
        setLocation,
        getWeatherData,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
