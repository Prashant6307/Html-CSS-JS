import { questionsArray } from "./questions.js"
const startBtn = document.querySelector('.start-btn')
const homePage = document.querySelector('.home-page')
const questions = document.querySelector('.questions')
const options = document.querySelectorAll('.options')
const questionText = document.querySelector('.current-question')
const nextBtn = document.querySelector('.next-btn')
const currentQuestionCount = document.querySelector('.current-question-count')
const time = document.querySelector('.time')
let currentIndex = 0;
let totalTime = 30
let timer

function loadQuestion() {
    const currentQuestion = questionsArray[currentIndex]
    const currentQuestionAnswer = currentQuestion.answer
    questionText.innerText = currentQuestion.question;
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index]
        option.classList.remove("correct-option", "wrong-option")
    })
    questions.style.backgroundColor = "rgba(204, 226, 194, 1)";
    nextBtn.style.color = "rgba(1, 171, 8, 1)";
    localStorage.setItem("currentIndex", currentIndex)

}
function chooseOption() {


    options.forEach((option) => {
        option.addEventListener('click', () => {
            const currentQuestion = questionsArray[currentIndex]
            const currentQuestionAnswer = currentQuestion.answer
            if (document.querySelector('.correct-option') || document.querySelector('.wrong-option')) return;

            if (option.innerText === currentQuestionAnswer) {
                option.classList.add("correct-option")
            }
            else {
                option.classList.add('wrong-option')
            }

        })
    })
}
function loadCurrentQuestion() {
    currentIndex = Number(localStorage.getItem("currentIndex")) || 0;
    loadQuestion()
}
startBtn.addEventListener('click', () => {
    homePage.classList.add("home-display")
    questions.classList.add("question-display")
    loadCurrentQuestion()
    currentQuestionCount.innerText = `${currentIndex + 1} / ${questionsArray.length}`
    loadQuestion()
    chooseOption()
    countDown()

})

nextBtn.addEventListener('click', () => {
    currentIndex++
    loadQuestion()
    currentQuestionCount.innerText = `${currentIndex + 1} / ${questionsArray.length}`
    countDown()
})

function countDown() {
    clearInterval(timer);
    totalTime = 30;
    timer = setInterval(() => {

        totalTime--
        time.innerText = `00:${totalTime < 10 ? '0' + totalTime : totalTime}`
        if (totalTime <= 15) {
            questions.style.backgroundColor = "rgba(228, 229, 199, 1)"
            nextBtn.style.color = "rgba(197, 136, 0, 1)"
        }
        if (totalTime <= 5) {
            questions.style.backgroundColor = "rgba(219, 173, 173, 1)"
            nextBtn.style.color = "rgba(197, 0, 0, 1)"
        }
        if (totalTime === 0) {
            clearInterval(timer)

        }
    }, 1000);
}
