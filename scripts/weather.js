const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=3da4e07b83a204fbcda5b0fa28f0db1a";

async function apiFetch() {
    // fetching file from url
    try {
        const response = await fetch(url);

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

function displayResults(data) {
    currentTemp.innerHTML = `${data.temp}&deg;C`;

    const icon = `https://openweathermap.org/img/wn/${data.icon}.png`;

    weatherIcon.innerHTML = `<img src="${icon}>`
}

apiFetch();