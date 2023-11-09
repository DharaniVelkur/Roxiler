import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';

ChartJS.register(ArcElement,Tooltip,Legend)

const Piechart = ({data}) => {
    const chartData = {
        labels: data?.map(item => Object.keys(item)[0]), // Extract labels from the keys
        datasets: [
          {
            data: data?.map(item => Object.values(item)[0]), // Extract values
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 50, 0.6)',

            ],
          },
        ],
    };
  return (
    <>
    <div style={{padding:"20px",width:"50%"}}>
    <Pie data={chartData}/>
    </div>
    </>

  )
}

export default Piechart