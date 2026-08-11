/* =========================================
   RF1 - 2026 F1 DRIVERS
========================================= */

const drivers = [

    {
        name: "Lando Norris",
        number: 1,
        team: "McLaren",
        nationality: "United Kingdom",
        teamFilter: "mclaren",
        image: "images/drivers/lando-norris.webp"
    },

    {
        name: "Oscar Piastri",
        number: 81,
        team: "McLaren",
        nationality: "Australia",
        teamFilter: "mclaren",
        image: "images/drivers/oscar-piastri.webp"
    },

    {
        name: "George Russell",
        number: 63,
        team: "Mercedes",
        nationality: "United Kingdom",
        teamFilter: "mercedes",
        image: "images/drivers/george-russell.webp"
    },

    {
        name: "Kimi Antonelli",
        number: 12,
        team: "Mercedes",
        nationality: "Italy",
        teamFilter: "mercedes",
        image: "images/drivers/kimi-antonelli.webp"
    },

    {
        name: "Charles Leclerc",
        number: 16,
        team: "Ferrari",
        nationality: "Monaco",
        teamFilter: "ferrari",
        image: "images/drivers/charles-leclerc.webp"
    },

    {
        name: "Lewis Hamilton",
        number: 44,
        team: "Ferrari",
        nationality: "United Kingdom",
        teamFilter: "ferrari",
        image: "images/drivers/lewis-hamilton.webp"
    },

    {
        name: "Max Verstappen",
        number: 3,
        team: "Red Bull Racing",
        nationality: "Netherlands",
        teamFilter: "red-bull",
        image: "images/drivers/max-verstappen.webp"
    },

    {
        name: "Isack Hadjar",
        number: 6,
        team: "Red Bull Racing",
        nationality: "France",
        teamFilter: "red-bull",
        image: "images/drivers/isack-hadjar.webp"
    },

    {
        name: "Liam Lawson",
        number: 30,
        team: "Racing Bulls",
        nationality: "New Zealand",
        teamFilter: "racing-bulls",
        image: "images/drivers/liam-lawson.webp"
    },

    {
        name: "Arvid Lindblad",
        number: 41,
        team: "Racing Bulls",
        nationality: "United Kingdom",
        teamFilter: "racing-bulls",
        image: "images/drivers/arvid-lindblad.webp"
    },

    {
        name: "Pierre Gasly",
        number: 10,
        team: "Alpine",
        nationality: "France",
        teamFilter: "alpine",
        image: "images/drivers/pierre-gasly.webp"
    },

    {
        name: "Franco Colapinto",
        number: 43,
        team: "Alpine",
        nationality: "Argentina",
        teamFilter: "alpine",
        image: "images/drivers/franco-colapinto.webp"
    },

    {
        name: "Esteban Ocon",
        number: 31,
        team: "Haas",
        nationality: "France",
        teamFilter: "haas",
        image: "images/drivers/esteban-ocon.webp"
    },

    {
        name: "Oliver Bearman",
        number: 87,
        team: "Haas",
        nationality: "United Kingdom",
        teamFilter: "haas",
        image: "images/drivers/oliver-bearman.webp"
    },

    {
        name: "Nico Hulkenberg",
        number: 27,
        team: "Audi",
        nationality: "Germany",
        teamFilter: "audi",
        image: "images/drivers/nico-hulkenberg.webp"
    },

    {
        name: "Gabriel Bortoleto",
        number: 5,
        team: "Audi",
        nationality: "Brazil",
        teamFilter: "audi",
        image: "images/drivers/gabriel-bortoleto.webp"
    },

    {
        name: "Carlos Sainz",
        number: 55,
        team: "Williams",
        nationality: "Spain",
        teamFilter: "williams",
        image: "images/drivers/carlos-sainz.webp"
    },

    {
        name: "Alexander Albon",
        number: 23,
        team: "Williams",
        nationality: "Thailand",
        teamFilter: "williams",
        image: "images/drivers/alexander-albon.webp"
    },

    {
        name: "Fernando Alonso",
        number: 14,
        team: "Aston Martin",
        nationality: "Spain",
        teamFilter: "aston-martin",
        image: "images/drivers/fernando-alonso.webp"
    },

    {
        name: "Lance Stroll",
        number: 18,
        team: "Aston Martin",
        nationality: "Canada",
        teamFilter: "aston-martin",
        image: "images/drivers/lance-stroll.webp"
    },

    {
        name: "Sergio Perez",
        number: 11,
        team: "Cadillac",
        nationality: "Mexico",
        teamFilter: "cadillac",
        image: "images/drivers/sergio-perez.webp"
    },

    {
        name: "Valtteri Bottas",
        number: 77,
        team: "Cadillac",
        nationality: "Finland",
        teamFilter: "cadillac",
        image: "images/drivers/valtteri-bottas.webp"
    }

];


/* =========================================
   ELEMENTS
========================================= */

const driversGrid = document.querySelector("#drivers-grid");
const searchInput = document.querySelector("#driver-search");
const filterButtons = document.querySelectorAll(".driver-filter");
const noResults = document.querySelector("#no-results");
const currentYear = document.querySelector("#current-year");

let selectedTeam = "all";


/* =========================================
   DISPLAY DRIVERS
========================================= */

function displayDrivers(driverList) {

    driversGrid.innerHTML = "";

    if (driverList.length === 0) {

        noResults.hidden = false;

        return;
    }

    noResults.hidden = true;


    driverList.forEach((driver) => {

        const card = document.createElement("article");

        card.classList.add("driver-card");


        card.innerHTML = `

            <div class="driver-image-container">

                <img
                    class="driver-image"
                    src="${driver.image}"
                    alt="${driver.name}"
                    loading="lazy"
                    onerror="this.style.display='none';">

            </div>


            <div class="driver-number">
                ${driver.number}
            </div>


            <div class="driver-card-content">

                <p class="driver-team">
                    ${driver.team}
                </p>

                <h3>
                    ${driver.name}
                </h3>

                <p class="driver-nationality">
                    ${driver.nationality}
                </p>

            </div>

        `;


        driversGrid.appendChild(card);

    });

}


/* =========================================
   FILTER DRIVERS
========================================= */

function filterDrivers() {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();


    const filteredDrivers = drivers.filter((driver) => {

        const matchesSearch =
            driver.name
                .toLowerCase()
                .includes(searchTerm)

            ||

            driver.team
                .toLowerCase()
                .includes(searchTerm)

            ||

            driver.nationality
                .toLowerCase()
                .includes(searchTerm);


        const matchesTeam =
            selectedTeam === "all"

            ||

            driver.teamFilter === selectedTeam;


        return matchesSearch && matchesTeam;

    });


    displayDrivers(filteredDrivers);

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    filterDrivers
);


/* =========================================
   TEAM FILTERS
========================================= */

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


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   INITIAL DISPLAY
========================================= */

displayDrivers(drivers);