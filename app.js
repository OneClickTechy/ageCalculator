const birthDay = new Date("2002-09-04");
const currentDay = new Date();
//get date
const birthDate = birthDay.getDate();
const currentDate = currentDay.getDate();
//get month
const birthMonth = birthDay.getMonth();
const currentMonth = currentDay.getMonth();
//get year
const birthYear = birthDay.getFullYear();
const currentYear = currentDay.getFullYear();

//variable declarations
let ageYearCount, ageMonthCount, ageDayCount;

//chk cd(m) & bd(m)
function getYear() {
  if (currentMonth > birthMonth) {
    return currentYear - birthYear;
  } else if (currentMonth < birthMonth) {
    return currentYear - 1 - birthYear;
  }
}

//tmp yearCount
ageYearCount = getYear();
