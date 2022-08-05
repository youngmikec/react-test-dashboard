import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Sold 230', 'Return 5'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 3],
      backgroundColor: [
        '#E46F24',
        '#DC362E',
      ],
      borderColor: [
        '#E46F24',
        '#DC362E',
      ],
      borderWidth: 1,
      spacing: 3,
      weight: 1
    },
  ],
};

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Total orders',
      },
    },
  };

type Props = {
    data: any;
}

const DoughnutComp = () => {
  return (
    <>
        <div className='pb-4'>
            <Doughnut options={options} data={data} />
        </div>
    </>
  )
}

export default DoughnutComp;