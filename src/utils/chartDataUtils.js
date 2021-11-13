import moment from "moment";

export const compareDates = (date1, date2, dateFormat = "DD/MM/YYYY") => {
  if (moment(date1, dateFormat).isBefore(moment(date2, dateFormat))) {
    return -1;
  } else if (moment(date1, dateFormat).isAfter(moment(date2, dateFormat))) {
    return 1;
  } else {
    return 0;
  }
};

export const getMonthsBetweenDates = (dateStart, dateEnd) => {
  let startDate = moment(dateStart);
  let months = [];

  while (dateEnd > startDate || startDate.format("M") === dateEnd.format("M")) {
    months.push(startDate.format("MM/YYYY"));
    startDate.add(1, "month");
  }

  return months;
};
