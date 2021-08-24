import React, { useState } from 'react';
import { getColorForCategory } from '../utils/categoriesData';

const LineChart = ({ data, categories }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const margin = { top: 40, right: 40, bottom: 60, left: 50 };
    const width = 900 - margin.left - margin.right;
    const height = 280 - margin.top - margin.bottom;
    const yMinValue = 0;
    
    const getMaxAmountForMonth = (monthData) => {
        return !!monthData && Math.max.apply(0, monthData[1].map(categoryData => Number(categoryData[1])));
    }
    
    const yMaxValue = d3.max(data, (d) => getMaxAmountForMonth(d));
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

    const handleMouseMove = (e) => {
        const bisect = d3.bisector((d) => parseDate(d[0])).left;
        const x0 = getX.invert(d3.clientPoint(e.target, e)[0]);
        const index = bisect(data, x0, 1);
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (<div id="line-container">
            <svg
                viewBox={`-50 -50 ${width + margin.left + margin.right} 
                                  ${height + margin.top + margin.bottom}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
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
                        stroke={getColorForCategory(category)}
                        d={getLinePathForCategory(category)}
                    />
                )})}

                <text
                    fill="#666"
                    transform={"rotate(-90)"}
                    x={0 - height / 2} y={0 - margin.left} dy="1em">
                    {"PLN"}
                </text>
                {console.log(data)}
                {data.map((item, index) => {
                    return index === activeIndex &&  
                        item[1].map((el, i) => {
                            console.log('item[1]',item[1]);
                            console.log('el ', el, 'i ', i);
                            return (
                            <g key={el[1]}>
                                <text
                                    fill="#666"
                                    x={getX(parseDate(item[0]))}
                                    y={getY(Number(item[1][i][1])) - 10}
                                    textAnchor="middle"
                                >
                                    {Number(item[1][i][1])}
                                </text>
                            <circle
                                cx={getX(parseDate(item[0]))}
                                cy={getY(Number(item[1][i][1]))}
                                r={4}
                                fill="#891EBB"
                                strokeWidth={4}
                                stroke="#891EBB"
                                style={{ transition: "ease-out .1s" }}
                            />
                        </g>
                        )});                    
                })}
            </svg>
        </div>);
}

export default LineChart;