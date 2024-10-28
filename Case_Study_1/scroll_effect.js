document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const sidebarLinks = document.querySelectorAll("#sidebar-list a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 175) {
        current = section.getAttribute("id");
      }
    });

    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

//Show more button functionality
const showMoreButton = document.querySelector(".show-more-button");
const cards = document.querySelectorAll(".cards-container .card");
const hideButton = document.querySelector(".hide-button");
let visibleCards = 6;

showMoreButton.addEventListener("click", () => {
  for (let i = visibleCards; i < visibleCards + 5 && i < cards.length; i++) {
    cards[i].style.display = "block";
  }
  visibleCards += 5;

  // Hide button if all cards are visible
  if (visibleCards >= cards.length) {
    console.log(visibleCards);
    showMoreButton.style.display = "none";
    hideButton.style.display = "flex";
  }
});

hideButton.addEventListener("click", () => {
  for (let i = 6; i < cards.length; i++) {
    cards[i].style.display = "none"; // Hide all cards except the first 6
  }
  visibleCards = 6;

  // Show "Show More" button and hide "Hide" button
  showMoreButton.style.display = "flex";
  hideButton.style.display = "none";
});
