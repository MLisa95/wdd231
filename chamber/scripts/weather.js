// const city = document.querySelector("#city-name");
// const icon = document.querySelector("#forecastIcon");
// const desc = document.querySelector("#description");
// const temp = document.querySelector("#temperature");
const weatherContainer = document.querySelector("#weather");

// VARIABLES FOR URL
const lat = "-32.88";
const long = "27.39";
const apiKey = "3da4e07b83a204fbcda5b0fa28f0db1a";

// FULL PATH URL
const myUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    // fetching file from url
    try {
        const response = await fetch(myUrl); // 1. go fetch the URL

        if (response.ok) {
    
            const data = await response.json(); // 2. when you find it, concert it to .json
            console.log(data); // print for debugging

            // 3. call displayData() after data is fetched
            displayWeather(data);
        } else {
            throw Error(await response.text()); // read error as TEXT to prevent second error
        }

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {

    weatherContainer.innerHTML = ``;

    // 1. grab first forecast item
    const forecastItem = data.list[0];

    // 2. grab temperature from main
    const temp = Math.floor(forecastItem.main.temp);

    // 3. grab description
    const description = forecastItem.weather[0].description;

    // 4. grab icon
    const iconCode = forecastItem.weather[0].icon;
    const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    // 5. create div for weatherContainer

    // card where weather will go
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('forecast');

        weatherCard.innerHTML = `
            <h4>${temp}&deg;C</h4>
            <p>${description}</p>
            <img src="${icon}" alt="Weather Icon">
        `

    weatherContainer.appendChild(weatherCard);

    // FORECAST ITEMS
    const forecasts = document.querySelector('#threeDayFore');

    //1. grab forecast at desired time
    const morningForecast = data.list.filter(item => item.dt_txt.includes("09:00:00")).slice(0, 3);

    // 2. loop through forecasts
    morningForecast.forEach(day => {
        const temp = Math.floor(day.main.temp);
        const description = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // converting dt_txt to Date
        const date = new Date(day.dt_txt);
        const weekday = date.toLocaleDateString("en-US", {weekday: "long"});

        const dayCard = document.createElement('div');
        dayCard.classList.add('day-forecast');

        dayCard.innerHTML = `
        <div class="forecast-details">
            <h3>${weekday}</h3>
            <h4>${temp}&deg;C</h4>
            <p>${description}</p>
            <img src="${icon}" alt="Weather Icon">
        </div>`

        forecasts.appendChild(dayCard);
        
});
}

apiFetch();