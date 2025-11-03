// grab the element (or button) and store in variable
const navButton = document.querySelector('#hamBtn');

const navLinks = document.querySelector('#navLinks');

// add event listener
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show'); /* 'show' appears and disappears = the toggling */
    navLinks.classList.toggle('show');
});