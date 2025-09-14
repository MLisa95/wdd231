// year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// last modified
const lastMod = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastMod.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});