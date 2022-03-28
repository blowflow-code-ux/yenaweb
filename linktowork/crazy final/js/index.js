const form = document.querySelector("#name-form"),
  input = document.querySelector("#name-form input");

function onSubmitName(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem("username", username);
  location.href = "./test.html";
}

form.addEventListener("submit", onSubmitName);
