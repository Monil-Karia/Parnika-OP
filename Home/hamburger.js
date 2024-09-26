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
    // Apply fade-out class to the current text
    changingPart.classList.add("fade-up-out");

    setTimeout(() => {
        // Update the text content after fade-out
        wordIndex = (wordIndex + 1) % changingWords.length;
        changingPart.textContent = changingWords[wordIndex];

        // Remove fade-out class and apply fade-in class
        changingPart.classList.remove("fade-up-out");
        changingPart.classList.add("fade-up-in");

        // Set a timeout to remove fade-in class after the animation
        setTimeout(() => {
            changingPart.classList.remove("fade-up-in");
        }, 1000); // Match this duration with the fade-in animation duration
    }, 1000);  // Match this duration with the fade-out animation duration
}

// Run the text change every 3 seconds
setInterval(changeText, 3000);