import React from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

const BarChart = ({data,selectedOption}) => {
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
            barThickness:50
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
    // <div className='d-flex justify-content-center'>
    <div className='col-6 offset-3 text-center'>
      <p style={{fontWeight:"bold",fontSize:"26px",color:"red"}}>Bar Chart Stats-{selectedOption}</p>
      <Bar  data={chartData} options={options} />
      </div>
    // </div>
  )
}

export default BarChart;
