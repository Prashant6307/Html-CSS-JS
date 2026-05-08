const input = document.querySelector('.input')
const form = document.querySelector('form')
const startBtn = document.querySelector('.start-btn')
const message = document.querySelector('.message')
const guesses = document.querySelector('.guesses')
const submitBtn = document.querySelector('.submit-btn')

let allGuesses = []

function guess(){
let randomValue =  Math.floor(Math.random() * 100 + 1)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = parseInt(input.value)
    if(value===randomValue){
        message.innerText = "You guessed right"
        allGuesses.push(value) 
        guesses.innerText = `Your Guesses: ${allGuesses.join(" ,")}`
        startBtn.disabled = false
        submitBtn.disabled = true
    }
    else if(value<randomValue){
        message.innerText = "Number too low"
        allGuesses.push(value) 
        guesses.innerText = `Your Guesses: ${allGuesses.join(" ,")}`  
    }
    else{
        message.innerText = "Number too high"
        allGuesses.push(value)
        guesses.innerText = `Your Guesses: ${allGuesses.join(" ,")}`
    }
    input.value = ""
})


startBtn.addEventListener('click', () => {
    guesses.innerText = ""
    allGuesses.innerText = ""
    message.innerText = ""
    submitBtn.disabled = false
    startBtn.disabled = true
    randomValue =  Math.floor(Math.random() * 100 + 1)
    allGuesses = []
    
})
}
guess()