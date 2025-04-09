
const WeatherInfoBoard = ({ weatherData }) => {
    if (!weatherData) {
        return <div>Loading...</div>;
    }
  const { temperature, humidity, windSpeed } = weatherData;

  return (
    <div className="weather-info-board">
      <h2>Weather Information</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed}km/h</p>
    </div>
    );
}

export default WeatherInfoBoard;
// src/components/WeatherInfoBoard.jsx