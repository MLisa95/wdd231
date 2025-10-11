document.addEventListener("DOMContentLoaded", () => {
    const staffContainer = document.getElementById("staffContainer");
    const gradeFilter = document.getElementById("gradeFilter");
    const subjectFilter = document.getElementById("subjectFilter");
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");

    //  creating a container for staff data to go in = empty array
    let staffData = [];

    // fetching data to fill empty variable
    fetch("data/staff.json")
        .then(response => response.json())
        .then(data => {
            staffData = data;  // replacing empty array with staff data we have
            populateFilters(data);
            displayStaff(data);
        })
        .catch(error => console.error("Error loading staff data:", error)); // fallback if there's an error in getting staff data

    // populating filters dynamically
    function populateFilters(data) {
        const grades = new Set();
        const subjects = new Set();

        data.forEach(staff => {
            staff.grades.forEach(g => grades.add(g));
            staff.subjects.forEach(s => subjects.add(s));
        });

        grades.forEach(grade => {
            const option = document.createElement("option");
            option.value = grade;
            option.textContent = grade;
            gradeFilter.appendChild(option);
        });

        subjects.forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectFilter.appendChild(option);
        });
    }

    // STEP 3: Display staff cards
    function displayStaff(data) {
        staffContainer.innerHTML = "";
        data.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("staff-card");

            card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" class="staff-image">
                    <div class="staff-info">
                        <h3>${member.name}</h3>
                        <p><strong>Subjects:</strong> ${member.subjects.join(", ")}</p>
                        <p><strong>Grades:</strong> ${member.grades.join(", ")}</p>
                        <p><strong>Qualifications:</strong> ${member.qualifications}</p>
                        <p class="desc">${member.description}</p>
                    </div>
            `;

            staffContainer.appendChild(card);
        });
    }

    // STEP 4: Filtering logic
    function filterStaff() {
        const selectedGrade = gradeFilter.value;
        const selectedSubject = subjectFilter.value;

        const filtered = staffData.filter(staff => {
            const gradeMatch = !selectedGrade || staff.grades.includes(selectedGrade);
            const subjectMatch = !selectedSubject || staff.subjects.includes(selectedSubject);
            return gradeMatch && subjectMatch;
        });

        displayStaff(filtered);
    }

    gradeFilter.addEventListener("change", filterStaff);
    subjectFilter.addEventListener("change", filterStaff);

    // STEP 5: View toggle buttons
    gridViewButton.addEventListener("click", () => {
        staffContainer.classList.add("grid-view");
        staffContainer.classList.remove("list-view");
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
    });

    listViewButton.addEventListener("click", () => {
        staffContainer.classList.add("list-view");
        staffContainer.classList.remove("grid-view");
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
    });
});
