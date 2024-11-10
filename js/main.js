const form = document.querySelector("form");
const card = document.querySelector("main");
const successMessage = document.querySelector(".success-message");
const userEmail = document.querySelector(".user-email");
const emailInput = document.querySelector("input");
const dismissButton = document.getElementById("dis-btn");
const errorMessage = document.querySelector(".error-message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = emailInput.value.trim();
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   if (!email.match(emailRegex)) {
//     errorMessage.innerHTML = "valid email required";
//     emailInput.classList.add("active");
//   } else {
//     errorMessage.innerHTML = "";
//     emailInput.classList.remove("active");
//     card.classList.add("hide");
//     successMessage.classList.remove("hide");
//     userEmail.innerHTML = email;
//     document.querySelector(".attribution").classList.add("hide");
//   }
// });

// dismissButton.addEventListener("click", () => {
//   successMessage.classList.add("hide");
//   card.classList.remove("hide");
//   emailInput.value = "";
//   emailInput.classList.remove("active");
// });

// Reusable function to show or hide an element
function toggleVisibility(element, shouldShow) {
  if (shouldShow) {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailRegex)) {
    errorMessage.innerHTML = "Valid email required";
    emailInput.classList.add("active");
  } else {
    errorMessage.innerHTML = "";
    emailInput.classList.remove("active");
    toggleVisibility(card, false); // Hide the main card
    toggleVisibility(successMessage, true); // Show the success message
    userEmail.innerHTML = email;
    toggleVisibility(attribution, false); // Hide the attribution section
  }
});

dismissButton.addEventListener("click", () => {
  toggleVisibility(successMessage, false); // Hide the success message
  toggleVisibility(card, true); // Show the main card
  emailInput.value = "";
  emailInput.classList.remove("active");
});
