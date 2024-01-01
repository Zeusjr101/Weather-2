async function get5DayForecast(city) {
  const apiKey = "b3e9b8f4b5dfc4b26953d6f528fa8297";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function singleDayForecast(city) {
  const apiKey = "b3e9b8f4b5dfc4b26953d6f528fa8297";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function setWeatherParameters() {
  const city = document.getElementById("search-input").value;

  const fiveDayForecast = await get5DayForecast(city);
  const singleDayForecast = await singleDayForecast(city);

  document.getElementById("current-temp").innerHTML =
  singleDayForecast.main.temp;
  document.getElementById("wind").innerHTML = singleDayForecast.wind.speed;
  document.getElementById("humidity").innerHTML =
  singleDayForecast.main.humidity;
  document.getElementById("city").innerHTML = singleDayForecast.name;

  document.getElementById("day-1-temp").innerHTML =
    fiveDayForecast.list[0].main.temp;
  document.getElementById("day-1-wind").innerHTML =
    fiveDayForecast.list[0].wind.speed;
  document.getElementById("day-1-humidity").innerHTML =
    fiveDayForecast.list[0].main.humidity;

  document.getElementById("day-2-temp").innerHTML = fiveDayForecast[1].main.temp;
  document.getElementById("day-2-wind").innerHTML = fiveDayForecast[1].temp;
  document.getElementById("day-2-humidity").innerHTML =
    fiveDayForecast[1].humidity;

  document.getElementById("day-3-temp").innerHTML = fiveDayForecast[2].temp;
  document.getElementById("day-3-wind").innerHTML = fiveDayForecast[2].wind;
  document.getElementById("day-3-humidity").innerHTML =
    fiveDayForecast[2].humidity;

  document.getElementById("day-4-temp").innerHTML = fiveDayForecast[3].temp;
  document.getElementById("day-4-wind").innerHTML = fiveDayForecast[3].wind;
  document.getElementById("day-4-humidity").innerHTML =
    fiveDayForecast[3].humidity;

  document.getElementById("day-5-temp").innerHTML = fiveDayForecast[4].temp;
  document.getElementById("day-5-wind").innerHTML = fiveDayForecast[4].wind;
  document.getElementById("day-5-humidity").innerHTML =
    fiveDayForecast[4].humidity;
}
$(document).ready(function () {
  var searchBtn = $(".btn-primary");
  var listBtnContainer = $(".row.btn");
  var inputEl = $("#search-input");

  searchBtn.on("click", function () {
    var city = inputEl.val();
    var cityBtn = $("<button>");
    cityBtn.addClass("btn btn-secondary btn-block");
    cityBtn.text(city);
    listBtnContainer.append(cityBtn);
    inputEl.val("");

    var pastBtn = $("<button>" + city + "</button>");
    pastBtn.addClass("past");

    pastBtn.on("click", function () {
      var city = $(this).text();
      getWeather(city);
    });
    listBtnContainer.append(pastBtn);

    // const apiKey = "b3e9b8f4b5dfc4b26953d6f528fa8297";
    // var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    // var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    setWeatherParameters(city);
  });
});
