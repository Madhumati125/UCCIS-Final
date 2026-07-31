import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList
} from "recharts";

export default function RuntimeChart({ data = [] }) {
  const chartData =
    data.length > 0
      ? data
      : [
          {
            module: "backend",
            count: 8,
          },
          {
            module: "telemetry",
            count: 6,
          },
        ];

  return (
    <div
      style={{
        background: "#141b2d",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        📊 Logs by Module
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="module"
            tick={{
              fill: "#9CA3AF",
              fontSize: 15,
            }}
            tickLine={false}
            axisLine={{
              stroke: "#4B5563",
            }}
          />

          <YAxis
            tick={{
              fill: "#9CA3AF",
              fontSize: 15,
            }}
            tickLine={false}
            axisLine={{
              stroke: "#4B5563",
            }}
          />

          <Tooltip
            cursor={{
              fill: "rgba(255,255,255,0.05)",
            }}
            contentStyle={{
              background: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="count"
            barSize={140}
            radius={[0, 0, 0, 0]}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill="#5B9DFF"
              />
            ))}

            <LabelList
              dataKey="count"
              position="top"
              fill="#A5B4FC"
              fontSize={16}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}