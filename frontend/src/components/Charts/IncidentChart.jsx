import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { severity: "LOW", count: 5 },
  { severity: "MEDIUM", count: 8 },
  { severity: "HIGH", count: 12 },
  { severity: "CRITICAL", count: 3 }
];

const IncidentChart = () => {
  return (
    <div className="card">

      <h2>Incident Severity</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="severity" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default IncidentChart;