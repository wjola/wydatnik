import React, { useEffect } from 'react';
import { categoriesData } from '../reducers/expenses';

const LineChart = ({ data, categories }) => {
    const margin = { top: 40, right: 40, bottom: 60, left: 40 };
    const width = 900 - margin.left - margin.right;
    const height = 280 - margin.top - margin.bottom;
    const yMinValue = 0;

    const getMaxAmountForMonth = (monthData) => {
        return !!monthData && Math.max.apply(0, monthData[1].map(categoryData => Number(categoryData[1])));
    }
    const yMaxValue = d3.max(data, (d) => getMaxAmountForMonth(d));

    useEffect(() => {
    }, []);

    const parseDate = d3.timeParse("%m/%Y");

    const getX = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => parseDate(d[0])))
        .range([0, width]);

    const getY = d3
        .scaleLinear()
        .domain([yMinValue - 1, yMaxValue + 2])
        .range([height, 0]);

    const getXAxis = (ref) => {
        const xAxis = d3.axisBottom(getX);
        d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%m/%Y")))
                        .call(xAxis.ticks(data.length-1));
    };

    const getYAxis = (ref) => {
        const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
        d3.select(ref).call(yAxis);
    };

    const getMonthlyAmountForCategory = (categoryArray, category) => {
        const categoryIndex = categoryArray.findIndex(el => {
            return el[0] === category; }
        );

        if (categoryIndex !== -1) {
            return Number(categoryArray[categoryIndex][1]);
        } else {
            return 0;
        }
    }

    const getLinePathForCategory = (category) => {
        return d3
        .line()
            .x((d) => getX(parseDate(d[0])))
            .y((d) => getY(getMonthlyAmountForCategory(d[1], category)))
            .curve(d3.curveLinear)(data);
    }

    return (<div>
        <h2>Porównanie miesięcznych wydatków w kategorii w czasie</h2>
        <div id="line-container">
            <svg
                viewBox={`-50 -50 ${width + margin.left + margin.right} 
                                  ${height + margin.top + margin.bottom}`}
            >
                <g
                    className="axis"
                    ref={getYAxis}
                />
                <g
                    className="axis xAxis"
                    ref={getXAxis}
                    transform={`translate(0,${height})`}
                />

                {categories.map(category => {
                    return (
                    <path
                        key={category}
                        strokeWidth={1}
                        fill="none"
                        stroke={categoriesData.find(el => 
                            el.name == category).color}
                        d={getLinePathForCategory(category)}
                    />
                )})}

                <text
                    transform={"rotate(-90)"}
                    x={0 - height / 2} y={0 - margin.left} dy="1em">
                    {"PLN"}
                </text>

                {data.map(item => {
                    <g key={item[0]}>
                        <text
                            fill="#666"
                            x={getX(parseDate(item[0]))}
                            y={getY(Number(item[1][0][1]))}
                            textAnchor="middle"
                        >
                        </text>

                        <circle
                            cx={getX(parseDate(item[0]))}
                            cy={getY(Number(item[1][0][1]))}
                            r={4}
                            strokeWidth={0}
                            stroke="#fff"
                            style={{ transition: "ease-out .1s" }}
                        />
                    </g>
                })}
            </svg>
        </div>
    </div>);
}

export default LineChart;