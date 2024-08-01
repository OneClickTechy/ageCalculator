const birthDay = new Date("2002-05-04");
const currentDay = new Date("2024-08-01");
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
let ageYearCount = (ageMonthCount = ageDayCount = 0);

//chk cd(m) & bd(m)
if (currentDayChild.year - birthDayChild.year > 1) {
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
  ageMonthCount = currentDayChild.month - birthDayChild.month - 1;
}

//tmp monthcount
// console.log(ageMonthCount);
//tmp yearCount
// console.log(ageYearCount);

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
