/* =========================================
   RF1 - 2026 F1 DRIVERS
========================================= */

const drivers = [
    {
        name: "Lando Norris",
        number: 1,
        team: "McLaren",
        nationality: "United Kingdom",
        teamFilter: "mclaren"
    },
    {
        name: "Oscar Piastri",
        number: 81,
        team: "McLaren",
        nationality: "Australia",
        teamFilter: "mclaren"
    },
    {
        name: "George Russell",
        number: 63,
        team: "Mercedes",
        nationality: "United Kingdom",
        teamFilter: "mercedes"
    },
    {
        name: "Kimi Antonelli",
        number: 12,
        team: "Mercedes",
        nationality: "Italy",
        teamFilter: "mercedes"
    },
    {
        name: "Charles Leclerc",
        number: 16,
        team: "Ferrari",
        nationality: "Monaco",
        teamFilter: "ferrari"
    },
    {
        name: "Lewis Hamilton",
        number: 44,
        team: "Ferrari",
        nationality: "United Kingdom",
        teamFilter: "ferrari"
    },
    {
        name: "Max Verstappen",
        number: 3,
        team: "Red Bull Racing",
        nationality: "Netherlands",
        teamFilter: "red-bull"
    },
    {
        name: "Isack Hadjar",
        number: 6,
        team: "Red Bull Racing",
        nationality: "France",
        teamFilter: "red-bull"
    },
    {
        name: "Liam Lawson",
        number: 30,
        team: "Racing Bulls",
        nationality: "New Zealand",
        teamFilter: "racing-bulls"
    },
    {
        name: "Arvid Lindblad",
        number: 41,
        team: "Racing Bulls",
        nationality: "United Kingdom",
        teamFilter: "racing-bulls"
    },
    {
        name: "Pierre Gasly",
        number: 10,
        team: "Alpine",
        nationality: "France",
        teamFilter: "alpine"
    },
    {
        name: "Franco Colapinto",
        number: 43,
        team: "Alpine",
        nationality: "Argentina",
        teamFilter: "alpine"
    },
    {
        name: "Esteban Ocon",
        number: 31,
        team: "Haas",
        nationality: "France",
        teamFilter: "haas"
    },
    {
        name: "Oliver Bearman",
        number: 87,
        team: "Haas",
        nationality: "United Kingdom",
        teamFilter: "haas"
    },
    {
        name: "Nico Hulkenberg",
        number: 27,
        team: "Audi",
        nationality: "Germany",
        teamFilter: "audi"
    },
    {
        name: "Gabriel Bortoleto",
        number: 5,
        team: "Audi",
        nationality: "Brazil",
        teamFilter: "audi"
    },
    {
        name: "Carlos Sainz",
        number: 55,
        team: "Williams",
        nationality: "Spain",
        teamFilter: "williams"
    },
    {
        name: "Alexander Albon",
        number: 23,
        team: "Williams",
        nationality: "Thailand",
        teamFilter: "williams"
    },
    {
        name: "Fernando Alonso",
        number: 14,
        team: "Aston Martin",
        nationality: "Spain",
        teamFilter: "aston-martin"
    },
    {
        name: "Lance Stroll",
        number: 18,
        team: "Aston Martin",
        nationality: "Canada",
        teamFilter: "aston-martin"
    },
    {
        name: "Sergio Perez",
        number: 11,
        team: "Cadillac",
        nationality: "Mexico",
        teamFilter: "cadillac"
    },
    {
        name: "Valtteri Bottas",
        number: 77,
        team: "Cadillac",
        nationality: "Finland",
        teamFilter: "cadillac"
    }
];

/* =========================================
   ELEMENTS
========================================= */

const driversGrid = document.querySelector("#drivers-grid");
const searchInput = document.querySelector("#driver-search");
const filterButtons = document.querySelectorAll(".driver-filter");
const noResults = document.querySelector("#no-results");

let selectedTeam = "all";

/* =========================================
   DISPLAY DRIVERS
========================================= */

function displayDrivers(driverList) {
    driversGrid.innerHTML = "";

    if (driverList.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    driverList.forEach((driver) => {
        const card = document.createElement("article");

        card.classList.add("driver-card");

        card.innerHTML = `
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
            driver.name.toLowerCase().includes(searchTerm) ||
            driver.team.toLowerCase().includes(searchTerm) ||
            driver.nationality.toLowerCase().includes(searchTerm);

        const matchesTeam =
            selectedTeam === "all" ||
            driver.teamFilter === selectedTeam;

        return matchesSearch && matchesTeam;
    });

    displayDrivers(filteredDrivers);
}

/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener("input", filterDrivers);

/* =========================================
   TEAM FILTERS
========================================= */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedTeam = button.dataset.team;

        filterDrivers();
    });
});

/* =========================================
   INITIAL DISPLAY
========================================= */

displayDrivers(drivers);

/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
```
