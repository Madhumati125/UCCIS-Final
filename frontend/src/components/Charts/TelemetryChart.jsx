import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";

const data = [
  { name: "Received", value: 10 },
  { name: "Processed", value: 6 },
  { name: "Failed", value: 2 }
];

const TelemetryChart = () => {

  const TELEMETRY_COLORS = [
    "#2563eb", // Received - Blue
    "#16a34a", // Processed - Green
    "#dc2626"  // Failed - Red
  ];

  return (
    <div className="card">

      <h2>Telemetry Status</h2>

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
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  TELEMETRY_COLORS[
                    index % TELEMETRY_COLORS.length
                  ]
                }
              />
            ))}

          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            iconType="circle"
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TelemetryChart;