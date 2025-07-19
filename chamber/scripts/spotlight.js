const spotlight = document.querySelector(".events");

async function getMembers() {
    // fetch data
    const response = await fetch("members.json"); // wait here while we fetch the 'members.json' file and put it into "response"
    const members = await response.json(); // now wait here while we convert data stored in "response" into a .json file so we can work with it in JS

    // let's filter to only get gold or silver members
    const spotlightMembers = members.filter(member =>
        member.membership === "gold" || member.membership === "silver" // these are stored in spotlightMmembers
    );

    // invoke function - SHUFFLING using Fisher-Yates
    shuffleMembers(spotlightMembers);

    // we want 2 randomly shuffled members to spotlight
    const selected = spotlightMembers.slice(0, 3);
    console.log("Spotlight members:", selected);

    // INITIALIZE!! ✨
    displaySpotlights(selected);

    // now let's shuffle spotlightMembers to get randomized output
    function shuffleMembers(array)
    {
        // loop through elements
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            // swap array[i] and array [j] for randomized members effect
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displaySpotlights(members) {
        const container = document.querySelector(".spotlights");

        // let's make a lovely card for each prestigous member of our chamber
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlights-card");

            // conditionally assign badge image, we wanna be fancy
            const badge = member.membership === "gold"
            ? "images/gold-badge.png"
            : "images/silver-badge.png";

            card.innerHTML = `
            <h3>${member.name}</h3>
            <div class="logo-and-badge">
                <img class="biz-logo" src="${member.logo}" alt="${member.name}" logo">
                <div class="spotlight-details">
                    <p class="status"><strong>Status:</strong> <img src=${badge} class="badge"></p>
                    <p>${member.phone}</p>
                    <p>${member.email}</p>
                </div>
            </div>
            `;

            container.appendChild(card);

        });
    }
}

// INVOKE!!! ✨
getMembers();

