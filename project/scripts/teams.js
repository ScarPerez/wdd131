/* =========================================
   RF1 - 2026 F1 TEAMS
========================================= */

const teams = [

    {
        name: "McLaren",
        teamFilter: "mclaren",
        country: "United Kingdom",
        drivers: "Lando Norris & Oscar Piastri",
        logo: "images/teams/mclaren.webp"
    },

    {
        name: "Ferrari",
        teamFilter: "ferrari",
        country: "Italy",
        drivers: "Charles Leclerc & Lewis Hamilton",
        logo: "images/teams/ferrari.webp"
    },

    {
        name: "Mercedes",
        teamFilter: "mercedes",
        country: "Germany",
        drivers: "George Russell & Kimi Antonelli",
        logo: "images/teams/mercedes.webp"
    },

    {
        name: "Red Bull Racing",
        teamFilter: "red-bull",
        country: "Austria",
        drivers: "Max Verstappen & Isack Hadjar",
        logo: "images/teams/red-bull.webp"
    },

    {
        name: "Racing Bulls",
        teamFilter: "racing-bulls",
        country: "Italy",
        drivers: "Liam Lawson & Arvid Lindblad",
        logo: "images/teams/racing-bulls.webp"
    },

    {
        name: "Alpine",
        teamFilter: "alpine",
        country: "France",
        drivers: "Pierre Gasly & Franco Colapinto",
        logo: "images/teams/alpine.webp"
    },

    {
        name: "Haas",
        teamFilter: "haas",
        country: "United States",
        drivers: "Esteban Ocon & Oliver Bearman",
        logo: "images/teams/haas.webp"
    },

    {
        name: "Audi",
        teamFilter: "audi",
        country: "Germany",
        drivers: "Nico Hulkenberg & Gabriel Bortoleto",
        logo: "images/teams/audi.webp"
    },

    {
        name: "Williams",
        teamFilter: "williams",
        country: "United Kingdom",
        drivers: "Carlos Sainz & Alexander Albon",
        logo: "images/teams/williams.webp"
    },

    {
        name: "Aston Martin",
        teamFilter: "aston-martin",
        country: "United Kingdom",
        drivers: "Fernando Alonso & Lance Stroll",
        logo: "images/teams/aston-martin.webp"
    },

    {
        name: "Cadillac",
        teamFilter: "cadillac",
        country: "United States",
        drivers: "Sergio Perez & Valtteri Bottas",
        logo: "images/teams/cadillac.webp"
    }

];


/* =========================================
   ELEMENTS
========================================= */

const teamsGrid =
    document.querySelector("#teams-grid");

const filterButtons =
    document.querySelectorAll(".team-filter");

const noResults =
    document.querySelector("#no-results");

const currentYear =
    document.querySelector("#current-year");


let selectedTeam = "all";


/* =========================================
   DISPLAY TEAMS
========================================= */

function displayTeams(teamList) {

    teamsGrid.innerHTML = "";


    if (teamList.length === 0) {

        noResults.hidden = false;

        return;
    }


    noResults.hidden = true;


    teamList.forEach((team) => {

        const card =
            document.createElement("article");


        card.classList.add("team-card");


        card.innerHTML = `

            <div class="team-logo-container">

                <img
                    class="team-logo"
                    src="${team.logo}"
                    alt="${team.name} logo"
                    loading="lazy">

            </div>


            <div class="team-card-content">

                <p class="team-country">
                    ${team.country}
                </p>


                <h3>
                    ${team.name}
                </h3>


                <p class="team-drivers">
                    ${team.drivers}
                </p>

            </div>

        `;


        teamsGrid.appendChild(card);

    });

}


/* =========================================
   FILTER TEAMS
========================================= */

function filterTeams() {

    const filteredTeams =
        teams.filter((team) => {

            return selectedTeam === "all"
                ||
                team.teamFilter === selectedTeam;

        });


    displayTeams(filteredTeams);

}


/* =========================================
   TEAM FILTER BUTTONS
========================================= */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {


        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        selectedTeam =
            button.dataset.team;


        filterTeams();

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

displayTeams(teams);