// RF1 - Formula 1 Rookie Guide

// =========================================
// CURRENT YEAR
// =========================================

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


// =========================================
// F1 DICTIONARY
// =========================================

const termButtons =
    document.querySelectorAll(".term-button");

termButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const termCard =
            button.parentElement;

        const isOpen =
            termCard.classList.toggle("open");

        button.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

});


// =========================================
// RACE WEEKEND
// =========================================

const raceSteps =
    document.querySelectorAll(".race-step");

const racePanels =
    document.querySelectorAll(".race-panel");

raceSteps.forEach((step) => {

    step.addEventListener("click", () => {

        // Get the selected race stage
        // from the data-race attribute
        const selectedStep =
            step.dataset.race;


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