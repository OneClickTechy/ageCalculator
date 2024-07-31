let inputBirthDate = document.querySelector("#inputBirthDate");
let result = document.querySelector("#result");
// let birthMonth = inputBirthDate.getMonth();
// let birthDate = inputBirthDate.getDate();
let calc = document.getElementById("calc");
const currentDate = new Date().getFullYear();

calc.addEventListener("click", () => {
  console.log(currentDate);
  console.log(new Date(inputBirthDate.value).getFullYear());
  console.log(currentDate - new Date(inputBirthDate.value).getFullYear());
  let age = currentDate - new Date(inputBirthDate.value).getFullYear();
  result.textContent = `Your age is ${age}`;
});
