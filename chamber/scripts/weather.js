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

        const temp = currentData.main.temp;
        const description = currentData.weather[0].description;
        const wind = currentData.wind.speed;
        const humidity = currentData.main.humidity;

        const condition = currentData.weather[0].main.toLowerCase();
        let icon = "";

        // set weather icons based on condition
        if (condition === "clear") {
            icon = "☀️";
            } else if (condition === "clouds") {
                icon = "🌥️";
            } else if (condition === "rain") {
                icon = "🌧️";
            } else if (condition === "drizzle") {
                icon = "🌦️"; 
            } else if (condition === "thunderstorm") {
                icon = "⛈️";
            } else if (["mist", "fog", "haze"].includes(condition)) {
                icon = "🌫️";
            } else if (condition === "windy") {
                icon = "💨";
            } else {
                icon = "🌈"; 
            }

        document.querySelector(".weather").innerHTML = `
            <p class = "weather-digit"><strong>${Math.round(temp)}&deg;C ${icon}</strong></p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Wind:</strong> ${wind}km/h</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            `;

            // 3-day forecast
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            const forecastElements = document.querySelectorAll(".weather-forecast p");
            const daysSeen = new Set();
            let filled = 0;

            for (let entry of forecastData.list) {
                const date = new Date(entry.dt * 1000);
                const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

                if (!daysSeen.has(dayName) && filled < 3) {
                    const min = entry.main.temp_min;
                    const max = entry.main.temp_max;

                    const label = filled === 0 ? "Today" : dayName;
                    forecastElements[filled].innerHTML = `
                    <div class="forecast-details">
                        <p class="day">${label}</p>
                        <p class="forecast-icon">${icon}</p>
                        <p class="max-temp">${max.toFixed(0)}°</p>
                        <p class="min-temp">${min.toFixed(0)}°</p>
                    </div>
                    `;

                    daysSeen.add(dayName);
                    filled++;
                }
            }
        } catch (err) {
            console.error("Weather fetch failed:", err);
        }
    }

getWeather();
