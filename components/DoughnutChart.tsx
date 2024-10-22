"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label: 'Bank',
                data: [20021, 25001, 37501],
                backgroundColor:['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ["Eqiuty", "I&M Bank", "Stanbic"]
    }
  return <Doughnut data={data}
  options={{
    cutout: '60%',
    plugins: {
        legend:{
            display: false
        }
    }
  }}
  />
}

export default DoughnutChart
