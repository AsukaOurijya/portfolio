const text = [
    "Computer Science Student",
    "Web Developer",
    "Future Software Engineer",
    "Front-End Developer",
    "Linux Enjoyer",
    "Tech Solution Maker"
]

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseTime = 1200;
const textElement = document.getElementById("typewriter-text");

function typeEffect() {
    const currentText = text[index]

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % text.length;
            setTimeout(typeEffect, typingSpeed)
            return;
        }
        setTimeout(typeEffect,erasingSpeed);
    
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
        
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
            return;
        }
        setTimeout(typeEffect, typingSpeed);

    }
}

document.addEventListener("DOMContentLoaded", typeEffect)
