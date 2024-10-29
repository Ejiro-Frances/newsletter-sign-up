const form = document.querySelector("form");
const card = document.querySelector(".card");
const success = document.querySelector(".success-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  card.classList.add("hide");
  success.classList.remove("hide");
});
