const birthDay = new Date("2002-09-04");
const currentDay = new Date("2024-07-31");
const monthTemplate = {
  leap: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  nonLeap: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
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
//variable declarations
let ageYearCount = 0;
let ageMonthCount = 0;
let ageDayCount = 0;
let currentMonthDateBalance;
let birthMonthDateBalance;

//chk cd(m) & bd(m)
if (currentDayChild.year - birthDayChild.year > 0) {
  ageYearCount =
    currentDayChild.month === birthDayChild.month &&
    currentDayChild.date === birthDayChild.date
      ? currentDayChild.year - birthDayChild.year
      : currentDayChild.month > birthDayChild.month
      ? currentDayChild.year - birthDayChild.year
      : currentDayChild.year - 1 - birthDayChild.year;
}

// case1

if (birthDayChild.month < currentDayChild.month) {
  ageMonthCount = currentDayChild.month - birthDayChild.month - 1; //manual error(add -1 at the end of the last bracket)
  currentMonthDateBalance = currentDayChild.date;
  birthMonthDateBalance = chkLeap(birthDayChild.year)
    ? monthTemplate.leap[birthDayChild.month] - birthDayChild.date
    : monthTemplate.nonLeap[birthDayChild.month] - birthDayChild.date;

  ageDayCount = currentMonthDateBalance + birthMonthDateBalance;
} else if (birthDayChild.month > currentDayChild.month) {
  ageMonthCount = 11 - birthDayChild.month + currentDayChild.month; //manual error(add -1 at the end of the last bracket)
  // console.log(ageMonthCount);

  currentMonthDateBalance = currentDayChild.date;
  birthMonthDateBalance = chkLeap(birthDayChild.year)
    ? monthTemplate.leap[birthDayChild.month] - birthDayChild.date
    : monthTemplate.nonLeap[birthDayChild.month] - birthDayChild.date;

  ageDayCount = currentMonthDateBalance + birthMonthDateBalance;
}

//tmp yearCount
console.log(ageYearCount);
//tmp monthcount
console.log(ageMonthCount);
console.log(ageDayCount);

//chkleap or nonleap of the year
function chkLeap(year) {
  return year % 4 === 0
    ? year % 100 !== 0
      ? true
      : year % 400 === 0
      ? true
      : false
    : false;
}
// console.log(chkLeap(2002));

//calculate total days in the birth month
function totalDays(year, month) {
  return chkLeap(year)
    ? monthTemplate.leap[month]
    : monthTemplate.nonLeap[month];
}

// console.log(totalDays());
