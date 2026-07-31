import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function
ReplayScatterChart() {

  const data = [
    {
      x: 10,
      y: 30
    },

    {
      x: 20,
      y: 45
    },

    {
      x: 30,
      y: 60
    },

    {
      x: 40,
      y: 80
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={220}
    >
      <ScatterChart>

        <XAxis dataKey="x" />

        <YAxis dataKey="y" />

        <Tooltip />

        <Scatter
          data={data}
          fill="#22c55e"
        />

      </ScatterChart>
    </ResponsiveContainer>
  );
}