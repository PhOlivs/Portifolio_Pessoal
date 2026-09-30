document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const cards = Array.from(carousel.querySelectorAll("[data-project-card]"));
  const previousButton = carousel.parentElement.querySelector("[data-carousel-previous]");
  const nextButton = carousel.parentElement.querySelector("[data-carousel-next]");
  const toggleButton = carousel.parentElement.querySelector("[data-carousel-toggle]");
  const status = carousel.querySelector("[data-carousel-status]");

  if (!track || cards.length === 0 || !previousButton || !nextButton || !toggleButton || !status) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const interval = 4500;
  let autoplayTimer;
  let scrollSettleTimer;
  let pointerInside = false;
  let isPlaying = !reducedMotion.matches && cards.length > 1;
  let originalStart;
  const stepWithGap = () => cards[0].getBoundingClientRect().width
    + (Number.parseFloat(window.getComputedStyle(track).columnGap) || 0);

  if (cards.length > 1) {
    const before = document.createDocumentFragment();
    const after = document.createDocumentFragment();

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.inert = true;
      before.append(clone);
    });

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.inert = true;
      after.append(clone);
    });

    track.prepend(before);
    track.append(after);
  }

  function getCardPosition(card) {
    const trackBounds = track.getBoundingClientRect();
    const cardBounds = card.getBoundingClientRect();
    const padding = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;

    return track.scrollLeft + cardBounds.left - trackBounds.left - padding;
  }

  originalStart = getCardPosition(cards[0]);

  function currentIndex() {
    const relativeIndex = Math.round((track.scrollLeft - originalStart) / stepWithGap());
    return ((relativeIndex % cards.length) + cards.length) % cards.length;
  }

  function updateCarousel() {
    status.textContent = `Projeto ${currentIndex() + 1} de ${cards.length}`;
  }

  function scrollByCard(direction) {
    track.scrollBy({
      left: direction * stepWithGap(),
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  }

  function normalizeLoopPosition() {
    const relativeIndex = Math.round((track.scrollLeft - originalStart) / stepWithGap());

    if (relativeIndex >= cards.length) {
      repositionBy(-cards.length);
    } else if (relativeIndex <= -cards.length) {
      repositionBy(cards.length);
    }
  }

  function repositionBy(cardCount) {
    track.classList.add("is-repositioning");
    track.scrollLeft += cardCount * stepWithGap();
    window.requestAnimationFrame(() => track.classList.remove("is-repositioning"));
  }

  function scheduleAutoplay() {
    window.clearInterval(autoplayTimer);

    if (isPlaying && !pointerInside && !document.hidden && cards.length > 1) {
      autoplayTimer = window.setInterval(() => scrollByCard(1), interval);
    }
  }

  function updateToggleButton() {
    const label = `${isPlaying ? "Pausar" : "Iniciar"} reprodução automática`;

    toggleButton.dataset.state = isPlaying ? "playing" : "paused";
    toggleButton.setAttribute("aria-label", label);
    toggleButton.setAttribute("aria-pressed", String(isPlaying));
    toggleButton.title = label;
  }

  if (cards.length > 1) {
    track.scrollLeft = originalStart;
    previousButton.addEventListener("click", () => scrollByCard(-1));
    nextButton.addEventListener("click", () => scrollByCard(1));
    track.addEventListener("scroll", () => {
      updateCarousel();
      window.clearTimeout(scrollSettleTimer);
      scrollSettleTimer = window.setTimeout(normalizeLoopPosition, 120);
    }, { passive: true });

    carousel.addEventListener("pointerenter", () => {
      pointerInside = true;
      scheduleAutoplay();
    });
    carousel.addEventListener("pointerleave", () => {
      pointerInside = false;
      scheduleAutoplay();
    });
    toggleButton.addEventListener("click", () => {
      isPlaying = !isPlaying;
      updateToggleButton();
      scheduleAutoplay();
    });
    document.addEventListener("visibilitychange", scheduleAutoplay);
    window.addEventListener("resize", () => {
      originalStart = getCardPosition(cards[0]);
      track.scrollLeft = originalStart;
      updateCarousel();
    });
  } else {
    previousButton.hidden = true;
    nextButton.hidden = true;
    toggleButton.hidden = true;
  }

  updateToggleButton();
  updateCarousel();
  scheduleAutoplay();
});
