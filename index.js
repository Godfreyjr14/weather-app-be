require('dotenv').config();
const express = require('express');
const cors = require('cors')
const getWeather = require("./api/weather.js");

const port =5000;
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/weather', async (req, res) => {
    console.log("CITY ", req.query.city);
    const city = req.query.city;
    // Check if the city parameter is provided in the query string
    if (!city) {
        return res.status(400).send({ error: "City parameter is required" });
    }
    const weatherData = await getWeather(city);
    console.log("weather data", weatherData)
    if (!weatherData) {
        return res.status(404).send({ error: "City not found" });
    }
    res.send(weatherData );
})
app.listen(port, () => { 
    console.log(`Server started and running on port ${port}`);
})