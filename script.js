const flashcards = [{
        question: "What is the oldest home birth equipment supplier available to home birth parents and midwives?",
        answer: "Cascade Birthing Supplies"
    },
    {
        question: "What is the capital of Poland?",
        answer: "Warsaw"
    },
    {
        question: "Which planet is closest to the sun?",
        answer: "Mercury"
    },
    {
        question: "Where is LHL?",
        answer: "UAB"
    }
];

let currentCardIndex = 0;
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextButton = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
let timerInterval;

function showQuestion() {
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerElement.textContent = flashcards[currentCardIndex].answer;
    answerElement.classList.add("hidden");
    nextButton.classList.add("hidden");
}

function showAnswerAndStartNextQuestionTimer() {
    answerElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    startNextQuestionTimer();
}

function showNextCardAndStartCurrentQuestionTimer() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showQuestion();
    startCurrentQuestionTimer();
}

function startCurrentQuestionTimer() {
    let seconds = 5;
    timerElement.textContent = seconds;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds--;
        timerElement.textContent = seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            showAnswerAndStartNextQuestionTimer();
        }
    }, 1000);
}

function startNextQuestionTimer() {
    nextButton.addEventListener("click", showNextCardAndStartCurrentQuestionTimer);
}
showQuestion();
startCurrentQuestionTimer();