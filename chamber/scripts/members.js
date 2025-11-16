const businesses = document.querySelector("#grid-list");

async function loadBusiness() {
    // clear previous content
    businesses.innerHTML = '';

    try {
        // waiting for file to be fetched
        const response = await fetch("data/members.json");

        // waitinf for JSON data to be fetched
        const data = await response.json();

        // now for the loop
        data.forEach((member) => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}"/>
            </div>
            <div class="member-details">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.email}</p>
                <h3>Membership: ${member.membershipLevel}</h3>
            </div>
            `;

            businesses.appendChild(memberCard);
        });
    
    } catch (error) {
        console.error("Error loading students:", error);
        businesses.innerHTML = "<p>⚠️ Could not load student data.</p>";
    }
}

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


loadBusiness();