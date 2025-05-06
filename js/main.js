const text = "Buliding & Learning";
let index = 0;

function typeEffect() {
    const typewriter = document.getElementById("typewriter");
    if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 105); 
    } else {
        typewriter.style.borderRight = "none"; 
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

