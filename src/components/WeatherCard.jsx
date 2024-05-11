'use client';

import SearchBar from './SearchBar';
import { useContext } from 'react';
import { DataContext } from '@/app/DataContext';

const WeatherCard = () => {
  const { weatherData } = useContext(DataContext);

  return (
    <div className='w-[400px] flex flex-col gap-8 items-center justify-center text-white text-center bg-white/[.1] backdrop-blur border-2 border-white/20 rounded-2xl p-5 transition-[height]'>
      <SearchBar />
      {weatherData && (
        <>
          <h1 className='text-3xl font-semibold text-pretty'>
            {weatherData.location.name}, {weatherData.location.country}
          </h1>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
