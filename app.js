const calculate = document.querySelector("#calc");
const output = document.querySelector("#output");
calculate.addEventListener("click", ageCalculator);

function ageCalculator() {
  const birthDay = new Date(document.querySelector("#birthDay").value);
  const currentDay = new Date();
  console.log(typeof birthDay.value);
  const birthDayChild = {
    date: birthDay.getDate(),
    month: birthDay.getMonth(),
    year: birthDay.getFullYear(),
  };
  const currentDayChild = {
    date: currentDay.getDate(),
    month: currentDay.getMonth(),
    year: currentDay.getFullYear(),
  };

  let result = {
    year:
      birthDayChild.year < currentDayChild.year
        ? currentDayChild.year - birthDayChild.year
        : currentDayChild.year - birthDayChild.year - 1,
    month: currentDayChild.month - birthDayChild.month,
    date: currentDayChild.date - birthDayChild.date,
  };
 //check date value and redefine the month
 if (result.date < 0) {
  result.month--;
  const totalDaysInMonth = totalDays(
    birthDayChild.year,
    birthDayChild.month - 1
  );
  result.date += totalDaysInMonth;
}
console.log(result);
  //check month value and redefine the year
  if (result.month < 0) {
    result.year--;
    result.month += 12;
  }

 
  //calculate total days in the birth month
  function totalDays(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  output.textContent = `Yout age is ${result.year} Years ${result.month} months ${result.date} days`;
}


//test

console.log(typeof new Date())