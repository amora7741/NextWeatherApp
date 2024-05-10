import SearchBar from './SearchBar';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className='w-[400px] h-[100px] flex flex-col items-center justify-center text-white bg-white/[.1] backdrop-blur-md border-2 border-white/20 rounded-2xl p-5'>
      <SearchBar />
    </div>
  );
};

export default WeatherCard;
