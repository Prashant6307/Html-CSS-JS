const completed = document.querySelectorAll(".box")
const allCheckbox = document.querySelectorAll(".checkbox")
const input = document.querySelectorAll(".goal-input")
const warning = document.querySelector(".warning-message")
const progressBar = document.querySelector(".progress-bar")
const progressValue = document.querySelector(".progress-value")


const obj = JSON.parse(localStorage.getItem("obj")) || {
    first: {
        name: "",
        completed: false
    },
    second: {
        name: "",
        completed: false
    },
    third: {
        name: "",
        completed: false
    }
}
let completedGoalsCount = Object.values(obj).filter(goal => goal.completed).length
progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`


allCheckbox.forEach((check) => {
    check.addEventListener('click', (e) => {
        const allInputs = [...input].every((input) => {
            return input.value
        })
        if (allInputs) {
            check.parentElement.classList.toggle('completed')
            const inputId = check.nextElementSibling.id
            obj[inputId].completed = !obj[inputId].completed
            completedGoalsCount = Object.values(obj).filter(goal => goal.completed).length
            progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
            localStorage.setItem("obj", JSON.stringify(obj))
        } else {
            progressBar.classList.add("show-warning")
        }
    })
})
input.forEach((input) => {
    input.value = obj[input.id].name

    if (obj[input.id].completed) {
        input.parentElement.classList.add("completed")
    }
    input.addEventListener('focus', () => {
        progressBar.classList.remove("show-warning")
    })
    input.addEventListener("input", (e) => {
        if (obj[input.id].completed) {
            input.value = obj[input.id].name
            return
        }
        obj[input.id].name = input.value
        localStorage.setItem("obj", JSON.stringify(obj))
    })
})
