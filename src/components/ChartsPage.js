import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { categoriesData } from '../reducers/expenses';

const ChartsPage = ({ expenses }) => {
    const [pieChartData, setPieChartData] = useState([]);
    const [pieChartDateStart, setPieChartDateStart] = useState(moment().startOf('month'));
    const [pieChartDateEnd, setPieChartDateEnd] = useState(moment().endOf('month'));
    const [pieChartCalendarFocus, setPieChartCalendarFocus] = useState(null);
    const [lineChartData, setLineChartData] = useState([]);
    let expensesSumPerMonth = [];

    useEffect(() => {
        getDataForPieChart();
    }, []);

    useEffect(() => {
        console.log(pieChartDateStart);
        console.log(pieChartDateEnd);
        getDataForPieChart();
    }, [pieChartDateStart, pieChartDateEnd]);

    const getDataForPieChart = () => {
        const filteredExpenses = expenses.filter(d => {
            const dateFromMatch = moment(d.date, 'DD/MM/YYYY').isAfter(pieChartDateStart);
            const dateToMatch = moment(d.date, 'DD/MM/YYYY').isBefore(pieChartDateEnd);
            
            return dateFromMatch && dateToMatch;
        });
        console.log('filtered', filteredExpenses);
    
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

        console.log(expensesSumPerMonth);

        setPieChartData(expensesSumPerMonth);
    }

    return (<div>
                <div>
                    <form>
                        <fieldset className='date-picker'>
                            <label>Wybierz zakres dat:</label>
                            <DateRangePicker
                                startDate={pieChartDateStart}
                                startDateId="startDateId"
                                endDate={pieChartDateEnd}
                                endDateId="endDateId"
                                onDatesChange={({ startDate, endDate }) => {
                                    setPieChartDateStart(startDate.startOf('day'));
                                    setPieChartDateEnd(endDate.startOf('day'));
                                }}
                                focusedInput={pieChartCalendarFocus}
                                onFocusChange={focusedInput => setPieChartCalendarFocus(focusedInput)}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </fieldset>
                    </form>
                    {pieChartData.length !== 0 && <PieChart data={pieChartData}/>}
                </div>
                <LineChart />
            </div>);
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps, null)(ChartsPage);