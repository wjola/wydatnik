import moment from "moment";

export const defaultFilters = {
  amountFrom: null,
  amountTo: null,
  categories: [],
  startDate: moment().startOf("day").startOf("month"),
  endDate: moment().startOf("day").endOf("month"),
  sortBy: "date",
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case "SET_AMOUNT_FROM":
      return {
        ...state,
        amountFrom: action.amountFrom,
      };
    case "SET_AMOUNT_TO":
      return {
        ...state,
        amountTo: action.amountTo,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (element) => element !== action.category
        ),
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "RESET_FILTERS":
      return {
        ...defaultFilters,
      };
    default:
      return state;
  }
};

export default filtersReducer;
