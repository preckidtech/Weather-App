const apiKey = "c38bcd0e6fe8a27288d5563d940aefa5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const form = document.querySelector(".form");

const inputField = document.querySelector(".input-field");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const weather = document.querySelector(".weather-section");
const errorMessage = document.querySelector(".error-message");
console.log(form);
console.log(searchBtn);
console.log(weatherIcon);
console.log(inputField);
console.log(humidity);
console.log(temperature);
console.log(cityName);
console.log(windSpeed);
console.log(weather);
console.log(errorMessage);

async function getWeather(city) {
  try {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await res.json();

    // conditional statement to show the check for the response status

    if (res.status === 404) {
      errorMessage.style.display = "block";
      weather.style.display = "none";
    } else {
      console.log(data);
      console.log(data.main.humidity);
      cityName.textContent = data.name;
      temperature.textContent = `${String(Math.round(data.main.temp))}°C`;
      humidity.textContent = `${String(data.main.humidity)}%`;
      windSpeed.textContent = `${String(data.wind.speed)}km/hr`;

      switch (data.weather[0].main) {
        case "Clouds":
          weatherIcon.src = "./asset/cloud.png";
          break;
        case "Rain":
          weatherIcon.src = "./asset/rain.png";
          break;
        case "Snow":
          weatherIcon.src = "./asset/snow.png";
          break;
        case "Clear":
          weatherIcon.src = "./asset/clear-sky.png";
          break;
        case "Drizzle":
          weatherIcon.src = "./asset/drizzle.png";
          break;
        case "Mist":
          weatherIcon.src = "./asset/mist.png";
          break;

        default:
          weatherIcon.src = "./asset/windy.png";
          break;
      }
    }
  } catch (error) {
    console.log("The error is ", error);
  }
}

const onSearch = () => {
  searchBtn.addEventListener("submit", () => {
    console.log("button is clicked");
    weather.style.display = "block";
    getWeather(inputField.value);
    inputField.value = "";
  });
};

const onSubmitData = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
    weather.style.display = "block";
    getWeather(inputField.value);
    inputField.value = "";
  });
};
onSubmitData();
// getWeather();
