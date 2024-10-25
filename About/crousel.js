const carousel = document.querySelector('.carousel');
let clones, scrollWidth;

const initCarousel = () => {
    clones = [...carousel.children].map(img => img.cloneNode(true));
    clones.forEach(clone => carousel.appendChild(clone));
    scrollWidth = carousel.scrollWidth / 2;
};

let scrollLeft = 0;

const continuousScroll = () => {
    scrollLeft += 1;
    if (scrollLeft >= scrollWidth) {
        scrollLeft = 0;
    }
    carousel.style.transform = `translateX(${-scrollLeft}px)`;
    requestAnimationFrame(continuousScroll);
};

window.addEventListener('load', () => {
    initCarousel();
    continuousScroll();
});