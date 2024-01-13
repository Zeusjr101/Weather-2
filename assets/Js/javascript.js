
function searchWeather() {
  const apiKey = 'b3e9b8f4b5dfc4b26953d6f528fa8297';
  const cityName = document.getElementById('search-input').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      updateCurrentWeather(data);
    })
    .catch(error => console.error('Error fetching current weather:', error));

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      updateForecast(data);
    })
    .catch(error => console.error('Error fetching forecast:', error));
}

function updateCurrentWeather(data) {
  const cityNameElement = document.getElementById('city-name');
  const tempElement = document.getElementById('temp');
  const highElement = document.getElementById('high');
  const humidityElement = document.getElementById('humidity');
  const windSpeedElement = document.getElementById('wind-speed');

  cityNameElement.textContent = data.name;
  tempElement.textContent = `Temperature: ${data.main.temp}℉`;
  highElement.textContent = `High: ${data.main.temp_max}℉`;
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function updateForecast(data) {
  const forecastContainer = document.querySelector('.weather-card');
  forecastContainer.innerHTML = ''; 

  for (let i = 0; i < data.list.length; i += 8) {
    const forecastData = data.list[i];
    const date = new Date(forecastData.dt * 1000);

    const forecastElement = document.createElement('div');
    forecastElement.className = 'forecast-item';
    forecastElement.innerHTML = `
      <h3>${date.toDateString()}</h3>
      <p>Temperature: ${forecastData.main.temp}℉</p>
      <p>High: ${forecastData.main.temp_max}℉</p>
      <p>Humidity: ${forecastData.main.humidity}%</p>
      <p>Wind Speed: ${forecastData.wind.speed} m/s</p>
    `;

    forecastContainer.appendChild(forecastElement);
  }
}
