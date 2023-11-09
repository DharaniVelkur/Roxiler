import React from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

const BarChart = ({data}) => {
    // console.log(data)
    const chartData = {
        labels: data?.map(item => item.priceRange).reverse(),
        datasets: [
          {
            label: 'Item Count',
            data: data?.map(item => item.itemCount).reverse(),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 50, 0.6)',
              // Add more colors if you have more data
            ],
          },
        ],
      };
      const options = {
        scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
      };
  return (
    <div>
      <Bar data={chartData} options={options}/>
    </div>
  )
}

export default BarChart;
