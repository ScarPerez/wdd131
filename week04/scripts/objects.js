let aCourse = {

    code: "WDD131",

    title: "Dynamic Web Fundamentals",

    credits: 2,

    sections: [

        {
            section: "001",
            enrolled: 30,
            instructor: "Brother Jones"
        },

        {
            section: "002",
            enrolled: 28,
            instructor: "Sister Smith"
        }

    ]

};

function setCourseInformation(course){

    document.getElementById("courseName").textContent =
        `${course.code} - ${course.title}`;

}

function renderSections(course){

    const table = document.getElementById("sections");

    course.sections.forEach(section => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        `;

        table.appendChild(row);

    });

}

setCourseInformation(aCourse);
renderSections(aCourse);