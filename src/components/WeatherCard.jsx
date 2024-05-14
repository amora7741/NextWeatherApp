'use client';

import SearchBar from './SearchBar';
import { useContext, useEffect } from 'react';
import { DataContext } from '@/app/DataContext';
import Image from 'next/image';
import HumidityIcon from './HumidityIcon';
import WindSpeedIcon from './WindSpeedIcon';
import ExtraInfoDisplay from './ExtraInfoDisplay';

const WeatherCard = () => {
  const { weatherData } = useContext(DataContext);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className='w-[400px] flex flex-col gap-6 items-center justify-center text-white text-center bg-white/[.1] backdrop-blur-xl border-2 border-white/20 rounded-2xl p-5 transition-[height]'>
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
              <h1 className='text-2xl font-semibold'>
                {weatherData.location.name},{' '}
                {weatherData.location.region
                  ? weatherData.location.region
                  : weatherData.location.country}
              </h1>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
                width={100}
                height={100}
                alt='Weather icon'
              />
              <div className='flex flex-col items-center justify-center gap-2'>
                <div className='relative -ml-5'>
                  <h2 className='text-6xl font-bold'>
                    {Math.round(weatherData.current.feelslike_f)}
                  </h2>
                  <h2 className='text-2xl font-semibold absolute -top-2 -right-7'>
                    °F
                  </h2>
                </div>
                <p className='capitalize font-medium text-xl'>
                  {weatherData.current.condition.text}
                </p>
              </div>
              <div className='flex justify-around w-full'>
                <ExtraInfoDisplay
                  Icon={HumidityIcon}
                  measurement={`${weatherData.current.humidity}%`}
                  units='Humidity'
                />
                <ExtraInfoDisplay
                  Icon={WindSpeedIcon}
                  measurement={`${weatherData.current.wind_mph} Mph`}
                  units='Wind Speed'
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
