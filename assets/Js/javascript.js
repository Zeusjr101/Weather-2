<div class="future-card bg-primary rounded">
 <p class="future-date" id="future-date-1"></p>
 <img id="future-icon-1" src="" alt="" />
 <p class="future-temp" id="future-temp-1"></p>
 <p class="future-humidity" id="future-humidity-1"></p>
</div>

<script>
 // Assuming you have an array of future weather data called 'futureWeatherData'
 for (let i = 0; i < futureWeatherData.length; i++) {
    // Create a new div element for each future card
    const futureCard = document.createElement('div');
    futureCard.classList.add('future-card', 'bg-primary', 'rounded');

    // Create a new paragraph element for the future date
    const futureDate = document.createElement('p');
    futureDate.classList.add('future-date');
    futureDate.id = 'future-date-' + (i + 2);
    futureDate.textContent = futureWeatherData[i].date;

    // Create a new img element for the future weather icon
    const futureIcon = document.createElement('img');
    futureIcon.id = 'future-icon-' + (i + 2);
    futureIcon.src = futureWeatherData[i].icon;
    futureIcon.alt = '';

    // Create a new paragraph element for the future temperature
    const futureTemp = document.createElement('p');
    futureTemp.classList.add('future-temp');
    futureTemp.id = 'future-temp-' + (i + 2);
    futureTemp.textContent = futureWeatherData[i].temp;

    // Create a new paragraph element for the future humidity
    const futureHumidity = document.createElement('p');
    futureHumidity.classList.add('future-humidity');
    futureHumidity.id = 'future-hum