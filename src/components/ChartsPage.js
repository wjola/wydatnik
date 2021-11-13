import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { getCategories } from "../utils/categoriesData";
import { compareDates, getMonthsBetweenDates } from "../utils/chartDataUtils";
import FormInputDateRange from "./FormInputDateRange";
import FormInputCategory from "./FormInputCategory";

const ChartsPage = ({ expenses }) => {
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartDateStart, setPieChartDateStart] = useState(
    moment().startOf("month")
  );
  const [pieChartDateEnd, setPieChartDateEnd] = useState(
    moment().endOf("month")
  );
  const [lineChartDateStart, setLineChartDateStart] = useState(
    moment().startOf("month")
  );
  const [lineChartDateEnd, setLineChartDateEnd] = useState(
    moment().endOf("month")
  );
  const [lineChartCategories, setLineChartCategories] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  let expensesSumPerMonth = [];

  useEffect(() => {
    getDataForPieChart();
    getDataForLineChart();
  }, []);

  useEffect(() => {
    getDataForPieChart();
  }, [pieChartDateStart, pieChartDateEnd]);

  useEffect(() => {
    getDataForLineChart();
  }, [lineChartCategories, lineChartDateStart, lineChartDateStart]);

  const getExpensesFilteredByDate = (dateStart, dateEnd) => {
    return expenses.filter((d) => {
      const dateFromMatch = moment(d.date, "DD/MM/YYYY").isAfter(dateStart);
      const dateToMatch = moment(d.date, "DD/MM/YYYY").isBefore(dateEnd);

      return dateFromMatch && dateToMatch;
    });
  };

  const getDataForPieChart = () => {
    const filteredExpenses = getExpensesFilteredByDate(
      pieChartDateStart,
      pieChartDateEnd
    );

    expensesSumPerMonth = getCategories()
      .map((category) => {
        return {
          category,
          amount: filteredExpenses.reduce((acc, curr) => {
            if (curr.category == category) {
              return acc + (Number.parseFloat(curr.amount) || 0);
            } else {
              return acc;
            }
          }, 0),
        };
      })
      .filter((el) => {
        return el.amount != 0;
      });

    setPieChartData(expensesSumPerMonth);
  };

  const getLineChartDataByMonths = (expensesFilteredByCategory) => {
    const monthsBetween = getMonthsBetweenDates(
      lineChartDateStart,
      lineChartDateEnd
    );

    const dataForLineChart = new Map();

    monthsBetween.forEach((month) => {
      let monthData;
      if (lineChartCategories.length > 0) {
        monthData = lineChartCategories.reduce(
          (dataObj, category) => ({
            ...dataObj,
            [category]: expensesFilteredByCategory.reduce(
              (categorySum, expense) =>
                sumCategoryExpensesForMonth(
                  categorySum,
                  expense,
                  category,
                  month
                ),
              0
            ),
          }),
          {}
        );
      }

      dataForLineChart.set(month, monthData);
    });

    return dataForLineChart;
  };

  const sumCategoryExpensesForMonth = (
    categorySum,
    expense,
    category,
    date
  ) => {
    if (
      expense.date.substring(expense.date.indexOf("/") + 1) === date &&
      expense.category === category
    ) {
      return categorySum + expense.amount;
    } else return categorySum;
  };

  const getDataForLineChart = () => {
    const expensesFilteredByDate = getExpensesFilteredByDate(
      lineChartDateStart,
      lineChartDateEnd
    );

    const expensesFilteredByCategory = expensesFilteredByDate
      .filter((expense) => lineChartCategories.includes(expense.category))
      .sort((exp1, exp2) => compareDates(exp1.date, exp2.date));

    setLineChartData(getLineChartDataByMonths(expensesFilteredByCategory));
  };

  return (
    <div className="subpage__body container">
      <h2>
        Porównanie proporcji wydatków między{" "}
        {moment(pieChartDateStart).format("DD-MM-YYYY")} a{" "}
        {moment(pieChartDateEnd).format("DD-MM-YYYY")}
      </h2>
      <div>
        <form>
          <FormInputDateRange
            startDate={pieChartDateStart}
            endDate={pieChartDateEnd}
            setStartDate={setPieChartDateStart}
            setEndDate={setPieChartDateEnd}
          />
        </form>
        {pieChartData.length !== 0 && <PieChart data={pieChartData} />}
      </div>
      <div>
        <h2>
          Porównanie wydatków w kategoriach między{" "}
          {moment(lineChartDateStart).format("DD-MM-YYYY")} a{" "}
          {moment(lineChartDateEnd).format("DD-MM-YYYY")}
        </h2>
        <form>
          <FormInputDateRange
            startDate={lineChartDateStart}
            endDate={lineChartDateEnd}
            setStartDate={setLineChartDateStart}
            setEndDate={setLineChartDateEnd}
          />
          <FormInputCategory
            selectedCategories={lineChartCategories}
            handleSelectCategory={(category) =>
              setLineChartCategories([...lineChartCategories, category])
            }
            handleUnselectCategory={(removedCategory) =>
              setLineChartCategories(
                lineChartCategories.filter((category) => {
                  return category !== removedCategory;
                })
              )
            }
          />
        </form>
        {!!lineChartData &&
          lineChartData.length !== 0 &&
          lineChartCategories.length > 0 && (
            <LineChart data={lineChartData} categories={lineChartCategories} />
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps, null)(ChartsPage);
