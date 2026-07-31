import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function ReplayCharts({ phase }) {

  const phaseData = {

    replay: [
      { name: "Signal", value: 90 },
      { name: "Escalation", value: 82 },
      { name: "Validation", value: 96 }
    ],

    concurrency: [
      { name: "Collision", value: 76 },
      { name: "Reconcile", value: 91 },
      { name: "Operators", value: 88 }
    ],

    corruption: [
      { name: "Packets", value: 60 },
      { name: "Recovery", value: 95 },
      { name: "Integrity", value: 85 }
    ],

    lineage: [
      { name: "Append", value: 98 },
      { name: "Ordering", value: 92 },
      { name: "Immutable", value: 99 }
    ],

    enforcement: [
      { name: "Governance", value: 88 },
      { name: "Visibility", value: 91 },
      { name: "Continuity", value: 84 }
    ],

    field: [
      { name: "Assignment", value: 75 },
      { name: "Acknowledgement", value: 68 },
      { name: "Escalation", value: 90 }
    ],

    stability: [
      { name: "Latency", value: 85 },
      { name: "Telemetry", value: 92 },
      { name: "Consistency", value: 96 }
    ],

    governance: [
      { name: "Replay UX", value: 97 },
      { name: "Visibility", value: 95 },
      { name: "Timeline", value: 93 }
    ],

    failure: [
      { name: "Warnings", value: 65 },
      { name: "Recovery", value: 82 },
      { name: "Corruption", value: 71 }
    ],

    final: [
      { name: "Replay", value: 100 },
      { name: "Recovery", value: 98 },
      { name: "Validation", value: 99 }
    ]

  };

  const data = phaseData[phase] || [];

  return (
    <div
      style={{
        marginTop: "20px",
        background: "#111827",
        padding: "20px",
        borderRadius: "12px",
        height: "350px"
      }}
    >
      <h2>
        {phase.toUpperCase()} — Replay Stability Metrics
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>
    </div>
  );
}