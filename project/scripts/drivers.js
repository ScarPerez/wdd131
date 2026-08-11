/* =========================================
   RF1 - DRIVERS
   ========================================= */


const drivers = [

    {
        name: "Lando Norris",
        number: 1,
        team: "mclaren",
        country: "United Kingdom"
    },

    {
        name: "Oscar Piastri",
        number: 81,
        team: "mclaren",
        country: "Australia"
    },

    {
        name: "Charles Leclerc",
        number: 16,
        team: "ferrari",
        country: "Monaco"
    },

    {
        name: "Lewis Hamilton",
        number: 44,
        team: "ferrari",
        country: "United Kingdom"
    },

    {
        name: "George Russell",
        number: 63,
        team: "mercedes",
        country: "United Kingdom"
    },

    {
        name: "Kimi Antonelli",
        number: 12,
        team: "mercedes",
        country: "Italy"
    },

    {
        name: "Max Verstappen",
        number: 3,
        team: "red-bull",
        country: "Netherlands"
    },

    {
        name: "Fernando Alonso",
        number: 14,
        team: "aston-martin",
        country: "Spain"
    }

];


const driversGrid =
    document.querySelector("#drivers-grid");

const searchInput =
    document.querySelector("#driver-search");

const filterButtons =
    document.querySelectorAll(".filter-button");

const noResults =
    document.querySelector("#no-results");


let selectedTeam = "all";


function displayDrivers(driverList) {

    driversGrid.innerHTML = "";


    if (driverList.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    driverList.forEach((driver) => {

        const card =
            document.createElement("article");

        card.classList.add("driver-card");


        card.innerHTML = `

            <div class="driver-number">
                ${driver.number}
            </div>

            <div class="driver-card-content">

                <p class="driver-team">
                    ${formatTeamName(driver.team)}
                </p>

                <h3>
                    ${driver.name}
                </h3>

                <p class="driver-country">
                    ${driver.country}
                </p>

            </div>

        `;


        driversGrid.appendChild(card);

    });

}


function formatTeamName(team) {

    const names = {

        "mclaren": "McLaren",

        "ferrari": "Ferrari",

        "mercedes": "Mercedes",

        "red-bull": "Red Bull",

        "aston-martin": "Aston Martin"

    };


    return names[team] || team;

}


function filterDrivers() {

    const searchTerm =
        searchInput.value.toLowerCase().trim();


    const filteredDrivers =
        drivers.filter((driver) => {

            const matchesTeam =
                selectedTeam === "all" ||
                driver.team === selectedTeam;


            const matchesSearch =
                driver.name
                    .toLowerCase()
                    .includes(searchTerm);


            return matchesTeam && matchesSearch;

        });


    displayDrivers(filteredDrivers);

}


/* SEARCH */

searchInput.addEventListener(
    "input",
    filterDrivers
);


/* TEAM FILTER */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        selectedTeam =
            button.dataset.team;


        filterDrivers();

    });

});


/* INITIAL DISPLAY */

displayDrivers(drivers);


/* CURRENT YEAR */

const currentYear =
    document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}