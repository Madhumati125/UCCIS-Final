import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function
RecoveryLineChart() {

  const data = [
    {
      recovery: "R1",
      continuity: 40
    },

    {
      recovery: "R2",
      continuity: 60
    },

    {
      recovery: "R3",
      continuity: 80
    },

    {
      recovery: "R4",
      continuity: 100
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={220}
    >
      <LineChart data={data}>

        <XAxis dataKey="recovery" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="continuity"
          stroke="#22c55e"
        />

      </LineChart>
    </ResponsiveContainer>
  );
}