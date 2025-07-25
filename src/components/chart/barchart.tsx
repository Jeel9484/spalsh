"use client";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import type { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: { type: "bar", toolbar: { show: false } },
  plotOptions: { bar: { borderRadius: 4, columnWidth: "20%" } },
  dataLabels: { enabled: false },
  colors: ["#FFC300"],
  xaxis: {
    categories: [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#757575", fontSize: "12px" } },
  },
  yaxis: { labels: { style: { colors: "#757575", fontSize: "12px" } } },
  grid: { show: false }
};
const series = [
  { name: "Value", data: [400, 750, 600, 550, 350, 900, 870, 400, 880, 770, 950, 1000] }
];

export default function Barchart() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">Analytics A</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={220}
        />
      </CardContent>
    </Card>
  );
}
