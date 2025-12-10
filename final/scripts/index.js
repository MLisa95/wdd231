const monthlyTheme = document.querySelector("#theme");

async function loadTheme() {
    // clear previous content
    monthlyTheme.innerHTML = '';

    try {
        // waiting for file to be fetched
        const response = await fetch("data/monthlyThemes.json");

        // waiting for JSON data to be fetched
        const themes = await response.json();

        // Current month names
        const monthNames = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];


        const currentMonth = monthNames[new Date().getMonth()];

        const theme = themes.find(t => t.month === currentMonth);

        if (theme) {
            const themeCard = document.createElement("div");
            themeCard.classList.add('theme-card');

            themeCard.innerHTML = `
            <div class="card-details">
                <figure>
                    <img src="${theme.imageSrc}" alt="${theme.name}">
                    <figcaption>${theme.description}</figcaption>
                </figure>
            </div>`;

            monthlyTheme.appendChild(themeCard);
        } else {
            monthlyTheme.innerHTML = "<p>No theme found for this month.</p>"
        }

    } catch (error) {
        console.error("Error loading theme:", error);
        monthlyTheme.innerHTML = "<p>⚠️ Could not load theme data.</p>";
    }
}

loadTheme();