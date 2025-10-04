document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card"); // get all member cards
    const modal = document.getElementById("membershipModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.querySelector(".close-button");

    // let's open the modal when clicked
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.type !== "radio") {
                modalTitle.textContent = card.dataset.title;
                modalDescription.textContent = card.dataset.description;
                modal.style.display = 'flex';
            }
            });
        });

    // Close modal
    closeButton.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

});