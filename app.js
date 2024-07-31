const birthDay = new Date(document.querySelector("#birthDay").value);
const currentDay = new Date();
// button selector
const calc = document.querySelector("#calc");

const birthDate = birthDay.getDate();
const birthMonth = birthDay.getMonth();
const birthYear = birthDay.getFullYear();

const currentDate = currentDay.getDate();
const currentMonth = currentDay.getMonth();
const currentYear = currentDay.getFullYear();
calc.addEventListener("click", () => {
  // console.log(birthDate, typeof birthDate);
  // console.log(birthMonth, typeof birthMonth);
  // console.log(birthYear, typeof birthYear);

  // console.log(currentDate, typeof currentDate);
  // console.log(currentMonth, typeof currentMonth);
  // console.log(currentYear, typeof currentYear);
  let ageYear = currentYear - birthYear - 1;
  console.log(ageYear);
  console.log(chkLeap(birthYear, currentYear));
  //calculate balance months
});

function leap(year) {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function chkLeap(year1, year2) {
  const res1 = leap(year1);
  const res2 = leap(year2);

  return { res1, res2 };
}
