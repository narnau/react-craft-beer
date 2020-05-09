export const getMaxDate = (allDates) => {
  return getDate(allDates, (date, maxDate) => date > maxDate);
};

export const getMinDate = (allDates) => {
  return getDate(allDates, (date, minDate) => date < minDate);
};

const getDate = (allDates, expression) => {
  let goalDate = allDates[0];
  allDates.forEach((date) => {
    if (expression(date, goalDate)) {
      goalDate = date;
    }
  });
  return goalDate;
};

export const parseStringArrayToDateArray = (stringArray) => {
  let dateArray = [];
  stringArray.forEach((stringDate) =>
    dateArray.push(parseStringToDate(stringDate))
  );
  return dateArray;
};

// String format MM/YYYY
export const parseStringToDate = (dateString) => {
  return new Date(dateString.split("/")[1], dateString.split("/")[0] - 1);
};

export const createDate = (year, month) => {
  return new Date(year, month);
};
