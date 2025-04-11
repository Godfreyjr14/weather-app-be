import { FaCity, FaTemperatureLow, FaWind, FaSnowflake } from "react-icons/fa6";

const WeatherInfoBoard = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const { temperature, humidity, windSpeed, cityName } = weatherData;

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="text-justify">
        <h2 className="my-4"><b className="animate-pulse">
          <FaCity className="inline-block ml-2" size={20} /> {cityName}
          </b> Weather Information</h2>
        <p>Temperature: {temperature}°C
          <FaTemperatureLow className="inline-block ml-2" size={20} />
        </p>
        <p>Humidity: {humidity}%
          <FaSnowflake className="inline-block ml-2" size={20} />
        </p>
        <p>Wind Speed: {windSpeed}km/h 
          <FaWind className="inline-block ml-2" size={20} />
        </p>
        
      </div>
    </div>
  );
}

export default WeatherInfoBoard;
// src/components/WeatherInfoBoard.jsx