const birthDay = new Date(document.querySelector("#birthDay").value);
const calc = document.querySelector("#calc");

const birthDate = birthDay.getDate();
const birthMonth = birthDay.getMonth();
const birthYear = birthDay.getFullYear();
calc.addEventListener("click", () => {
  console.log(birthDate, typeof birthDate);
  console.log(birthMonth, typeof birthMonth);
  console.log(birthYear, typeof birthYear);
});
