import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// eslint-disable-next-line react/prop-types
const ResultChart = ({ correctAnswers, totalQuestions }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
  
    useEffect(() => {
      if (chartInstanceRef.current) {
        // If a chart instance already exists, destroy it before creating a new one
        chartInstanceRef.current.destroy();
      }
  
      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Correct Answers', 'Incorrect Answers'],
          datasets: [
            {
              label: 'Quiz Results',
              data: [correctAnswers, totalQuestions - correctAnswers],
              backgroundColor: ['green', 'red'],
            },
          ],
        },
      });
  
      // Store the chart instance in a ref for future reference
      chartInstanceRef.current = newChartInstance;
    }, [correctAnswers, totalQuestions]);
  
    return <canvas ref={chartRef} />;
};

export default ResultChart;