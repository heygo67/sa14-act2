const apiKey = '70436db8b945449298e182610240904';

const form = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityName = cityInput.value;
    const weatherData = await fetchWeather(cityName);
    displayWeather(weatherData);
});

async function fetchWeather(city) {
    const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=imperial`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&units=imperial`;

    try {
        const currentResponse = await fetch(currentUrl);
        const currentData = await currentResponse.json();

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        return { current: currentData, forecast: forecastData.forecast.forecastday };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}



function displayWeather(data) {
    currentWeatherDiv.innerHTML = `
        <h2>${data.current.location.name}, ${data.current.location.country}</h2>
        <p>Temperature: ${data.current.current.temp_f}°F</p>
        <p>Condition: ${data.current.current.condition.text}</p>
        <p>Humidity: ${data.current.current.humidity}%</p>
        <img src="${data.current.current.condition.icon}" alt="Weather Icon">
    `;

    forecastDiv.innerHTML = '';
    data.forecast.forEach(day => {
        forecastDiv.innerHTML += `
            <div>
                <h3>${day.date}</h3>
                <p>Max Temp: ${day.day.maxtemp_f}°F</p>
                <p>Min Temp: ${day.day.mintemp_f}°F</p>
                <img src="${day.day.condition.icon}" alt="Weather Icon">
            </div>
        `;
    });
}

