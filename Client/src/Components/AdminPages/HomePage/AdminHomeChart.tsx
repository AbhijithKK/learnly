import { BarChart } from "@mui/x-charts/BarChart";

export default function AdminChart() {
  return (
    <BarChart
      series={[
        // { data: [] },
        { data: [5100, 6845, 4956, 0, 5584, 4454, 0, 0, 4580, 0, 4545, 5888] },
        // { data: [] },
      ]}
      height={400}
      xAxis={[
        {
          data: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JULY",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
          scaleType: "band",
        },
      ]}
      margin={{ top: 50, bottom: 30, left: 60, right: 30 }}
    />
  );
}
