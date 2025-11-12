const businesses = document.querySelector("#grid-list")
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");

gridBtn.addEventListener("click", () => {
    businesses.classList.add("grid-view");
    businesses.classList.remove("list-view");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    businesses.classList.add("list-view");
    businesses.classList.remove("grid-view");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});
