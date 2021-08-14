import React, { useEffect } from 'react';


const LineChart = ({  }) => {
    // const margin = {
    //     top: 100,
    //     right: 100,
    //     bottom: 100,
    //     left: 100,
    // };
    // const width = 2 * 100 + margin.left + margin.right;
    // const height = 2 * 100 + margin.top + margin.bottom;

    useEffect(() => {
        drawChart();
    }, []);
    
    function drawChart() {

    }

    return (<div id="line-container"/>);
}

export default LineChart;