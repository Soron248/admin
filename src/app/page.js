"use client";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function Home() {
  const [area, setArea] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["Unfrozen", "Frozen", "Completed", "Emails"],
      },
    },
    series: [
      {
        name: "Log-Status",
        data: [0, 40, 35, 50],
      },
    ],
  });
  const [pie, setPie] = useState({
    series: [10, 40, 35, 50],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            // chart: {
            //   width: 200,
            // },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  const [rad, setRad] = useState({
    series: [80, 60, 47, 10],
    options: {
      // chart: {
      //   height: 350,
      //   type: "radialBar",
      // },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 365;
              },
            },
          },
        },
      },
      labels: ["Emails", "Completed", "Frozen", "Unforzen"],
    },
  });

  const [pol, setPol] = useState({
    series: [14, 23, 21, 17],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <section>
      <div className="overflow-x-auto">
        <div className="chart flex gap-2">
          <Chart
            options={area.options}
            series={area.series}
            type="area"
            width={340}
            height={250}
          />
          <Chart
            options={pie.options}
            series={pie.series}
            type="donut"
            width={340}
            height={250}
          />
          <Chart
            options={rad.options}
            series={rad.series}
            type="radialBar"
            width={340}
            height={250}
          />
          <Chart
            options={pol.options}
            series={pol.series}
            type="polarArea"
            width={340}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
