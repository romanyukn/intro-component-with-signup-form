const form = document.getElementsByTagName("input");
const formArray = Array.from(form);
const button = document.getElementById("button");

function generate() {
  const formValue = [];
  formArray.map((el) => {
    if (el.value === "") {
      el.className = "form-control is-invalid";
    } else {
      el.className = "form-control";
      formValue.push(el.value);
      el.value = "";
    }
  });
  return formValue;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(generate());
});
