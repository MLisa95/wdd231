const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const cards = document.querySelector("#businessCards");

gridBtn.addEventListener("click", () => {
  cards.classList.add("grid-view");
  cards.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  cards.classList.add("list-view");
  cards.classList.remove("grid-view");
});
