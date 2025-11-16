const city = document.querySelector("#city-name");
const icon = document.querySelector("#forecastIcon");
const desc = document.querySelector("#description");
const temp = document.querySelector("#temperature");
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
        const response = await fetch(myUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text()); // read error as TEXT to prevent second error
        }

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    weatherContainer.innerHTML = `
    <h4>${data.temp}</h4>
    <p>${data.desc}</p>`
}

apiFetch();

displayWeather();