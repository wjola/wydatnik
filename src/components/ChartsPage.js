import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { categoriesData } from '../reducers/expenses';
import FormInputDateRange from './FormInputDateRange';
import FormInputCategory from './FormInputCategory';

const ChartsPage = ({ expenses }) => {
    const [pieChartData, setPieChartData] = useState([]);
    const [pieChartDateStart, setPieChartDateStart] = useState(moment().startOf('month'));
    const [pieChartDateEnd, setPieChartDateEnd] = useState(moment().endOf('month'));    const [lineChartDateStart, setLineChartDateStart] = useState(moment().startOf('month'));
    const [lineChartDateEnd, setLineChartDateEnd] = useState(moment().endOf('month'));
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
    }, [lineChartCategories]);

    const getExpensesFilteredByDate = (dateStart, dateEnd) => {
        return expenses.filter(d => {
            const dateFromMatch = moment(d.date, 'DD/MM/YYYY').isAfter(dateStart);
            const dateToMatch = moment(d.date, 'DD/MM/YYYY').isBefore(dateEnd);
            
            return dateFromMatch && dateToMatch;
        });
    }

    const getDataForPieChart = () => {
        const filteredExpenses = getExpensesFilteredByDate(pieChartDateStart, pieChartDateEnd);
    
        expensesSumPerMonth = categoriesData.map(category => {
            return {
                category: category.name,
                amount: filteredExpenses.reduce((acc, curr) => {
                    if ( curr.category == category.name) {
                        return acc + (Number.parseFloat(curr.amount) || 0);
                    } else {
                        return acc;
                    }
                }, 0)
            }
        }).filter(el => {
            return el.amount != 0;
        });

        setPieChartData(expensesSumPerMonth);
    }

    const getDataForLineChart = () => {
        const expensesFilteredByDate = getExpensesFilteredByDate(lineChartDateStart, lineChartDateEnd);
        const expensesFilteredByCategory = expensesFilteredByDate.filter(expense => {
            if (lineChartCategories.includes(expense.category)) {
                return true;
            } else {
                return false;
            }
        }).sort((exp1, exp2) => {
            if (moment(exp1.date, 'DD/MM/YYYY').isBefore(moment(exp2.date, 'DD/MM/YYYY'))) {
                return -1;
            } else if (moment(exp1.date, 'DD/MM/YYYY').isAfter(moment(exp2.date, 'DD/MM/YYYY'))) {
                return 1;
            } else {
                return 0;
            }
        });

        setLineChartData(d3.rollups(expensesFilteredByCategory,
                 v => v.reduce((acc, curr) => acc + Number.parseFloat(curr.amount), 0),
                 d => d.date.substring(d.date.indexOf('\/')+1),
                 d => d.category));
    }

    return (<div>
                <div>
                    <form>
                        <FormInputDateRange
                            startDate={pieChartDateStart}
                            endDate={pieChartDateEnd}
                            setStartDate={setPieChartDateStart}
                            setEndDate={setPieChartDateEnd}
                        />
                    </form>
                    {pieChartData.length !== 0 && <PieChart data={pieChartData}/>}
                </div>
                <div>
                    <form>
                        <FormInputDateRange
                            startDate={lineChartDateStart}
                            endDate={lineChartDateEnd}
                            setStartDate={setLineChartDateStart}
                            setEndDate={setLineChartDateEnd}
                        />
                        <FormInputCategory
                            selectedCategories={lineChartCategories}
                            handleSelectCategory={category => setLineChartCategories([
                                ...lineChartCategories,
                                category
                            ])}
                            handleUnselectCategory={removedCategory => setLineChartCategories(
                                lineChartCategories.filter(category => {
                                    return category !== removedCategory;
                                })
                            )}
                        />
                    </form>
                    {lineChartData.length !== 0 && lineChartCategories.length > 0 && <LineChart data={lineChartData} categories={lineChartCategories}/>}
                </div>
            </div>);
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps, null)(ChartsPage);