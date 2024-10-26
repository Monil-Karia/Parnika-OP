const crousel = document.querySelectorAll(".infinite-crousel");

crousel.forEach(crousel => {
  const crouselInner = crousel.querySelector(".infinite-crousel > div");

  const crouselCount = Array.from(crouselInner.children);

  crouselCount.forEach(item => {
    const duplicateItem = item.cloneNode(true);

    crouselInner.appendChild(duplicateItem);

    crouselInner.style.animation = "move 30s linear infinite";

  });
});