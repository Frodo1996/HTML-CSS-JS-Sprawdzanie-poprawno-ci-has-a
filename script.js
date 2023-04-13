const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMsg = document.getElementById("error-msg");

passwordInput.addEventListener("input", function (event) {
  const password = event.target.value;
  let errorMessages = [];

  if (password.length < 8) {
    errorMessages.push("Password must be at least 8 characters long.");
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
  if (!regex.test(password)) {
    errorMessages.push("Password must contain at least one uppercase letter and one lowercase letter.");
  }

  const regex2 = /^(?=.*\d)/;
  if (!regex2.test(password)) {
    errorMessages.push("Password must contain at least one number.");
  }

  const regex3 = /^(?=.*[@$!%*?&])/;
  if (!regex3.test(password)) {
    errorMessages.push("Password must contain at least one special character (@ $ ! % * ? &).");
  }

  if (errorMessages.length > 0) {
    errorMsg.innerText = errorMessages.join("\n");
    errorMsg.style.color = "red";
    return;
  }

  errorMsg.innerText = "";
  errorMsg.style.color = "";
});

confirmPasswordInput.addEventListener("input", function (event) {
  const confirmPassword = event.target.value;

  if (passwordInput.value !== confirmPassword) {
    errorMsg.innerText = "Passwords do not match. Please try again.";
    errorMsg.style.color = "red";
    return;
  }

  errorMsg.innerText = "";
  errorMsg.style.color = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === "" || confirmPasswordInput.value === "") {
    errorMsg.innerText = "Please fill in both password fields.";
    errorMsg.style.color = "red";
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorMsg.innerText = "Passwords do not match. Please try again.";
    errorMsg.style.color = "red";
    return;
  }

  if (errorMsg.innerText !== "") {
    return;
  }

  form.submit();
});
