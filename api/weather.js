const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
if (!OPENWEATHER_KEY) {
    throw new Error("Missing OpenWeather API key");
}
// This is the URL for the OpenWeather API
// It includes the API key and the base URL for the weather endpoint
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${OPENWEATHER_KEY}&q=`;

async function getWeather(city) {
    try {
    const response = await fetch(
        url + `${encodeURIComponent(city)}&language=en&format=json`, //
    );
    if (!response.ok) throw new Error("City not found");
     const data = await response.json();
    return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
module.exports = getWeather;