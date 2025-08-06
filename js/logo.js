const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  logo.style.setProperty("--part-animation", "blink-1 0.6s both");
});

logo.addEventListener("mouseleave", () => {
  logo.style.setProperty("--part-animation", "none");
});
