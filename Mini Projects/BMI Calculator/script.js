const heightInCm = document.querySelector('#height')
const weight = document.querySelector('#weight')
const form = document.querySelector('form')
const result = document.querySelector('.result')
function calculateBMI(){
    let heightValue = heightInCm.value / 100
    let weightValue = weight.value
    let bmi = weightValue / (heightValue * heightValue)
    result.innerText = bmi.toFixed(2)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})