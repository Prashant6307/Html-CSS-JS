import { questionsArray } from "./questions.js"
const startBtn = document.querySelector('.start-btn')
const homePage = document.querySelector('.home-page')
const questions = document.querySelector('.questions') 
const options = document.querySelectorAll('.options')
const questionText = document.querySelector('.current-question')
const nextBtn = document.querySelector('.next-btn')

let currentIndex = 0;


function loadQuestion(){

    const currentQuestion = questionsArray[currentIndex]
    questionText.innerText = currentQuestion.question;
    options.forEach((option, index)=>{
        option.innerText = currentQuestion.options[index]
        
    
})}


startBtn.addEventListener('click', () => {
    homePage.classList.add("home-display")
    questions.classList.add("question-display")
    loadQuestion()
    
})

nextBtn.addEventListener('click',() => {
    loadQuestion()
    currentIndex++
})
