// Get the current year
const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;