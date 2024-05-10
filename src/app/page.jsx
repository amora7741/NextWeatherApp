import WeatherCard from '@/components/WeatherCard';

export default async function Home() {
  return (
    <main
      className='min-h-screen flex flex-col items-center justify-center bg-center bg-cover'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <WeatherCard />
    </main>
  );
}
