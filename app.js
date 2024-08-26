document.getElementById("learnMoreBtn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("show");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show");
});

window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});
