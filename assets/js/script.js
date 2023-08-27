const startButton = document.getElementById('start-btn')
const showQuestion = document.getElementById('question-container')
const shuffleQuestions, currentQuestion

startButton.addEventListener('click', startGame)

function startGame () {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random - .5)
    currentQuestion = 0
    showQuestion.classList.remove('hide')
    displayNextQuestion()
}

function displayNextQuestion () {
    presentQuestion(shuffleQuestions[currentQuestion])
}

function selectAnswer () {

}





const questions = [
    {
        question: "What is the Capital City of the Republic of Ireland?",
        options: [
            { text: "Barcelona", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Dublin", correct: true },
        ]
    },
    {
        question: "What is the name of the Irish city where Cillian Murphy was born?",
        options: [
            { text: "Galway", correct: false },
            { text: "Waterord", correct: false },
            { text: "Dublin", correct: false },
            { text: "Cork", correct: true },
        ]
    },
    {
        question: "Which Saint is said to have brought Christianity to this country?",
        options:[
            { text: "St. Patrick.", correct: true },
            { text: "St. Nicholas.", correct: false },
            { text: "St. Peter.", correct: false },
            { text: "St. Jospeh.", correct: false },
        ]
    },
    {
        question: "What movie did Colin Farrell and Brendan Gleeson stare in as 2 hitmen?",
        options: [
            { text: "Total Recall", correct: false },
            { text: "The Gentlemen", correct: false },
            { text: "In Bruges", correct: true },
            { text: "The Guard.", correct: false },
        ]
    },
    {
        question: "What musical symbol is on the country's coat of arms?",
        options: [
            { text: "The Bagpipes.", correct: false },
            { text: "The Accordian.", correct: false },
            { text: "The Guitar.", correct: false },
            { text: "The harp.", correct: true },
        ]
    },
]