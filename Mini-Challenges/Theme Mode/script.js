const darkScreen = document.querySelector('.screen-dark-mode')
const body = document.querySelector('.body')
const textContainer = document.querySelector('.container-text')
const box = document.querySelector('.box')
const currentStatus = localStorage.getItem('darkScreenStatus')
const boxCurrentStatus = localStorage.getItem('boxStatus')

if (currentStatus === "true") {
    darkScreen.checked = true
    body.classList.add("body-theme-dark")
    
}

if (boxCurrentStatus === "true") {
    box.checked = true
    textContainer.classList.add("container-theme")
    
}

darkScreen.addEventListener('change', () => {

    const darkScreenStatus = darkScreen.checked
    localStorage.setItem('darkScreenStatus', darkScreenStatus)
    

    if (darkScreenStatus) {
        body.classList.add("body-theme-dark")
        
    }
    else {
        body.classList.remove("body-theme-dark")
        
    }
})

box.addEventListener('change', () => {

    const boxStatus = box.checked
    localStorage.setItem('boxStatus', boxStatus)
    

    if (boxStatus) {
        textContainer.classList.add("container-theme")
    }
    else {
        textContainer.classList.remove("container-theme")
    }
})