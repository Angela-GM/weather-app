import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Bar } from "react-chartjs-2";
import { RainData } from "../../interfaces/weatherInterfaces";
import { useMemo } from "react";
import { getMonthName } from "../../shared/getMonthName";
interface BarChartProps {
  climateForCity?: RainData[];
}

function BarChart({ climateForCity }: BarChartProps) {
  const data = useMemo(() => {
    const labels = climateForCity?.map((entry) => getMonthName(entry.month));
    const rainDays = climateForCity?.map((entry) =>
      parseFloat(entry.rain_days)
    );
    const rainFall = climateForCity?.map((entry) =>
      parseFloat(entry.rain_fall)
    );

    return {
      datasets: [
        {
          label: "Rain Days",
          data: rainDays,
          borderColor: "rgb(75, 122, 192)",
          backgroundColor: "#c7785b",
        },
        {
          label: "Rain Fall",
          data: rainFall,
          backgroundColor: "#103778",
        },
      ],
      labels,
      color: "black",
    };
  }, [climateForCity]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "start" as const,
        labels: {
          color: "black",
          boxWidth: 20,
          padding: 15,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black'
        }
      },
      y: {
        ticks: {
          color: 'black' 
        }
      }
    }
   };
  return <Bar  data={data} options={options} />;
}

export default BarChart;
