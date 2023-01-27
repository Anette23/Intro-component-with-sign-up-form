// VARIABLES
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// LISTEN FOR FORM SUBMISSION
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    errorMessage(firstName, "First name cannot be empty");
  } else {
    successMessage(firstName);
  }

  if (lastNameValue === "") {
    errorMessage(lastName, "Last name cannot be empty");
  } else {
    successMessage(lastName);
  }

  if (emailValue === "") {
    errorMessage(email, "Email cannot be empty");
  } else if (!validateEmail(emailValue)) {
    errorMessage(email, "Email is invalid");
  } else {
    successMessage(email);
  }

  if (passwordValue === "") {
    errorMessage(password, "Password cannot be empty");
  } else {
    successMessage(password);
  }
});

// ERROR MESSAGE FUNCTION
function errorMessage(input, message) {
  const divContainer = input.parentElement;

  if (divContainer.classList.contains("success")) {
    divContainer.classList.remove("success");
    divContainer.classList.add("error");
  } else {
    divContainer.classList.add("error");
  }

  divContainer.querySelector(".errorMessage").textContent = message;
}

// SUCCESS MESSAGE FUNCTION
function successMessage(input) {
  const divContainer = input.parentElement;

  if (divContainer.classList.contains("error")) {
    divContainer.classList.remove("error");
    divContainer.classList.add("success");
  } else {
    divContainer.classList.add("success");
  }
}

// VALIDATE EMAIL FUNCTIOn
const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
