import { colors } from '@mui/material';
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);
export const BarChart = ({ data }) => {



  const chartData = {
    labels: data.map(label => label.labels),
    datasets: [{
      label: 'Cantidad de Posteos por Usuario',
      data: data.map(label => label.data),
      backgroundColor: colors.blue[500],
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
    }]
  };

  return <Bar data={chartData} />;
};