import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Received", value: 10 },
  { name: "Processed", value: 6 },
  { name: "Failed", value: 2 }
];

const TelemetryChart = () => {
  return (
    <div className="card">

      <h2>Telemetry Status</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TelemetryChart;