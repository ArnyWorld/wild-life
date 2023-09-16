let sliders = [...document.querySelectorAll(".testimonials__body")];
let buttonNext = document.querySelector('.testimonials__right');
let buttonPrevious = document.querySelector('.testimonials__left');
let value;

cargarListeners();
function cargarListeners(){
    buttonNext.addEventListener("click",()=>{
        changePosition(1);
    })
    buttonPrevious.addEventListener("click",()=>{
        changePosition(-1);
    })
}

let changePosition= (index)=>{
    let currentTestimony = document.querySelector('.testimonials__body--show').dataset.id;
    value = Number(currentTestimony);
    value+=index;
    sliders[Number(currentTestimony)-1].classList.remove("testimonials__body--show");
    if(value == sliders.length + 1 || value == 0){
        value = value == 0 ? sliders.length : 1;
    }
    sliders[value-1].classList.add("testimonials__body--show");
}   

