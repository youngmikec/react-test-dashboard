import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      borderStyle: 'round',
      data: [58, 30, 60, 40, 20, 55, 15, 30, 20, 70],
      borderColor: '#DC362E',
      backgroundColor: '#DC362E',
      fill: false,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#AE8FF7",
      pointBorderWidth: 2,
      tension: 0.4
    }
  ],
};

const LineChartComp = () => {
  return (
    <>
        <Line options={options} data={data} />
    </>
  )
}

export default LineChartComp;