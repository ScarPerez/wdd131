/* =========================================
RF1 - QUIZ
========================================= */

const questions = [

    {
        question: "What does DNF mean?",

        answers: [
            "Driver Needs Fuel",
            "Did Not Finish",
            "Drive Normally Fast",
            "Do Not Follow"
        ],

        correct: 1
    },


    {
        question: "What is pole position?",

        answers: [
            "The last position on the grid",
            "The fastest lap during the race",
            "The first position on the starting grid",
            "The position of the safety car"
        ],

        correct: 2
    },


    {
        question: "What happens during a pit stop?",

        answers: [
            "The driver leaves the circuit",
            "The team can change tires and work on the car",
            "The race officially ends",
            "Drivers change teams"
        ],

        correct: 1
    },


    {
        question: "What is qualifying used for?",

        answers: [
            "Determining the starting order",
            "Choosing the race winner",
            "Testing the safety car",
            "Awarding championship points"
        ],

        correct: 0
    },


    {
        question: "Which session is the main event of a Grand Prix weekend?",

        answers: [
            "Practice",
            "Qualifying",
            "The Race",
            "Media Day"
        ],

        correct: 2
    }

];


/* =========================================
ELEMENTS
========================================= */

const quizForm =
    document.querySelector("#quiz-form");

const startButton =
    document.querySelector("#start-quiz");

const quizSection =
    document.querySelector("#quiz-section");

const quizResult =
    document.querySelector("#quiz-result");

const questionElement =
    document.querySelector("#question");

const answerOptions =
    document.querySelector("#answer-options");

const nextButton =
    document.querySelector("#next-question");

const questionNumber =
    document.querySelector("#question-number");

const scoreElement =
    document.querySelector("#score");

const finalScore =
    document.querySelector("#final-score");

const resultMessage =
    document.querySelector("#result-message");

const restartButton =
    document.querySelector("#restart-quiz");

const currentYear =
    document.querySelector("#current-year");


let currentQuestion = 0;

let score = 0;


/* =========================================
PREVENT FORM SUBMISSION
========================================= */

quizForm.addEventListener("submit", (event) => {

    event.preventDefault();

});


/* =========================================
START QUIZ
========================================= */

startButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizResult.classList.remove("show");

    quizSection.classList.add("active");

    startButton.scrollIntoView({
        behavior: "smooth"
    });

    loadQuestion();

});


/* =========================================
LOAD QUESTION
========================================= */

function loadQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    scoreElement.textContent =
        `Score: ${score}`;


    questionElement.textContent =
        current.question;


    answerOptions.innerHTML = "";


    nextButton.disabled = true;


    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.classList.add("answer-button");

        button.type = "button";


        button.textContent =
            answer;


        button.dataset.answer =
            index;


        button.addEventListener(
            "click",
            selectAnswer
        );


        answerOptions.appendChild(button);

    });

}


/* =========================================
SELECT ANSWER
========================================= */

function selectAnswer(event) {

    const selectedButton =
        event.currentTarget;


    const selectedAnswer =
        Number(selectedButton.dataset.answer);


    const correctAnswer =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach((button) => {

        button.disabled = true;

    });


    if (selectedAnswer === correctAnswer) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("incorrect");

        buttons[correctAnswer].classList.add("correct");

    }


    scoreElement.textContent =
        `Score: ${score}`;


    nextButton.disabled = false;

}


/* =========================================
NEXT QUESTION
========================================= */

nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        finishQuiz();

    }

});


/* =========================================
FINISH QUIZ
========================================= */

function finishQuiz() {

    quizSection.classList.remove("active");


    finalScore.textContent =
        score;


    if (score === 5) {

        resultMessage.textContent =
            "Perfect score. You're ready for the paddock.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Nice work. You're getting the hang of F1.";

    } else {

        resultMessage.textContent =
            "Keep exploring RF1. Your rookie journey is just beginning.";

    }


    localStorage.setItem(
        "rf1QuizScore",
        score
    );


    quizResult.classList.add("show");


    quizResult.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
RESTART
========================================= */

restartButton.addEventListener("click", () => {

    quizResult.classList.remove("show");

    currentQuestion = 0;

    score = 0;

    quizSection.classList.add("active");

    loadQuestion();

});


/* =========================================
CURRENT YEAR
========================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}