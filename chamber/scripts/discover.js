import { qoncePoints } from "../data/qonceAreas.mjs";

const grid = document.querySelector("#discoverGrid");

qoncePoints.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
        <img src="${place.imageSrc}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn more...</button>`

    grid.appendChild(card);
});