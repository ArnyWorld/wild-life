let barNav = document.querySelector('.navigation__movil');
let goTop = document.querySelector(".goTop");
let menu = document.querySelector('.navigation__links');

cargarListener();
function cargarListener(){

    //MenuMovil
    barNav.addEventListener("click",showMenu);

    //Scroll
    goTop.addEventListener("click",topFunction);
    
    //topShow
    window.addEventListener('scroll',()=>{
        const scrollPX = window.scrollY;
        //console.log(scrollPX);
        if(scrollPX > 200){
            goTop.style.display="flex";      
        }else{
            goTop.style.display="none";
        }
    });
}

function showMenu(){
    menu.classList.toggle('navigation__links--show');
}

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
