import WeatherCard from '@/components/WeatherCard';

async function getWeatherData(qry) {
  const API_ENDPOINT = 'https://api.weatherapi.com/v1/forecast.json';
  const forecastAmount = 3;
  let weatherData;

  try {
    const response = await fetch(
      `${API_ENDPOINT}?key=${process.env.KEY}&q=${qry}&days=${forecastAmount}`,
      { cache: 'no-store' }
    );

    weatherData = await response.json();
  } catch (err) {
    console.log(err);
  }

  return weatherData;
}

export default async function Home() {
  const weatherData = await getWeatherData('Los Angeles');

  return (
    <main
      className='min-h-screen flex flex-col items-center justify-center bg-center bg-cover'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <WeatherCard />
    </main>
  );
}
