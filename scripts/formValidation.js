const form = document.querySelector(".main__form");
const formInputs = document.querySelectorAll(".main__form input");
const inputContainers = document.querySelectorAll(".form__input-container");

form.addEventListener("submit", validateFields);

function validateFields(e) {
  e.preventDefault();
  inputContainers.forEach((item) => {
    const input = item.children[0];
    const span = document.createElement("span");

    if (input.name === "Email Address" && !validateEmail(input.value)) {
      span.textContent = "Looks like this is not an email";
      handleWarningMessage(item, span, input);
    } else if (!input.value) {
      span.textContent = `${input.name} cannot be empty`;
      handleWarningMessage(item, span, input);
    } else {
      console.log("form successful");
    }
  });
}

function handleWarningMessage(it, elem, inp) {
  it.classList.add("warningIcon");
  elem.classList.add("warningMsg");
  inp.classList.add("warning");
  inp.after(elem);
  setTimeout(() => {
    inp.classList.remove("warning");
    it.classList.remove("warningIcon");
    it.removeChild(elem);
  }, 3000);
}

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
