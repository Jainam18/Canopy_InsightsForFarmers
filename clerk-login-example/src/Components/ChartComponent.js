import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // useEffect(() => {
  //   const createChart = (chartRef, data) => {
  //     console.log("createing chart with data", data)
  //     const ctx = chartRef.current.getContext('2d');
  //     console.log("data", data)

  //     new Chart(ctx, {
  //       type: 'line',
  //       data: {
  //         labels: "hi",
  //         datasets: [
  //           {
  //             label: 'Max',
  //             data: data[0].map(label => label.max),
  //             borderColor: 'red',
  //             fill: false,
  //           },
  //           {
  //             label: 'Min',
  //             data: labels.map(label => data[label][dataKey].min),
  //             borderColor: 'blue',
  //             fill: false,
  //           },
  //           {
  //             label: 'Average',
  //             data: labels.map(label => data[label][dataKey].average),
  //             borderColor: 'green',
  //             fill: false,
  //           },
  //           {
  //             label: 'Current',
  //             data: labels.map(label => data[label][dataKey].current),
  //             borderColor: 'purple',
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         plugins: {
  //           title: {
  //             display: true,
  //             text: `Groundwater Level - Dataset ${dataKey}`,
  //           },
  //         },
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //             title: {
  //               display: true,
  //               text: 'Water Level',
  //             },
  //           },
  //           x: {
  //             title: {
  //               display: true,
  //               text: 'Time Period',
  //             },
  //           },
  //         },
  //       },
  //     });
  //   };

  //   chartRefs.forEach((ref, index) => createChart(ref, data.lat_long_data[index]));
  // }, [data]);

  return (
    // <div>
    //   {chartRefs.map((ref, index) => (
    //     <canvas key={index} ref={ref} width="400" height="200"></canvas>
    //   ))}
    // </div>
    <div>
      <h2>"Groundwater"</h2>
      <img src={`/assets/images/blog/graph1.jpg`} alt={"bruh"} />
    </div>
  );
};

export default ChartComponent;