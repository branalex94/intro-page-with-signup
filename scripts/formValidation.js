const form = document.querySelector(".main__form");
const formInputs = document.querySelectorAll(".main__form input");

form.addEventListener("submit", validateFields);

function validateFields(e) {
  e.preventDefault();
  console.log(e);
}
