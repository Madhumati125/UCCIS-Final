import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function RuntimeHealthChart() {

  const data = [
    {
      service: "Signals",
      health: 98
    },
    {
      service: "Incidents",
      health: 96
    },
    {
      service: "Escalations",
      health: 94
    },
    {
      service: "Replay",
      health: 99
    },
    {
      service: "Evidence",
      health: 97
    },
    {
      service: "Analytics",
      health: 95
    }
  ];

  return (
    <div className="card">
      <h3>Runtime Health</h3>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="service" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Bar
            dataKey="health"
            fill="#22c55e"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}