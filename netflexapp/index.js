document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('.accordion');
  const panels = document.querySelectorAll('.panel');

  accordions.forEach((accordion, i) => {
    accordion.addEventListener('click', () => {
      const panel = panels[i];
      const icon = accordion.querySelector('.icon');
      if (!panel || !icon) return;

      panels.forEach((p, index) => {
        if (index !== i) {
          p.style.maxHeight = null;
          p.classList.remove('open');
          const otherIcon = accordions[index].querySelector('.icon');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

   
      if (panel.classList.contains('open')) {
        panel.style.maxHeight = null;
        panel.classList.remove('open');
        icon.textContent = '+';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add('open');
        icon.textContent = '×';
      }
    });
  });
});
function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;
  const scrollAmount = 400; 
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");
const carousel = document.getElementById("carousel");


document.querySelectorAll(".movie-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-img");
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");

    modalImg.src = imgSrc;
    modalTitle.textContent = title + " • 2025 • U/A 16+ • Action • Dramas";
    modalDesc.textContent = desc;

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

// Scroll arrows
function scrollCarousel(direction) {
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

