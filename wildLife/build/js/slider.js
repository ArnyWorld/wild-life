let value,sliders=[...document.querySelectorAll(".testimonials__body")],buttonNext=document.querySelector(".testimonials__right"),buttonPrevious=document.querySelector(".testimonials__left");function cargarListeners(){buttonNext.addEventListener("click",()=>{changePosition(1)}),buttonPrevious.addEventListener("click",()=>{changePosition(-1)})}cargarListeners();let changePosition=e=>{let t=document.querySelector(".testimonials__body--show").dataset.id;value=Number(t),value+=e,sliders[Number(t)-1].classList.remove("testimonials__body--show"),value!=sliders.length+1&&0!=value||(value=0==value?sliders.length:1),sliders[value-1].classList.add("testimonials__body--show")};
//# sourceMappingURL=slider.js.map