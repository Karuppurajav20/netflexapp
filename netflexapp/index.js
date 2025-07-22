document.addEventListener("DOMContentLoaded", function () {
  // --- Accordion logic ---
  const accordions = document.querySelectorAll('.accordion');
  const panels = document.querySelectorAll('.panel');

  accordions.forEach((accordion, i) => {
    accordion.addEventListener('click', () => {
      const panel = panels[i];
      const icon = accordion.querySelector('.icon');
      if (!panel || !icon) return;

      // Close all other panels
      panels.forEach((p, j) => {
        if (j !== i) {
          p.style.maxHeight = null;
          p.classList.remove('open');
          const otherIcon = accordions[j].querySelector('.icon');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      // Toggle current panel
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

  // --- Carousel scroll arrows ---
  const carousel = document.getElementById("carousel");
  document.querySelectorAll(".scroll-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const direction = btn.dataset.direction === "left" ? -1 : 1;
      if (!carousel) return;
      carousel.scrollBy({
        left: direction * 300,
        behavior: "smooth"
      });
    });
  });

  // --- Modal logic ---
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.getAttribute("data-img");
      modalTitle.textContent = `${card.getAttribute("data-title")} • 2025 • U/A 16+ • Action • Dramas`;
      modalDesc.textContent = card.getAttribute("data-desc");
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});
