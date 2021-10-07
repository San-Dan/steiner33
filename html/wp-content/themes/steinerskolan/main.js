///// HAMBURHGER MENU 
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".navbar");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  