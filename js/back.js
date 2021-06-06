const username = "admin";
const password = "admin@123";

const username_field = document.querySelector("#username");
const password_field = document.querySelector("#password");
const button = document.querySelector("#button1");

button.addEventListener("click", () => {
  if (username_field.value === username && password_field.value === password) {
    window.location.href = "https://google.com";
  } else {
    alert("Invalid username/password!");
  }
});
