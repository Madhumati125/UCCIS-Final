import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function BarChartCard() {

  const data = [
    { name: "Signals", value: 120 },
    { name: "Events", value: 95 },
    { name: "Incidents", value: 60 },
    { name: "Escalations", value: 40 },
    { name: "Replays", value: 25 }
  ];

  return (
    <div className="chart-card">
      <h3>Runtime Activity</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}