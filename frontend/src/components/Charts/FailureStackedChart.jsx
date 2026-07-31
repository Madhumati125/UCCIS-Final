import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function
FailureStackedChart() {

  const data = [
    {
      time: "T1",
      failures: 4,
      recovered: 2
    },

    {
      time: "T2",
      failures: 8,
      recovered: 6
    },

    {
      time: "T3",
      failures: 12,
      recovered: 10
    },

    {
      time: "T4",
      failures: 6,
      recovered: 5
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={220}
    >
      <AreaChart data={data}>

        <XAxis dataKey="time" />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="failures"
          stackId="1"
          stroke="#ef4444"
          fill="#ef4444"
        />

        <Area
          type="monotone"
          dataKey="recovered"
          stackId="1"
          stroke="#22c55e"
          fill="#22c55e"
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}