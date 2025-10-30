// Parallax scroll and fade on scroll
window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-content");
  const scroll = window.scrollY;
  heroText.style.transform = `translateY(${scroll * 0.5}px)`;
  heroText.style.opacity = 1 - scroll / 600;
});