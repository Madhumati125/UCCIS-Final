import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SignalTypeChart() {

  const data = [
    { name: "Fire", value: 40 },
    { name: "Flood", value: 25 },
    { name: "Cyber", value: 20 },
    { name: "Medical", value: 35 }
  ];

  return (
    <div className="chart-card">

      <h2>Signal Types</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}