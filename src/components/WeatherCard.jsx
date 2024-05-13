'use client';

import SearchBar from './SearchBar';
import { useContext, useEffect } from 'react';
import { DataContext } from '@/app/DataContext';
import Image from 'next/image';

const WeatherCard = () => {
  const { weatherData } = useContext(DataContext);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className='w-[400px] flex flex-col gap-8 items-center justify-center text-white text-center bg-white/[.1] backdrop-blur border-2 border-white/20 rounded-2xl p-5 transition-[height]'>
      <SearchBar />
      {weatherData === 'DNE' ? (
        <>
          <Image
            src='/404.png'
            width='300'
            height='200'
            alt='Not found image'
          />
          <h1 className='text-2xl font-semibold mb-8'>Location not found!</h1>
        </>
      ) : (
        <>
          {weatherData && (
            <>
              <h1 className='text-2xl font-semibold max-w-[80%]'>
                {weatherData.location.name}, {weatherData.location.country}
              </h1>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
                width={100}
                height={100}
                alt='Weather icon'
              />
              <div className='flex flex-col items-center justify-center'>
                <div className='relative'>
                  <h2 className='text-6xl font-bold'>
                    {Math.round(weatherData.current.feelslike_f)}
                  </h2>
                  <h2 className='text-2xl font-semibold absolute -top-2 -right-6'>
                    °F
                  </h2>
                </div>
                <p className='capitalize font-medium'>
                  {weatherData.current.condition.text}
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
