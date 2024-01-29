import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartDatasets } from "@/types/chart";

type TLineChart = {
  datasets: ChartDatasets[];
  labels: string[];
  chartTitle: string;
};

const LineChart = ({ datasets, labels, chartTitle }: TLineChart) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  const data = {
    labels,
    datasets: datasets,
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
