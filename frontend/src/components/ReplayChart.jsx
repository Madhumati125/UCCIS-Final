import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#a855f7",
  "#14b8a6",
  "#f97316",
];

export default function ReplayChart({ data = [] }) {
  // Make sure data is always an array
  const safeData = Array.isArray(data) ? data : [];

  // Fallback data when backend returns empty data
  const chartData =
    safeData.length > 0
      ? safeData
          .map((item, index) => ({
            module:
              item.module ||
              item.name ||
              item.signal ||
              `Module ${index + 1}`,

            count:
              Number(item.count) ||
              Number(item.value) ||
              Number(item.total) ||
              0,
          }))
          .filter((item) => item.count > 0)
      : [
          {
            module: "Telemetry",
            count: 35,
          },
          {
            module: "Incidents",
            count: 25,
          },
          {
            module: "Escalation",
            count: 20,
          },
          {
            module: "Replay",
            count: 15,
          },
          {
            module: "Analytics",
            count: 10,
          },
        ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "420px",
        background: "#111827",
        borderRadius: "12px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* TITLE */}

      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#ffffff",
          fontSize: "24px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        📊 Event Replay Distribution
      </h2>

      {/* CHART */}

      <div
        style={{
          width: "100%",
          height: "340px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="module"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={0}
              paddingAngle={2}
              label={({ module, count }) =>
                `${module}: ${count}`
              }
              labelLine={true}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#111827"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#ffffff",
              }}
              itemStyle={{
                color: "#ffffff",
              }}
              formatter={(value, name) => [
                value,
                name,
              ]}
            />

            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}