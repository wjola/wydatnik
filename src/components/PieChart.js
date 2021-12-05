import React, { useEffect, useState } from "react";
import { getDisplayedNameForCategory } from "../utils/categoriesData";
import useDeviceClass from "../utils/useDeviceClass";

const PieChart = ({ data }) => {
  const device = useDeviceClass();
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [margin, setMargin] = useState(100);
  const [outerRadius, setOuterRadius] = useState(150);
  const [responsiveDivisor, setResponsiveDivisor] = useState(1);

  useEffect(() => {
    if (device === "smartphone") {
      setWidth(350);
      setHeight(325);
      setMargin(75);
      setOuterRadius(125);
      setResponsiveDivisor(1.15);
    } else if (device === "smartphone-small") {
      setWidth(300);
      setHeight(200);
      setMargin(50);
      setOuterRadius(75);
      setResponsiveDivisor(2);
    }
    drawChart();
  }, []);

  useEffect(() => {
    drawChart();
  }, [data]);

  useEffect(() => {
    drawChart();
  }, [width]);

  useEffect(() => {
    if (device === "smartphone") {
      setWidth(350);
      setHeight(325);
      setMargin(75);
      setOuterRadius(125);
      setResponsiveDivisor(1.15);
    } else if (device === "smartphone-small") {
      setWidth(300);
      setHeight(200);
      setMargin(50);
      setOuterRadius(75);
      setResponsiveDivisor(2);
    }
  }, [device]);

  const drawChart = () => {
    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([0, data.length]);

    d3.select("#pie-container").select("svg").remove();

    // Create new svg
    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width + margin)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin * 2.5}, ${margin * 2})`);

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(outerRadius);
    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.amount);
    const arc = svg
      .selectAll("arc")
      .data(pieGenerator(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    // Append sectors
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("0", "#000000")
      .style("stroke-width", 0);

    // Label
    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (d) => {
        const a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
        d.cx = Math.cos(a) * (150 - 45);

        return (d.x = Math.cos(a) * (150 + 30)) / responsiveDivisor;
      })
      .attr("y", (d) => {
        const a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
        d.cy = Math.sin(a) * (150 - 45);

        return (d.y = Math.sin(a) * (150 + 30)) / responsiveDivisor;
      })
      .text((d) => {
        return getDisplayedNameForCategory(d.data.category);
      })
      .style("font-size", "15px")
      .style("fill", "#000000")
      .each(function (d) {
        const bbox = this.getBBox();
        d.sx = d.x - bbox.width / 2 - 2;
        d.ox = d.x + bbox.width / 2 + 2;
        d.sy = d.oy = d.y + 5;
      });

    // Label connection
    arc
      .append("defs")
      .append("marker")
      .attr("id", "circ")
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("refX", 3)
      .attr("refY", 3)
      .append("circle")
      .style("fill", "#383838")
      .attr("cx", 3)
      .attr("cy", 3)
      .attr("r", 3);

    // Label starting point
    arc
      .append("path")
      .attr("class", "pointer")
      .style("fill", "none")
      .style("stroke", "#383838")
      .attr("marker-end", "url(#circ)")
      .attr("d", (d) => {
        let divisor = 1;
        if (device === "smartphone-small") {
          divisor = 2;
        }
        if (d.cx > d.ox) {
          return (
            "M" +
            d.sx / responsiveDivisor +
            "," +
            d.sy / responsiveDivisor +
            "L" +
            d.ox / responsiveDivisor +
            "," +
            d.oy / responsiveDivisor +
            " " +
            d.cx / responsiveDivisor +
            "," +
            d.cy / responsiveDivisor
          );
        } else {
          return (
            "M" +
            d.ox / responsiveDivisor +
            "," +
            d.oy / responsiveDivisor +
            "L" +
            d.sx / responsiveDivisor +
            "," +
            d.sy / responsiveDivisor +
            " " +
            d.cx / responsiveDivisor +
            "," +
            d.cy / responsiveDivisor
          );
        }
      });
  };

  return <div id="pie-container" />;
};

export default PieChart;
