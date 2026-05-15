const boxes = document.querySelectorAll('.boxes')
const body = document.querySelector('body')


boxes.forEach((e) =>{
    e.addEventListener('click', ()=>{
        if(e.classList[1] === "grey"){
            body.classList.toggle("grey")
        }
        if(e.classList[1] === "white"){
            body.classList.toggle("white")
        }
        if(e.classList[1] === "yellow"){
            body.classList.toggle("yellow")
        }
        if(e.classList[1] === "blue"){
            body.classList.toggle("blue")
        }
    })
    
});