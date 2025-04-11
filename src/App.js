import { useState, useEffect, useCallback, use } from 'react';
import './App.css';
import WeatherInfoBoard from './components/WeatherInfoBoard';
import request from './api/request';
import { FaMagnifyingGlass, FaSpinner } from 'react-icons/fa6';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(false);
  const [loading, setLoading] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    if (!city.trim()) return; // Prevent empty city search
    try {
      setLoading(true);
      const data = await request(`/weather?city=${encodeURIComponent(city)}`, 'GET');
      setWeatherData({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        visibility: data.visibility,
        cityName: data.name,
        country: data?.sys?.country,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    } finally {
      setLoading(false);
    }
  }, [city]);

  // 
  useEffect(() => {
    setCity('Lagos');
  }, []);

  useEffect(() => {
    if (city) fetchWeatherData();
  }, [city, fetchWeatherData]);

  return (
    <div className="weather-info-board">
      <h1>Welcome to Weather App</h1>
      <p>This is a simple Weather Application</p>
      <h2>Search for a City</h2>
      <div className="weather-search_">
        <div className='flex items-center justify-center'>
          <input type='text' placeholder='Enter city name'
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className='border border-gray-300 rounded px-4 py-2'
          />
          <button onClick={fetchWeatherData} disabled={loading}
            className='bg-blue-500 text-white px-4 py-2 rounded'>
            {loading ?
              <>
                <FaSpinner className='animate-spin' size={20} /></> :
              <>
                <FaMagnifyingGlass size={20} className='ml-2' />
              </>
            }
          </button>
        </div>
      </div>

      <WeatherInfoBoard weatherData={weatherData} />
    </div>
  );
}
export default App;
