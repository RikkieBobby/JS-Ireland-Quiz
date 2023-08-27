const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const showQuestion = document.getElementById('question-container')

const questionElement = document.getElementById('question-display')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    presentQuestion()
})

function startGame () {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    showQuestion.classList.remove('hide')
    displayNextQuestion()
}

function displayNextQuestion () {
    resetQuestions()
    presentQuestion(shuffleQuestions[currentQuestionIndex])
}

function presentQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}

function resetQuestions() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button.dataset.correct)
    })
    if (shuffleQuestions.lenght > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





const questions = [
    {
        question: "What is the Capital City of the Republic of Ireland?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Dublin", correct: true },
        ]
    },
    {
        question: "What is the name of the Irish city where Cillian Murphy was born?",
        answers: [
            { text: "Galway", correct: false },
            { text: "Waterord", correct: false },
            { text: "Dublin", correct: false },
            { text: "Cork", correct: true },
        ]
    },
    {
        question: "Which Saint is said to have brought Christianity to this country?",
        answers:[
            { text: "St. Patrick.", correct: true },
            { text: "St. Nicholas.", correct: false },
            { text: "St. Peter.", correct: false },
            { text: "St. Jospeh.", correct: false },
        ]
    },
    {
        question: "What movie did Colin Farrell and Brendan Gleeson stare in as 2 hitmen?",
        answers: [
            { text: "Total Recall", correct: false },
            { text: "The Gentlemen", correct: false },
            { text: "In Bruges", correct: true },
            { text: "The Guard.", correct: false },
        ]
    },
    {
        question: "What musical symbol is on the country's coat of arms?",
        answers: [
            { text: "The Bagpipes.", correct: false },
            { text: "The Accordian.", correct: false },
            { text: "The Guitar.", correct: false },
            { text: "The harp.", correct: true },
        ]
    },
]