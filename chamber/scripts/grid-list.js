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
