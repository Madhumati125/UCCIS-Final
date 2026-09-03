import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { severity: "LOW", count: 5 },
  { severity: "MEDIUM", count: 8 },
  { severity: "HIGH", count: 12 },
  { severity: "CRITICAL", count: 3 }
];

const IncidentChart = () => {

  const SEVERITY_COLORS = [
    "#16a34a", // LOW - Green
    "#eab308", // MEDIUM - Yellow
    "#f97316", // HIGH - Orange
    "#dc2626"  // CRITICAL - Red
  ];

  return (
    <div className="card">

      <h2>Incident Severity</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>

          <XAxis
            dataKey="severity"
            label={{
              value: "Severity Level",
              position: "insideBottom",
              offset: -5
            }}
          />

          <YAxis
            label={{
              value: "Number of Incidents",
              angle: -90,
              position: "insideLeft"
            }}
          />

          <Tooltip />

          <Bar dataKey="count">

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  SEVERITY_COLORS[
                    index % SEVERITY_COLORS.length
                  ]
                }
              />
            ))}

          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default IncidentChart;