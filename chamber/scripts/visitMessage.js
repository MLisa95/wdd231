// selecting message area
const message = document.querySelector("#visitMessage");

// getting last visit time
const lastVisit = localStorage.getItem("lastVisit");


// get current date
const currentDate = Date.now();

if (!lastVisit) {
    // no previous visit found
    message.textContent = "Welcome, Explorer! I hope you learn something new today."
} else {
    // convert string to number
    const lastVisitTime = Number(lastVisit);

    // difference in milliseconds
    const difference = currentDate - lastVisitTime;

    // convert milliseconds to days (1 daay = 1000 ms * 60 * 60 * 24)
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (difference < 1000 * 60 * 60 *24) {
        // less than full day
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

// update last visit to NOW for next time
localStorage.setItem("lastVisit", currentDate);