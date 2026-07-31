import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ReplayLineChart() {

  const data = [
    { name: "P1", replay: 12 },
    { name: "P2", replay: 20 },
    { name: "P3", replay: 28 },
    { name: "P4", replay: 35 },
    { name: "P5", replay: 40 },
    { name: "P6", replay: 55 },
    { name: "P7", replay: 72 }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={200}
    >
      <LineChart data={data}>
        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="replay"
          stroke="#38bdf8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}