const startButton = document.getElementById('start-btn')
const showQuestion = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame () {
    startButton.classList.add('hide')
    showQuestion.classList.remove('hide')
    displayNextQuestion()
}

function displayNextQuestion () {

}

function selectAnswer () {

}