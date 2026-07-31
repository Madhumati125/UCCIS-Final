import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

function RuntimeMetricsChart({ summary }) {

  const data = [
    {
      name: "Signals",
      value: summary?.signals || 0,
      color: "#3b82f6"
    },
    {
      name: "Telemetry",
      value: summary?.telemetry || 0,
      color: "#22c55e"
    },
    {
      name: "Incidents",
      value: summary?.incidents || 0,
      color: "#ef4444"
    },
    {
      name: "Escalations",
      value: summary?.escalations || 0,
      color: "#f59e0b"
    },
    {
    name: "Replay",
    value: summary?.replayEvents || summary?.replay || 0,
    color: "#a855f7"
  },
    {
      name: "Evidence",
      value: summary?.evidence || 0,
      color: "#14b8a6"
    }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>

      <BarChart data={data}>

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="value">

          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
            />
          ))}

        </Bar>

      </BarChart>

    </ResponsiveContainer>
  );
}

export default RuntimeMetricsChart;