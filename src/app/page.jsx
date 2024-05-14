import WeatherCard from '@/components/WeatherCard';

export default async function Home() {
  return (
    <main
      className='hero min-h-screen'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <WeatherCard />
      </div>
    </main>
  );
}
