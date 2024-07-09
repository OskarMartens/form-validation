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

function validateEmail() {
  validEmail = false;
  //Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.add("valid-input");
    emailInput.classList.remove("non-valid-input");

    emailWarning.classList.add("hide-warning");
    emailWarning.classList.remove("show-warning");
    validEmail = true;
    updateSubmitButton();
  } else if (emailInput.value.length == 0) {
    emailInput.classList.add("valid-input");
    emailInput.classList.remove("non-valid-input");

    emailWarning.classList.add("hide-warning");
    emailWarning.classList.remove("show-warning");
  } else {
    emailInput.classList.add("non-valid-input");
    emailWarning.classList.add("show-warning");
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

//Password validation function
function validatePassword() {
  validPassword = false;
  //Password length validation
  if (passwordInput.value.length >= 8) {
    passwordInput.classList.add("valid-input");
    passwordInput.classList.remove("non-valid-input");

    passwordWarning.classList.remove("show-warning");
    passwordWarning.classList.add("hide-warning");

  } else if (passwordInput.value.length == 0) {
    passwordInput.classList.add("valid-input");
    passwordInput.classList.remove("non-valid-input");

    passwordWarning.classList.remove("show-warning");
    passwordWarning.classList.add("hide-warning");

  } else {
    passwordInput.classList.remove("valid-input");
    passwordInput.classList.add("non-valid-input");

    passwordWarning.classList.add("show-warning");
    passwordWarning.classList.remove("hide-warning");
  }

  //Confirm password matching validation
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("valid-input");
    confirmPasswordInput.classList.remove("non-valid-input");

    confirmPasswordWarning.classList.add("hide-warning");
    confirmPasswordWarning.classList.remove("show-warning");

  } else if(confirmPasswordInput.value.length == 0){
    confirmPasswordInput.classList.add("valid-input");
    confirmPasswordInput.classList.remove("non-valid-input");

    confirmPasswordWarning.classList.remove("show-warning");
    confirmPasswordWarning.classList.add("hide-warning");
  } else {
    confirmPasswordInput.classList.remove("valid-input");
    confirmPasswordInput.classList.add("non-valid-input");

    confirmPasswordWarning.classList.remove("hide-warning");
    confirmPasswordWarning.classList.add("show-warning");
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
passwordInput.addEventListener("focus", () => {
  validatePassword();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
});

passwordInput.addEventListener("focusout", () => {
  validatePassword();
});

//Confirm password eventlistener
confirmPasswordInput.addEventListener("focus", (event) => {
  validatePassword();
});

confirmPasswordInput.addEventListener("input", () => {
  validatePassword();
});

confirmPasswordInput.addEventListener("focusout", () => {
  validatePassword();
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
