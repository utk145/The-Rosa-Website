//Select element function
const selecetEle = function(element){
  return document.querySelector(element);  
};

const menuToggler = selecetEle(".menu-toggle") ;
const body = selecetEle("body") ;


menuToggler.addEventListener("click",()=>{
    body.classList.toggle("open");
})





// Scroll

window.sr=ScrollReveal();
// now you can access ScrollReveal() by simply sr 


sr.reveal(".animate-left",{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal(".animate-right",{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});


sr.reveal(".animate-top",{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
});



sr.reveal(".animate-bottom",{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
});


