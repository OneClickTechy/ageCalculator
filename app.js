const birthDay = new Date("2002-09-04");
const currentDay = new Date("2024-07-31");

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



//calculate total days in the birth month
function totalDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(totalDays
  (2005,1)
)