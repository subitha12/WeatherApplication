document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    getWeatherBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();

        if (city === '') {
            alert('Please enter a city name.');
            return;
        }

        const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found.');
                }
                return response.json();
            })
            .then(data => {
                const weather = data.weather[0];
                const main = data.main;
                const cityName = data.name;

                weatherInfo.innerHTML = `
                    <h2>${cityName}</h2>
                    <p>${weather.description}</p>
                    <p>Temperature: ${main.temp}°C</p>
                    <p>Humidity: ${main.humidity}%</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather:', error.message);
                weatherInfo.innerHTML = '<p>Error fetching weather. Please try again later.</p>';
            });
    });
});
