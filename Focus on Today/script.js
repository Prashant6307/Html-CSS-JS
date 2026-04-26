const completed = document.querySelectorAll(".box")
const allCheckbox = document.querySelectorAll(".checkbox")
const input = document.querySelectorAll(".goal-input")
const warning = document.querySelector(".warning-message")
const progressBar = document.querySelector(".progress-bar")

allCheckbox.forEach((check) => {
    check.addEventListener('click', (e) => {
        const allInputs = [...input].every((input) => {
            return input.value
        })
        if(allInputs){
            check.parentElement.classList.toggle('completed')
            
        }else{
            progressBar.classList.add("show-warning")
        }
    })
})

input.forEach((input) =>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove("show-warning")
    })
})