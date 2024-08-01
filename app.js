  const birthDay = new Date("2002-10-04");
  const currentDay = new Date("2024-07-13");

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

  //check month value and redefine the year
  if(result.month < 0){
    result.year--;
    result.month += 12;
  }

  //check date value and redefine the month
  if(result.date < 0){
    result.month--;
    const totalDaysInMonth = totalDays(birthDayChild.year, birthDayChild.month -1);
    result.date += totalDaysInMonth;
  }
  console.log(result);
  //calculate total days in the birth month
  function totalDays(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
