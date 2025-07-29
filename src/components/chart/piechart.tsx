"use client";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: { type: "radialBar", offsetY: 0, sparkline: { enabled: true } },
  plotOptions: {
    radialBar: {
      hollow: { size: "70%" },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: "24px",
          fontWeight: 700,
          color: "#444",
          offsetY: 10,
          show: true,
          formatter: () => "25%",
        },
      },
      track: { background: "#f3f4f6", strokeWidth: "100%" },
    }
  },
  fill: { colors: ["#FFC300"] },
  stroke: { lineCap: "round" },
  labels: ["Progress"],
};
const series = [25];

export default function Piechart() {
  return (
    <Card className="w-full h-full grid place-items-center justify-center shadow-custom2">
      <CardHeader className="w-full">
        <CardTitle className="text-base font-medium px-5 pt-3.5">Analytics B</CardTitle>
      </CardHeader>
      <CardContent className="grid place-items-center mt-15">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={180}
          width={180}
        />
      </CardContent>
    </Card>
  );
}
