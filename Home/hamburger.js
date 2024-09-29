const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const changingWords = [
  "design and craft experiences!", 
  "bake brownies and sweets!", 
  "groove & dance to my beats!", 
  "watch classic 2000s RomComs!", 
  "jam to upbeat country music!"
];

const changingPart = document.getElementById("changing-part");
let wordIndex = 0;

function changeText() {
    changingPart.classList.add("fade-up-out");
    setTimeout(() => {
        wordIndex = (wordIndex + 1) % changingWords.length;
        changingPart.textContent = changingWords[wordIndex];
        changingPart.classList.remove("fade-up-out");
        changingPart.classList.add("fade-up-in");
        setTimeout(() => {
            changingPart.classList.remove("fade-up-in");
        }, 1000);
    }, 1000);  
}
// Run the text change every 3 seconds
setInterval(changeText, 3000);