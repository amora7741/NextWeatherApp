async function getWeatherData(qry) {
  const API_ENDPOINT = 'https://api.weatherapi.com/v1/forecast.json';
  const forecastAmount = 3;
  let weatherData;

  try {
    const response = await fetch(
      `${API_ENDPOINT}?key=${process.env.KEY}&q=${qry}&days=${forecastAmount}`
    );

    weatherData = await response.json();

    console.log(weatherData.forecast);
  } catch (err) {
    console.log(err);
  }

  return weatherData;
}

export default async function Home() {
  const weatherData = await getWeatherData('Los Angeles');

  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>Home</h1>
      <h2 className='text-2xl font-semibold'>Forecast Days</h2>
      {weatherData.forecast.forecastday.map((day) => (
        <h3 className='text-xl' key={day.date}>
          {day.date}
        </h3>
      ))}
    </main>
  );
}
