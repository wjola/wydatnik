import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { categoriesData } from '../reducers/expenses';

const ChartsPage = ({ expenses }) => {
    const [pieChartData, setPieChartData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    let expensesSumPerMonth = [];

    useEffect(() => {
        getDataForPieChart();
    }, []);

    const getDataForPieChart = () => {
        const filteredExpenses = expenses.filter(d => {
            const regex = /\d\d\/06\/\d\d\d\d/g;
            return d.date.toString().match(regex);
        });
    
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

    return (<div>
                {pieChartData.length !== 0 && <PieChart data={pieChartData}/>}
                <LineChart />
            </div>);
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps, null)(ChartsPage);