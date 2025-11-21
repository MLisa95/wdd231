// Select all cards with data-modal
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const modalId = card.dataset.modal; // get the modal ID
    const modal = document.getElementById(modalId);
    const btn = card.querySelector('button'); // button inside the card
    const closeBtn = modal.querySelector('.close');

    // Open modal on button click
    btn.addEventListener('click', () => {
        modal.showModal();
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
});
