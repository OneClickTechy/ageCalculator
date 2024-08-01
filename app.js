const currentDay = new Date();//30.07.24
// button selector
const calc = document.querySelector("#calc");

const currentDate = currentDay.getDate();//30
const currentMonth = currentDay.getMonth();//06 start from 0
const currentYear = currentDay.getFullYear();//2024

const leapCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const nonLeapCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

calc.addEventListener("click", () => {
  const birthDay = new Date(document.querySelector("#birthDay").value);//04.05.2002
  const birthDate = birthDay.getDate();//04
  const birthMonth = birthDay.getMonth();//04 start from 0
  const birthYear = birthDay.getFullYear();//2002
  // console.log(birthDate, typeof birthDate);
  // console.log(birthMonth, typeof birthMonth);
  // console.log(birthYear, typeof birthYear);

  // console.log(currentDate, typeof currentDate);
  // console.log(currentMonth, typeof currentMonth);
  // console.log(currentYear, typeof currentYear);
  let ageYear = currentYear - birthYear - 1;//2024-2002=22-1=21
  // console.log(ageYear);
  console.log(chkLeap(birthYear, currentYear));// false true
  leapResult = chkLeap(birthYear, currentYear);// false true
  //calculate balance months
  let initMonths;//undefined
  let Months;//undefined
  if (birthMonth <= 11) {
    initMonths = 11 - birthMonth;//11-4=7
  }
  // console.log(initMonths);

  //Months of the months
  Months = currentMonth + 1;//6+1=7
  // console.log(Months);

  let balanceMonth = initMonths + Months;//7+7=14
  // console.log(balanceMonth);

  //get balance days
  let initDays;
  let endDays = currentDate;//30
  if (leapResult[0] === true) {
    // console.log(true);
    // leapCount[birthMonth]-birthDate;
    initDays = leapCount[birthMonth] - birthDate;//31-4=27
  } else {
    initDays = nonLeapCount[birthMonth] - birthDate;//31-4=27
    // console.log(false);
  }

  let balanceDays = initDays + endDays;//27+31
  console.log(balanceDays);//58

  do {
    if (balanceDays >= 30) {
      balanceMonth++;
      balanceDays -= 30;//28
    }
  } while (balanceDays >= 30);

  do {
    if (balanceMonth >= 12) {
      ageYear++;
      balanceMonth -= 12;
    }
  } while (balanceMonth >= 12);

  console.log(ageYear, balanceMonth, balanceDays);
  
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

  return [res1, res2];
}
