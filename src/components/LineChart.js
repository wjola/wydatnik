import React, { useState } from "react";
import { getColorForCategory } from "../utils/categoriesData";
import useDeviceClass from "../utils/useDeviceClass";

const LineChart = ({ data, categories }) => {
  const isDesktop = useDeviceClass() === "desktop";
  const isTablet = useDeviceClass() === "tablet";
  const isPhone = useDeviceClass() === "smartphone";
  const [activeIndex, setActiveIndex] = useState(null);
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = isDesktop ? 800 : isTablet ? 650 : 400;
  const height = isDesktop ? 180 : isTablet ? 240 : 300;
  const yMinValue = 0;

  const getMaxAmountForMonth = (monthData) =>
    !!monthData ? Math.max.apply(0, Object.values(monthData)) : 0;

  const yMaxValue = d3.max(data, (d) => {
    console.log("max", d);
    return getMaxAmountForMonth(d[1]);
  });
  const parseDate = d3.timeParse("%m/%Y");

  const getX = d3
    .scaleTime()
    .domain(
      d3.extent(data, (d) => {
        console.log("extent", parseDate(d[0]));
        parseDate(d[0]);
      })
    )
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref)
      .call(xAxis.tickFormat(d3.timeFormat("%m/%Y")))
      .call(xAxis.tickSize(isPhone ? "2rem" : "1em"))
      .call(xAxis.ticks(data.size - 1));
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  const getLinePathForCategory = (category) => {
    return d3
      .line()
      .x((d) => {
        console.log("xd:", d);
        return getX(parseDate(d[0]));
      })
      .y((d) => {
        console.log("gety:", getY(!!d[1] ? d[1][category] : 0));
        return getY(!!d[1] ? d[1][category] : 0);
      })
      .curve(d3.curveLinear)(Array.from(data));
  };

  const handleMouseMove = (e) => {
    const bisect = d3.bisector((d) => parseDate(d[0])).center;
    const x0 = getX.invert(d3.clientPoint(e.target, e)[0]);
    const index = bisect(Array.from(data), x0, 0);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div id="line-container">
      <svg
        viewBox={`-50 -50 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <g className="axis" ref={getYAxis} />
        <g
          className="axis xAxis"
          ref={getXAxis}
          transform={`translate(0,${height})`}
        />

        {!!data &&
          data.size > 0 &&
          !!categories &&
          categories.map((category) => {
            console.log(category);
            return (
              <path
                key={`path-${category}`}
                strokeWidth={1}
                fill="none"
                stroke={getColorForCategory(category)}
                d={getLinePathForCategory(category)}
              />
            );
          })}

        <text
          fill="#666"
          fontSize={isPhone ? "2rem" : "1em"}
          transform={"rotate(-90)"}
          x={0 - height / 2}
          y={0 - margin.left}
          dy="1em"
        >
          {"PLN"}
        </text>

        {Array.from(data).map(([month, monthData], index) => {
          return (
            index === activeIndex &&
            Array.from(new Map(Object.entries(monthData))).map(
              ([category, amount]) => {
                return (
                  <g key={`${month}-${category}`}>
                    <text
                      fill="#666"
                      x={getX(parseDate(month))}
                      y={getY(Number(amount) + 8)}
                      textAnchor="middle"
                    >
                      {amount}
                    </text>
                    <circle
                      cx={getX(parseDate(month))}
                      cy={getY(Number(amount))}
                      r={4}
                      fill="#891EBB"
                      strokeWidth={4}
                      stroke="#891EBB"
                      style={{ transition: "ease-out .1s" }}
                    />
                  </g>
                );
              }
            )
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;
