import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SignalStatusChart() {

  const data = [
    {
      name: "Active",
      value: 65
    },
    {
      name: "Resolved",
      value: 37
    },
    {
      name: "Critical",
      value: 18
    }
  ];

  return (
    <div className="chart-card">

      <h2>Signal Status</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}