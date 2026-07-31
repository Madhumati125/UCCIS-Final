import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function LifecycleBarChart() {

  const data = [
    {
      phase: "Signal",
      value: 100
    },

    {
      phase: "Governance",
      value: 92
    },

    {
      phase: "Enforcement",
      value: 87
    },

    {
      phase: "Replay",
      value: 95
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={200}
    >
      <BarChart data={data}>

        <XAxis dataKey="phase" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="value"
          fill="#22c55e"
        />

      </BarChart>
    </ResponsiveContainer>
  );
}