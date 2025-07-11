const hamBtn = document.querySelector('#ham-btn');
const navList = document.querySelector('.nav-bar ul');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
    navList.classList.toggle('show');
});
