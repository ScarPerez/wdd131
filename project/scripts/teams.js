/* =========================================
   RF1 - 2026 F1 TEAMS
   ========================================= */

const teams = [

    {
        name: "McLaren",
        shortName: "MCL",
        base: "Woking, United Kingdom",
        team: "mclaren",
        drivers: [
            "Lando Norris",
            "Oscar Piastri"
        ]
    },

    {
        name: "Ferrari",
        shortName: "FER",
        base: "Maranello, Italy",
        team: "ferrari",
        drivers: [
            "Charles Leclerc",
            "Lewis Hamilton"
        ]
    },

    {
        name: "Mercedes",
        shortName: "MER",
        base: "Brackley, United Kingdom",
        team: "mercedes",
        drivers: [
            "George Russell",
            "Kimi Antonelli"
        ]
    },

    {
        name: "Red Bull Racing",
        shortName: "RBR",
        base: "Milton Keynes, United Kingdom",
        team: "red-bull",
        drivers: [
            "Max Verstappen",
            "Isack Hadjar"
        ]
    },

    {
        name: "Racing Bulls",
        shortName: "VCARB",
        base: "Faenza, Italy",
        team: "racing-bulls",
        drivers: [
            "Liam Lawson",
            "Arvid Lindblad"
        ]
    },

    {
        name: "Alpine",
        shortName: "ALP",
        base: "Enstone, United Kingdom",
        team: "alpine",
        drivers: [
            "Pierre Gasly",
            "Franco Colapinto"
        ]
    },

    {
        name: "Haas",
        shortName: "HAA",
        base: "Kannapolis, United States",
        team: "haas",
        drivers: [
            "Esteban Ocon",
            "Oliver Bearman"
        ]
    },

    {
        name: "Audi",
        shortName: "AUD",
        base: "Hinwil, Switzerland",
        team: "audi",
        drivers: [
            "Nico Hulkenberg",
            "Gabriel Bortoleto"
        ]
    },

    {
        name: "Williams",
        shortName: "WIL",
        base: "Grove, United Kingdom",
        team: "williams",
        drivers: [
            "Carlos Sainz",
            "Alexander Albon"
        ]
    },

    {
        name: "Aston Martin",
        shortName: "AMR",
        base: "Silverstone, United Kingdom",
        team: "aston-martin",
        drivers: [
            "Fernando Alonso",
            "Lance Stroll"
        ]
    },

    {
        name: "Cadillac",
        shortName: "CAD",
        base: "Silverstone, United Kingdom",
        team: "cadillac",
        drivers: [
            "Sergio Perez",
            "Valtteri Bottas"
        ]
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
    document.querySelector("#no-team-results");


let selectedTeam = "all";


/* =========================================
   DISPLAY TEAMS
   ========================================= */

function displayTeams(teamList) {

    teamsGrid.innerHTML = "";


    if (teamList.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    teamList.forEach((team) => {

        const card =
            document.createElement("article");

        card.classList.add("team-card");


        card.innerHTML = `

            <div class="team-abbreviation">
                ${team.shortName}
            </div>

            <div class="team-card-content">

                <p class="team-label">
                    CONSTRUCTOR
                </p>

                <h3>
                    ${team.name}
                </h3>

                <div class="team-drivers">

                    <p>
                        ${team.drivers[0]}
                    </p>

                    <p>
                        ${team.drivers[1]}
                    </p>

                </div>

                <p class="team-base">
                    ${team.base}
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

    if (selectedTeam === "all") {

        displayTeams(teams);

        return;

    }


    const filteredTeams =
        teams.filter((team) => {

            return team.team === selectedTeam;

        });


    displayTeams(filteredTeams);

}


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


        filterTeams();

    });

});


/* =========================================
   INITIAL DISPLAY
   ========================================= */

displayTeams(teams);


/* =========================================
   CURRENT YEAR
   ========================================= */

const currentYear =
    document.querySelector("#current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}