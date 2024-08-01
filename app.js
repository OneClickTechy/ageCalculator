const birthDay = new Date("2002-02-04");
const currentDay = new Date("2024-08-01");

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
let ageYearCount, ageMonthCount, ageDayCount;

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








//tmp yearCount
console.log(ageYearCount);
