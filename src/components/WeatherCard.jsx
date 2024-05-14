'use client';

import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DataContext } from '@/app/DataContext';
import Image from 'next/image';
import HumidityIcon from './HumidityIcon';
import WindSpeedIcon from './WindSpeedIcon';
import ExtraInfoDisplay from './ExtraInfoDisplay';
import SearchBar from './SearchBar';
import AnimateHeight from 'react-animate-height';

const WeatherCard = () => {
  const { weatherData } = useContext(DataContext);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    if (weatherData) {
      setHeight('auto');
    } else {
      setHeight(100);
    }
  }, [weatherData]);

  const topSlideVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  };

  return (
    <AnimateHeight duration={300} height={height}>
      <div className='flex flex-col gap-6 items-center justify-center text-white text-center bg-black/[.1] backdrop-blur-xl border-2 border-white/20 rounded-2xl p-5'>
        <SearchBar />
        <AnimatePresence>
          {weatherData === 'DNE' ? (
            <>
              <motion.div
                custom={0}
                initial='hidden'
                animate='visible'
                variants={topSlideVariants}
              >
                <Image
                  src='/404.png'
                  width='300'
                  height='200'
                  alt='Not found image'
                />
              </motion.div>
              <motion.h1
                className='text-2xl font-semibold mb-8'
                custom={1}
                initial='hidden'
                animate='visible'
                variants={topSlideVariants}
              >
                Location not found!
              </motion.h1>
            </>
          ) : (
            weatherData && (
              <>
                <motion.h1
                  className='text-2xl font-semibold'
                  custom={0}
                  initial='hidden'
                  animate='visible'
                  variants={topSlideVariants}
                  key={weatherData.location.name}
                >
                  {weatherData.location.name},{' '}
                  {weatherData.location.region
                    ? weatherData.location.region
                    : weatherData.location.country}
                </motion.h1>
                <motion.div
                  custom={1}
                  initial='hidden'
                  animate='visible'
                  variants={topSlideVariants}
                  key={weatherData.current.condition.icon}
                >
                  <Image
                    src={`https:${weatherData.current.condition.icon}`}
                    width={100}
                    height={100}
                    alt='Weather icon'
                  />
                </motion.div>
                <motion.div
                  className='flex flex-col items-center justify-center gap-2'
                  custom={2}
                  initial='hidden'
                  animate='visible'
                  variants={topSlideVariants}
                  key={weatherData.current.feelslike_f}
                >
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
                </motion.div>
                <div className='flex justify-around w-full'>
                  <motion.div
                    custom={3}
                    initial='hidden'
                    animate='visible'
                    variants={leftSlideVariants}
                    key={weatherData.current.humidity}
                  >
                    <ExtraInfoDisplay
                      Icon={HumidityIcon}
                      measurement={`${weatherData.current.humidity}%`}
                      units='Humidity'
                    />
                  </motion.div>
                  <motion.div
                    custom={4}
                    initial='hidden'
                    animate='visible'
                    variants={rightSlideVariants}
                    key={weatherData.current.wind_mph}
                  >
                    <ExtraInfoDisplay
                      Icon={WindSpeedIcon}
                      measurement={`${weatherData.current.wind_mph} Mph`}
                      units='Wind Speed'
                    />
                  </motion.div>
                </div>
              </>
            )
          )}
        </AnimatePresence>
      </div>
    </AnimateHeight>
  );
};

export default WeatherCard;
