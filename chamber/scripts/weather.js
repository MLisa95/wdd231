const apiKey = "3da4e07b83a204fbcda5b0fa28f0db1a";
const latitude = -32.9271;
const longitude = 27.7647;
const units = "metric";

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        // current weather
        const currentResponse = await fetch(currentUrl);
        const currentData = await currentResponse.json();

        document.querySelector(".weather").innerHTML = `
        <p><strong>Temp:</strong> ${Math.round(currentData.main.temp)}℃</p>
        <p><strong>Condition:</strong> ${currentData.weather[0].description}</p>
    
        `;
    } catch (error) {
        console.error("Weather fetch error:", error);
    }

}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastContainer = document.querySelector(".weather-forecast");
    forecastContainer.innerHTML = "<h2 class='home-headers'>Weather Forecast</h2>";


    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    daily.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString("en-GB", { weekday: "short", month: "short", day: "numeric" });
      forecastContainer.innerHTML += `
        <p><strong>${date}:</strong> ${Math.round(day.main.temp)}°C, ${day.weather[0].description}</p>
      `;
    });
  } catch (error) {
    console.error("Forecast fetch error:", error);
  }
}

getWeather();
getForecast();