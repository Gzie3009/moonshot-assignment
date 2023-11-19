"use client";
import React from "react";
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
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        onPanStart({ chart, point }: any) {
          const area = chart.chartArea;
          const w25 = area.width * 0.25;
          const h25 = area.height * 0.25;
          if (
            point.x < area.left + w25 ||
            point.x > area.right - w25 ||
            point.y < area.top + h25 ||
            point.y > area.bottom - h25
          ) {
            return false; // abort
          }
        },
        mode: "xy",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 400, 500, 200, 500, 100, 200, 400, 500, 200, 500, 100],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [400, 600, 200, 100, 500, 200, 400, 500, 200, 500, 100, 200, 600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function LineChartComponent() {
  //@ts-expect-error
  return <Line className="h-[50vh] lg:h-full" options={options} data={data} />;
}
