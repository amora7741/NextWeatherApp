'use client';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className='w-[400px] h-[100px] flex flex-col items-center justify-center text-white bg-white/[.1] backdrop-blur-md border-2 border-white/20 rounded-2xl p-5'>
      <label className='input input-bordered flex items-center gap-2 bg-transparent w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 opacity-70'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'></path>
        </svg>
        <input
          type='text'
          className='grow font-semibold text-xl'
          placeholder='Enter your location'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
    </div>
  );
};

export default WeatherCard;
