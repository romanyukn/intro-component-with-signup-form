const form = document.getElementsByTagName("input");
const formArray = Array.from(form);
const button = document.getElementById("button");

function generate() {
  const formValue = [];
  formArray.map((el) => {
    formValue.push(el.value);
  });
  return formValue;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(generate());
});
