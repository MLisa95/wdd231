const apiKey = "3da4e07b83a204fbcda5b0fa28f0db1a";
const latitude = -32.9271;
const longitude = 27.7647;
const units = "metric";

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // CURRENT WEATHER //
        const temp = data.current.temp;
        const wind = data.current.wind_speed;
        const humidity = data.current.humidity;
        const sunrise = new Date(data.current.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.current.sunset * 1000).toLocaleTimeString();

        document.querySelector(".weather").innerHTML = `
            <p><strong>${temp}&deg;C</strong></p>
            <p>Wind: ${wind}km/h</p>
            <p>Humidity: ${humidity}%</p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
            `;

            // FORECAST //
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const forecastElements = document.querySelectorAll(".weather-forecast p");

            for (let i = 0; i < 3; i++) {
                const date = new Date(data.daily[i].dt * 1000);
                const dayName = i === 0 ? "Today" : days[date.getDay()];
                const min = data.daily[i].temp.min;
                const max = data.daily[i].temp.max;

                forecastElements[i].textContent = `${dayName}: ${min}°C - ${max}°C`;
            }
    } catch (err) {
        console.error("Weather fetch failed:", err);
    }

}

getWeather();