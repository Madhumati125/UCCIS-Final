import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function PieChartCard() {

  const data = [
    { name: "Critical", value: 20 },
    { name: "High", value: 35 },
    { name: "Medium", value: 25 },
    { name: "Low", value: 20 }
  ];

  return (
    <div className="chart-card">

      <h3>
        Incident Severity
      </h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}