/* =========================================
   RF1 - TEAMS
   ========================================= */


const teams = [

    {
        name: "McLaren",
        shortName: "MCL",
        base: "Woking, United Kingdom",
        team: "mclaren"
    },

    {
        name: "Ferrari",
        shortName: "FER",
        base: "Maranello, Italy",
        team: "ferrari"
    },

    {
        name: "Mercedes",
        shortName: "MER",
        base: "Brackley, United Kingdom",
        team: "mercedes"
    },

    {
        name: "Red Bull Racing",
        shortName: "RBR",
        base: "Milton Keynes, United Kingdom",
        team: "red-bull"
    },

    {
        name: "Aston Martin",
        shortName: "AMR",
        base: "Silverstone, United Kingdom",
        team: "aston-martin"
    }

];


const teamsGrid =
    document.querySelector("#teams-grid");


const filterButtons =
    document.querySelectorAll(".team-filter");


const noResults =
    document.querySelector("#no-team-results");


let selectedTeam = "all";


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

                <p class="team-base">
                    ${team.base}
                </p>

            </div>

        `;


        teamsGrid.appendChild(card);

    });

}


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


/* TEAM FILTERS */

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


/* INITIAL DISPLAY */

displayTeams(teams);


/* CURRENT YEAR */

const currentYear =
    document.querySelector("#current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}