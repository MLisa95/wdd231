document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    timestampInput.value = new Date().toISOString();
});
