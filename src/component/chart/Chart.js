import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Private sale & Investor', 'Circulating Supply', 'Real estate Tokenization Paltform', 'Marketing'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 70, 10, 10 ],
      backgroundColor: [
        '#6e4c1e',
        '#efb138',
        '#b78628',
        '#fcf8b8',
        
      ],
      borderColor: [
        '#212121',
        '#212121',
        '#212121',
        '#212121',
       
      ],
      borderWidth: 1,
    },
  ],
};

function Chart() {
  return <div className='chart_widyth'> <Doughnut data={data} /></div>;
}

export default Chart;
