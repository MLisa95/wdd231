// fetch .json file
fetch('data/discover.json')
    .then(response => response.json()) // get response object and convert to .json format
    .then(data => {
        const grid = document.querySelector('.discover-grid');
        data.forEach(item => {
            const card = document.createElement('div'); // create card for each interest
            card.classList.add('card'); // class name for CSS styling
            card.innerHTML = `
                <h2>${item.title}</h2>
                <figure><img src="${item.image}" alt="${item.title}"></figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More...</button>
            `;
            grid.appendChild(card);
        });
    });

    const messageArea = document.getElementById('visitor-message'); // already an Id
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        messageArea.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            messageArea.textContent = "Back so soon! Awesome!";
        } else {
            messageArea.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
        }
    }

    localStorage.setItem('lastVisit, now');
