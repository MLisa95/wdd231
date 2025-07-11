// target DOM where the cards will go
const container = document.querySelector("#businessCards");

// fetch the .json file with business info
fetch("members.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((business) => {
            const card = document.createElement("div") //create a div element for each business
            card.classList.add("business-card"); // add a class of "business-card" for styling - CSS

            // in this card, add the following:
            card.innerHTML = `
                <div class="card-header">
                <h3>${business.name}</h3>
                <p class="tagline">${business.tagline}</p>
                </div>
                <div class="card-body">
                <img src="${business.logo}" alt="${business.name} logo">
                <div class="card-details">
                    <p><strong>EMAIL:</strong> ${business.email}</p>
                    <p><strong>PHONE:</strong> ${business.phone}</p>
                    <p><strong>URL:</strong> <a href="${business.url}" target="_blank">${business.url}</a></p>
                </div>
                </div>
            `;

            // append what you created
            container.appendChild(card);
        });

    })

    // in the case your .json file could not load or bet fetched
    .catch((error) => console.error("Error loading businesses:", error));
