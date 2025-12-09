// CURRENT YEAR
const currentYear = new Date();

const year = currentYear.getFullYear();

document.querySelector("#currentYear").textContent = year;

// LAST MODIFIED
const modified = new Date(document.lastModified);

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    const date = modified.toLocaleString("en-ZA", options);

    document.getElementById("lastModified").innerHTML = `Last Modified: ${date}`;

// FORM TIMESTAMP

// triggered when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // finding first form element
    const form = document.querySelector("form");

    // add event listener to submit event on form = triggered when submit button pressed
    form.addEventListener("submit", () => {
        
        // creating Date object using client time
        const now = new Date();

        const format = `${now.getDate()} ${now.toLocaleString("default", {month: "long"})} ${now.getFullYear()} 
        ${now.toLocaleDateString([], {hour: "2-digit", minute: "2-digit"})}`;

        document.querySelector('#timestamp').value = format;
    });
});