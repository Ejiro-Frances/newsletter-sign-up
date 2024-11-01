const form = document.querySelector("form");
const card = document.querySelector("main");
const successMessage = document.querySelector(".success-message");
const userEmail = document.querySelector(".user-email");
const emailInput = document.querySelector("input");
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

  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // || emailInput !== emailPattern)

  if (!email.match(emailRegex)) {
    errorMessage.innerHTML = "valid email required";
    emailInput.classList.add("active");
  } else {
    errorMessage.innerHTML = "";
    emailInput.classList.remove("active");
    card.classList.add("hide");
    successMessage.classList.remove("hide");
    userEmail.innerHTML = email;
    document.querySelector(".attribution").classList.add("hide");
  }
});

dismissButton.addEventListener("click", () => {
  successMessage.classList.add("hide");
  card.classList.remove("hide");
  emailInput.value = "";
  emailInput.classList.remove("active");
});
