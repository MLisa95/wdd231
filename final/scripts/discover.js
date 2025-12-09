import { natureItems } from "../data/natureItems.mjs";

const grid = document.querySelector(".nature");

natureItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("nature-card");

    card.innerHTML = `
    <figure>
        <img src="${item.image}" alt="${item.name}">
    </figure>
    <h2>${item.name}</h2>
    <h3>Origin: ${item.origin}</h3>
    <p>${item.description}</p>
    <p class="fun-fact">${item.funFact}</p>
    `

    grid.appendChild(card);

});

const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");

gridBtn.addEventListener("click", () => {
    businesses.classList.add("grid");
    businesses.classList.remove("list");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  businesses.classList.add("list");
  businesses.classList.remove("grid");

  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});