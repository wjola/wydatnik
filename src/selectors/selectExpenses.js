import moment from "moment";

const getSelectedExpenses = (expenses, filters) => {
  return expenses
    .filter((expense) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(expense.category);
      const amountFromMatch =
        !filters.amountFrom ||
        (filters.amountFrom && expense.amount > filters.amountFrom);
      const amountToMatch =
        !filters.amountTo ||
        (filters.amountTo && expense.amount < filters.amountTo);
      const dateFromMatch = moment(expense.date, "D/MM/YYYY").isAfter(
        filters.startDate
      );
      const dateToMatch = moment(expense.date, "D/MM/YYYY").isBefore(
        filters.endDate
      );

      return (
        categoryMatch &&
        amountFromMatch &&
        amountToMatch &&
        dateFromMatch &&
        dateToMatch
      );
    })
    .sort(compare(filters.sortBy));
};

const compare = (criterion) => {
  switch (criterion) {
    case "date":
      return compareDate;
    case "amount":
      return compareAmount;
  }
};

const compareDate = (x, y) => {
  const xMoment = moment(x.date, "D/MM/YYYY");
  const yMoment = moment(y.date, "D/MM/YYYY");

  if (xMoment.isBefore(yMoment)) {
    return -1;
  } else if (xMoment.isAfter(yMoment)) {
    return 1;
  } else {
    return 0;
  }
};

const compareAmount = (x, y) => {
  if (x.amount < y.amount) {
    return -1;
  } else if (x.amount > y.amount) {
    return 1;
  } else {
    return 0;
  }
};

export default getSelectedExpenses;
