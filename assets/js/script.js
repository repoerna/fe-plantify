console.log("script loaded")
const navToggler = document.querySelector('.navbar .nav-wrapper .menu-wrapper .menu-btn');
const navMenu = document.querySelector('.navbar .nav-wrapper .menu-wrapper ul');
const navLinks = document.querySelectorAll('.menu .menu-item');
const mobileNav = document.querySelector('.nav-mobile');

console.log(navToggler)
console.log(navMenu)
console.log(navLinks)
console.log(mobileNav)



// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    navToggler.addEventListener('click', togglerClick);
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('bx-menu');
    navToggler.classList.toggle('bx-x');

    if (navToggler.classList.contains('bx-x')) {
        console.log("exsist")
        mobileNav.style.display = "block"
    } else {
        console.log("not exsist")
        mobileNav.style.display = "none"
    }
}
  