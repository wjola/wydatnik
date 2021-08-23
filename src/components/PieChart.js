import React, { useEffect } from 'react';

const PieChart = ({ data }) => {
    const margin = {
        top: 100,
        right: 100,
        bottom: 100,
        left: 150,
    };
    const width = 2 * 100 + margin.left + margin.right;
    const height = 2 * 100 + margin.top + margin.bottom;

    useEffect(() => {
        drawChart();
    }, []);

    useEffect(() => {
        drawChart();
    }, [data]);
    
    function drawChart() {
        const colorScale = d3.scaleSequential()      
                             .interpolator(d3.interpolateCool)
                             .domain([0, data.length]);
  
        d3.select('#pie-container').select('svg').remove();
  
        // Create new svg
        const svg = d3.select('#pie-container')
                      .append('svg')
                      .attr('width', width)
                      .attr('height', height)
                      .append('g')
                      .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(150);
        const pieGenerator = d3.pie().padAngle(0).value((d) => d.amount);
        const arc = svg.selectAll("arc")
                       .data(pieGenerator(data))
                       .enter()
                       .append("g")
                       .attr("class", "arc");
  
        // Append sectors
        arc.append('path')
           .attr('d', arcGenerator)
           .style('fill', (_, i) => colorScale(i))
           .style('0', '#000000')
           .style('stroke-width', 0);

        // Label
        arc.append("text")
           .attr("text-anchor", "middle")
           .attr("x", function(d) {
                var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                d.cx = Math.cos(a) * (150 - 45);

                return d.x = Math.cos(a) * (150+30);
            })
            .attr("y", function(d) {
                var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                d.cy = Math.sin(a) * (150 - 45);

                return d.y = Math.sin(a) * (150+30);
            })
            .text(function(d) { return d.data.category;  })
            .style('font-size', '15px')
            .style('fill', '#000000')
            .each(function(d) {
                var bbox = this.getBBox();
                d.sx = d.x - bbox.width/2 - 2;
                d.ox = d.x + bbox.width/2 + 2;
                d.sy = d.oy = d.y + 5;
            });

        // Label connection
        arc.append("defs").append("marker")
           .attr("id", "circ")
           .attr("markerWidth", 6)
           .attr("markerHeight", 6)
           .attr("refX", 3)
           .attr("refY", 3)
           .append("circle")
           .style('fill', '#383838')
           .attr("cx", 3)
           .attr("cy", 3)
           .attr("r", 3);

        // Label starting point
        arc.append("path")
           .attr("class", "pointer")
           .style("fill", "none")
           .style("stroke", "#383838")
           .attr("marker-end", "url(#circ)")
           .attr("d", function(d) {
                if(d.cx > d.ox) {
                    return "M" + d.sx + "," + d.sy + "L" + d.ox + "," + d.oy + " " + d.cx + "," + d.cy;
                } else {
                    return "M" + d.ox + "," + d.oy + "L" + d.sx + "," + d.sy + " " + d.cx + "," + d.cy;
                }
           });
    }

    return (<div id="pie-container"/>);
}

export default PieChart;