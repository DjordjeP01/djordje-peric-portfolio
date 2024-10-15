// CUSTOM CURSOR

const cursorDot = document.querySelector("[data-cursor-dot]");

function updateCursor(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 100, fill: "forwards" });
}

window.addEventListener("mousemove", updateCursor);

// Additional logic for cursor on hover
const interactiveElements = document.querySelectorAll('.main-btn, .faq, .view, .service-heading, .pre-footer-btn, .hero-pic, .aboutme-text, .mail, .footer-link-wrap, .service-svg');

interactiveElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursorDot.classList.add("hovered");
    });

    element.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("hovered");
    });
});

// NAVIGATION

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuLinks = document.querySelectorAll('.mainMenu li a');


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        mainMenu.style.top = '-100%';
      }, 300);
    });
  });

openMenu.addEventListener('click' , show);
closeMenu.addEventListener('click', close);


function show() {
     mainMenu.style.top = '0';
 }

function close() {
    setTimeout(() => {
      mainMenu.style.top = '-100%';
    }, 500);
}

// // MODAL

// document.addEventListener('DOMContentLoaded', function() {
            
//     const modal = document.getElementById('myModal');
//     const openModalBtn = document.getElementById('openModalBtn');
//     const closeModalBtn = document.getElementById('closeModalBtn');

    
//     openModalBtn.addEventListener('click', function() {
//         modal.style.display = 'flex';
//     });

    
//     closeModalBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

    
//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });