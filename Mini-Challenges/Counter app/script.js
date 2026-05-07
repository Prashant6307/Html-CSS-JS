const answer = document.querySelector('.answer')
const minus = document.querySelector('.minus-btn')
const add = document.querySelector('.add-btn')
const input = document.querySelector('#input').value
const reset = document.querySelector('button')

let currentValue = 1



add.addEventListener('click',() => {
    answer.innerText = currentValue++
})

minus.addEventListener('click',() => {
    answer.innerText = currentValue--
})

reset.addEventListener('click',() =>{
    answer.innerText = "0"
})