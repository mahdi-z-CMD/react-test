// navbar menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const navLink = document.querySelectorAll(".nav-link");

function ac(params) {
    try {
        hamburger.addEventListener("click", mobileMenu);
    } catch (error) {
        
    }
}
function mobileMenu() {
    try {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    } catch (error) {
        
    }

}
try {
    navLink.forEach(n => n.addEventListener("click", closeMenu));
} catch (error) {
    
}


function closeMenu() {
    try {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } catch (error) {
        
    }

}
// navbar end