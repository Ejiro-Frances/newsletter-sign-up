const form = document.querySelector("form");
const card = document.querySelector("main");
const successMessage = document.querySelector(".success-message");
const userEmail = document.querySelector(".user-email");
const emailInput = document.querySelector("input").value;
const dismissButton = document.getElementById("dis-btn");
const errorMessage = document.querySelector(".error-message");

// function validateEmail(email) {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (email === "") {
//     errorMessage.textContent = "Please enter a valid email.";
//   }
//   return emailPattern.test(email);
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // || emailInput !== emailPattern)

  if (emailInput === "") {
    errorMessage.textContent = "valid email required";
    document.querySelector("input").classList.add("active");
  } else if (emailInput !== emailPattern) {
    errorMessage.textContent = "invalid email";
  } else {
    card.classList.add("hide");
    successMessage.classList.remove("hide");
    document.querySelector(".attribution").classList.add("hide");
  }
});

dismissButton.addEventListener("click", () => {
  successMessage.classList.add("hide");
  card.classList.remove("hide");
  emailInput = "";
});
