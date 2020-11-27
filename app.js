const form = document.getElementsByTagName("input");
const formArray = Array.from(form);
const button = document.getElementById("button");
const emailCheck = /^\S+@\S+\.\S+$/

function validateLoginForm() {
 const result = formArray.map((el) => {
    return validateError(el);
  });
  return result.every((el) => el == true);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit();
});

formArray.forEach((el) =>
  el.addEventListener("keydown", (el) => {
    el.target.className = "form-control";
  })
);

function validateError(el) {
  if (el.value === "") {
    el.className = "form-control is-invalid";
    el.parentNode.querySelector(".invalid-feedback").innerText = `${el.placeholder} cannot be empty`;
    return false
  };
  if(el.placeholder === "Email Address") return validateEmail(el);
  return true;
}

function validateEmail(el) {
  if (!emailCheck.test(el.value)) {
    el.className = "form-control is-invalid";
    el.parentNode.querySelector(".invalid-feedback").innerText = `Looks like this is not an ${el.placeholder}`;
    return false;
  }
  return true;
}

function cleanForm() {
  formArray.forEach((el) => el.value = "");
}

function handleSubmit() {
  if (validateLoginForm()) {
    cleanForm();
  }
}

// console.log(el.parentNode.querySelector(".invalid-feedback"));