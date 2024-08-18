import { CChart } from "@coreui/react-chartjs";
import React from "react";

export const BarChart = () => {
  return (
    <CChart
      className="p-3  col-12 col-lg-6 chart_bg"
      type="line" //نوع چارت
      data={{
        labels: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ], //X محور
        datasets: [
          {
            label: "فروش ماه",
            backgroundColor: "rgba(220, 220, 220)",
            borderColor: "rgb(135, 51, 232)",
            pointBackgroundColor: "rgb(220, 220, 220)",
            pointBorderColor: "blue",
            data: [40, 20, 39, 10, 40, 39, 80, 40, 100, 70, 90, 70],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "black",
              font:{
                size:25
              }
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgb(151, 187, 205)",
            },
            ticks: {
              font:{
                size:18
              },
              color: "black",
            },
          },
          y: {
            grid: {
              color: "rgb(151, 187, 205)",
            },
            ticks: {
              font:{
                size:16
              },
              color: "black",
            },
          },
        },
      }}
    />
  );
};
