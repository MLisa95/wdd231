async function loadSpotlight() {
    const spotlightContainer = document.querySelector('#spotlight');
    
    // clear previous content
    spotlightContainer.innerHTML = '';

    try {
        // waiting for file to be fetched
        const response = await fetch("data/members.json");

        // waitinf for JSON data to be fetched
        const data = await response.json();

        // filtered data
        const spotlight = data.filter(business => business.membershipLevel === "gold" || business.membershipLevel === "silver");
        const firstThree = spotlight.slice(0, 3);

        // now for the loop
        firstThree.forEach((member) => {
            const spotlightCard = document.createElement('div');
            spotlightCard.classList.add('spotlight-card');

            spotlightCard.innerHTML = `
            <div class="spotlight-image">
                <img src="${member.image}" alt="${member.name}"/>
            </div>
            <div class="spotlight-details">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.email}</p>
                <h3>Rank: ${member.membershipLevel}</h3>
            </div>
            `;

            spotlightContainer.appendChild(spotlightCard);
        });
    
    } catch (error) {
        console.error("Error loading students:", error);
        spotlightContainer.innerHTML = "<p>⚠️ Could not load spotlight data.</p>";
    }
}

loadSpotlight();