import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function IncidentChart() {

  const data = [
    {
      name: "Critical",
      value: 20
    },
    {
      name: "High",
      value: 40
    },
    {
      name: "Medium",
      value: 25
    },
    {
      name: "Low",
      value: 15
    }
  ];

  return (
    <div className="chart-card">

      <h2>
        Incident Severity
      </h2>

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