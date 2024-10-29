const form = document.querySelector("form");
const card = document.querySelector("main");
const success = document.querySelector(".success-message");
const desktopImage = document.querySelector(".desktop-image");

window.addEventListener("resize", (updateImage) => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    desktopImage.style.display = "none";
  } else {
    desktopImage.style.display = "block";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  card.classList.add("hide");
  success.classList.remove("hide");
});
