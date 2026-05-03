import { questionsArray } from "./questions.js"
const startBtn = document.querySelector('.start-btn')
const homePage = document.querySelector('.home-page')
const questions = document.querySelector('.questions')
const options = document.querySelectorAll('.options')
const questionText = document.querySelector('.current-question')
const nextBtn = document.querySelector('.next-btn')
const currentQuestionCount = document.querySelector('.current-question-count')
const time = document.querySelector('.time')
const submitBtn = document.querySelector('.submit-btn')
const result = document.querySelector('.result')
const right = document.querySelector('.right')
const wrong = document.querySelector('.wrong')
const finalScore = document.querySelector('.final-score')
const retryBtn = document.querySelector('.retry-btn')
const highestScore = document.querySelector(".high-score")
const music = document.querySelector('#bg-music');
const volumeBtn = document.querySelector('.volume-btn')
const volumeMute = document.querySelector('.volume-mute')
const timeOutText = document.querySelector('.time-out')
const message = document.querySelector('.message')
let optionValue = false
let currentIndex = 0;
let totalTime
let isTimeup = false
let timer
let score = 0
let wrongOption = 0




const highscore = Number(localStorage.getItem("highscore")) || 0;
if (highscore === 0) {
    highestScore.style.display = "none"
}
else {
    highestScore.style.display = "block"
    highestScore.innerText = `Highest Score: ${highscore} / ${questionsArray.length}`;
}

function loadQuestion() {
    const currentQuestion = questionsArray[currentIndex]
    const currentQuestionAnswer = currentQuestion.answer
    questionText.innerText = currentQuestion.question;
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index]
        option.classList.remove("correct-option", "wrong-option")
        option.style.pointerEvents = "auto"
    })
    questions.style.backgroundColor = "rgba(204, 226, 194, 1)";
    nextBtn.style.color = "rgba(1, 171, 8, 1)";
    localStorage.setItem("currentIndex", currentIndex)

    optionValue = false;
    isTimeup = false;
}
function chooseOption() {
    options.forEach((option) => {
        option.addEventListener('click', () => {
            const currentQuestion = questionsArray[currentIndex]
            const currentQuestionAnswer = currentQuestion.answer

            if (optionValue || isTimeup) return;

            optionValue = true
            if (option.innerText === currentQuestionAnswer) {
                option.classList.add("correct-option")
                score++
            }
            else {
                option.classList.add('wrong-option')
                wrongOption++
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

    countDown()
    music.play()
    music.volume = 0.1
})
chooseOption()

nextBtn.addEventListener('click', () => {
    if (!optionValue && !isTimeup) return;
    currentIndex++
    loadQuestion()
    currentQuestionCount.innerText = `${currentIndex + 1} / ${questionsArray.length}`
    timeOutText.style.display = "none";
    countDown()

    if (currentIndex === questionsArray.length - 1) {
        nextBtn.style.display = "none"
        submitBtn.style.display = "block"
    }

})

function countDown() {
    clearInterval(timer);
    totalTime = 30
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
            timeOutText.style.display = "block";
            isTimeup = true
            options.forEach(opt => {
                opt.style.pointerEvents = "none";
            });
        }


    }, 1000);
}


submitBtn.addEventListener('click', () => {
    questions.classList.add("questions-display-submit")
    result.classList.add("result-display")
    localStorage.removeItem("currentIndex");
    let scoreValue = Math.floor((score / questionsArray.length) * 100)
    right.style.width = `${scoreValue}%`
    right.innerText = `${scoreValue}%`
    wrong.innerText = `${100 - scoreValue}%`
    finalScore.innerText = `${score}/${questionsArray.length}`
    const highscore = Number(localStorage.getItem("highscore")) || 0
    if (score > highscore) {
        localStorage.setItem("highscore", score)
    }
    const updatedHighScore = Number(localStorage.getItem("highscore")) || 0;
    highestScore.innerText = `Highest Score: ${updatedHighScore} / ${questionsArray.length}`;

    let messageScore = Math.floor((score / questionsArray.length) * 100)
    if (messageScore === 100) {
        message.innerText = "Perfect score! You're a genius!"
        wrong.style.display = "none"
    }
    else if (messageScore>=80) {
        message.innerText = "Great job! You really know your stuff!"
    }
    else if (messageScore>=60) {
        message.innerText = "Good effort! Keep practicing!"
    }
    else if (messageScore>=40) {
        message.innerText = "Not bad, but you can do better!"
    }
    else {
        message.innerText = "Keep learning! Practice makes perfect!"
    }
    music.pause()
})

retryBtn.addEventListener('click', () => {

    currentIndex = 0;
    score = 0;
    wrongOption = 0;
    optionValue = false;

    localStorage.removeItem("currentIndex");

    result.classList.remove("result-display");
    questions.classList.remove("questions-display-submit");

    questions.classList.add("question-display");

    nextBtn.style.display = "block";
    submitBtn.style.display = "none";

    loadQuestion();
    currentQuestionCount.innerText = `1 / ${questionsArray.length}`;

    countDown();
    const highscore = Number(localStorage.getItem("highscore")) || 0;
    highestScore.innerText = `Highest Score: ${highscore} / ${questionsArray.length}`;
    timeOutText.style.display = "none";
    music.play()
})

volumeBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play()
        volumeBtn.src = "images/volume_icon.png"
    } else {
        music.pause()
        volumeBtn.src = "images/volume_mute_.png"
    }
});


