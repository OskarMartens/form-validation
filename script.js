const formInput = document.querySelector(".form-section");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordWarning = document.getElementById("passwordWarning");
const confirmPasswordWarning = document.getElementById(
  "confirmPasswordWarning"
);
const btn = document.querySelector(".register-button");

var validName = false;
var validUsername = false;
var validEmail = false;
var validPassword = false;

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 0) {
    validName = true;
    updateSubmitButton();
  } else validName = false;
});

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length > 0) {
    validUsername = true;
    updateSubmitButton();
  } else validUsername = false;
});

//Password validation function
function validatePassword() {
  validPassword = false;
  //Password length validation
  if (passwordInput.value.length === 0) {
    passwordInput.style.background = "white";
    passwordWarning.style.display = "none";
  } else if (passwordInput.value.length >= 8) {
    passwordInput.style.background = "white";
    passwordWarning.style.display = "none";
  } else {
    passwordInput.style.background = "pink";
    passwordWarning.style.display = "inline";
  }

  //Confirm password matching validation
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.style.background = "white";
    confirmPasswordWarning.style.display = "none";
  } else {
    confirmPasswordInput.style.background = "pink";
    confirmPasswordWarning.style.display = "inline";
  }

  //Set valid email variable
  if (
    passwordInput.value.length >= 8 &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    validPassword = true;
    updateSubmitButton();
  }
}

//Password eventlistener
passwordInput.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  validatePassword();
});

passwordInput.addEventListener("input", (event) => {
  event.target.style.background = "pink";
  validatePassword();
});

passwordInput.addEventListener("focusout", () => {
  validatePassword();
});

//Confirm password eventlistener
confirmPasswordInput.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  validatePassword();
});

confirmPasswordInput.addEventListener("input", () => {
  validatePassword();
});

confirmPasswordInput.addEventListener("focusout", () => {
  validatePassword();
});

//Validate email
function validateEmail() {
  validEmail = false;
  //Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.background = "white";
    emailWarning.style.display = "none";
    validEmail = true;
    updateSubmitButton();
  } else {
    emailInput.style.background = "pink";
    emailWarning.style.display = "inline";
  }

  if (emailInput.value.length == 0) {
    emailWarning.style.display = "none";
    emailInput.style.background = "white";
  }
}

//Validate email eventlisteners
emailInput.addEventListener("focus", () => {
  validateEmail();
});
emailInput.addEventListener("input", () => {
  validateEmail();
});
emailInput.addEventListener("focusout", () => {
  validateEmail();
});

function updateSubmitButton() {
  if (validName && validUsername && validEmail && validPassword) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const registrationData = {
    name: nameInput.value,
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(registrationData);
});
