import React, { useEffect } from 'react';


const LineChart = ({ data }) => {
    const margin = { top: 40, right: 40, bottom: 60, left: 40 };
    const width = 1100 - margin.left - margin.right;
    const height = 280 - margin.top - margin.bottom;
    const color = "OrangeRed";
    const yMinValue = 0;//d3.min(data, (d) => Number(d[1][0][1]));
    const yMaxValue = d3.max(data, (d) => Number(d[1][0][1]));

    useEffect(() => {
    }, []);

    const parseDate = d3.timeParse("%m/%Y");
    console.log("nono",data);
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

    const linePath = d3
        .line()
        .x((d) => getX(parseDate(d[0])))
        .y((d) => getY(Number(d[1][0][1])))
        .curve(d3.curveMonotoneX)(data);

    const areaPath = d3
        .area()
        .x((d) => getX(parseDate(d[0])))
        .y0((d) => getY(Number(d[1][0][1])))
        .y1(() => getY(yMinValue - 1))
        .curve(d3.curveMonotoneX)(data);

    return (<div>
        <h2>Porównanie miesięcznych wydatków w kategorii w czasie</h2>
        <div id="line-container">
            <svg
                viewBox={`-50 -50 ${width + margin.left + margin.right} 
                                  ${height + margin.top + margin.bottom}`}
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
            >
                <g className="axis" ref={getYAxis} />
                <g
                    className="axis xAxis"
                    ref={getXAxis}
                    transform={`translate(0,${height})`}
                />

                <path fill={color} d={areaPath} opacity={0.3} />
                <path strokeWidth={3} fill="none" stroke={color} d={linePath} />

                <text
                    transform={"rotate(-90)"}
                    x={0 - height / 2} y={0 - margin.left} dy="1em">
                    {"PLN"}
                </text>

                {/* <text
                    x={width / 2} y={0 - margin.top / 2} textAnchor="middle" >
                    {"USD to RUB Exchange Rates, 2020"}
                </text> */}

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
                            fill={color}
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