const answer = document.querySelector('.answer')
const minus = document.querySelector('.minus-btn')
const add = document.querySelector('.add-btn')
const input = document.querySelector('#input')
const reset = document.querySelector('button')
let currentValue = 0


add.addEventListener('click',() => {
    const value = parseInt(input.value)
    if(value===0){
        answer.innerText = currentValue++
        console.log(value);
        
    }
    else{
        currentValue = currentValue + value
        answer.innerText = currentValue
    }
})

minus.addEventListener('click',() => {
    const value = parseInt(input.value)
    if(value===0){
        answer.innerText = currentValue--
        console.log(value);
        
    }
    else{
        currentValue = currentValue - value
        answer.innerText = currentValue
    }
})

reset.addEventListener('click',() =>{
    answer.innerText = "0"
    currentValue = 0
})