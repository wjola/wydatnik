export const setAmountFrom = (amountFrom) => {
  return {
    type: "SET_AMOUNT_FROM",
    amountFrom,
  };
};

export const setAmountTo = (amountTo) => {
  return {
    type: "SET_AMOUNT_TO",
    amountTo,
  };
};

export const includeCategory = (category) => {
  return {
    type: "ADD_CATEGORY",
    category,
  };
};

export const excludeCategory = (category) => {
  return {
    type: "DELETE_CATEGORY",
    category,
  };
};

export const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

export const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

export const resetFilters = () => {
  return {
    type: "RESET_FILTERS",
  };
};
