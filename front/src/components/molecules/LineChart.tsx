import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";
import { useMemo } from "react";
import { ClimateData } from "../..";
import { getMonthName } from "../../shared/getMonthName";

interface LineChartProps {
  climateForCity?: ClimateData[];
}

function LineChart({ climateForCity }: LineChartProps) {
  const data = useMemo(() => {
    const labels = climateForCity?.map((entry) => getMonthName(entry.month));
    const minTempData = climateForCity?.map((entry) =>
      parseFloat(entry.min_temp)
    );
    const maxTempData = climateForCity?.map((entry) =>
      parseFloat(entry.max_temp)
    );

    return {
      datasets: [
        {
          label: "Min Temp",
          data: minTempData,
          borderColor: "rgb(75, 139, 192)",
          backgroundColor: "rgba(122, 124, 235, 0.2)",
        },
        {
          label: "Max Temp",
          data: maxTempData,
          borderColor: "rgb(235, 64, 58)",
          backgroundColor: "rgba(253, 88, 123, 0.2)",
        },
      ],
      labels,
    };
  }, [climateForCity]);

  const options = {
    responsive: true,
    align: "center",
    scales: {
      x: {
        type: "category" as const,
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
