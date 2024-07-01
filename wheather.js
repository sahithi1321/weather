const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        displayWeather(data);
    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-result');
    weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}, ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%, Wind: ${data.wind.speed} m/s</p>
    `;
}