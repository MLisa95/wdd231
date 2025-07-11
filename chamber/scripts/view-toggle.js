const container = document.querySelector("#businessCards");
const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

gridButton.addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
});