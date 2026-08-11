// RF1 - Formula 1 Rookie Guide

// Current year in footer
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}

// F1 Dictionary

const termButtons = document.querySelectorAll(".term-button");

termButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const termCard = button.parentElement;

        termCard.classList.toggle("open");

    });

});

// Race Weekend

const raceSteps = document.querySelectorAll(".race-step");
const racePanels = document.querySelectorAll(".race-panel");

raceSteps.forEach((step) => {

    step.addEventListener("click", () => {

        const selectedStep = step.dataset.step;


        // Remove active state from buttons
        raceSteps.forEach((item) => {
            item.classList.remove("active");
        });


        // Remove active state from panels
        racePanels.forEach((panel) => {
            panel.classList.remove("active");
        });


        // Activate selected button
        step.classList.add("active");


        // Activate selected information panel
        const selectedPanel =
            document.querySelector(`#${selectedStep}`);

        if (selectedPanel) {
            selectedPanel.classList.add("active");
        }

    });

});