import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

export default function HomeDashboard({
  onOpenOperationalDashboard
}) {

  const phaseData = [
    { phase: "P1", value: 90 },
    { phase: "P2", value: 85 },
    { phase: "P3", value: 75 },
    { phase: "P4", value: 95 },
    { phase: "P5", value: 88 },
    { phase: "P6", value: 82 },
    { phase: "P7", value: 91 },
    { phase: "P8", value: 96 },
    { phase: "P9", value: 84 },
    { phase: "P10", value: 100 }
  ];

  const replayData = [
    { name: "Replay", value: 35 },
    { name: "Recovery", value: 25 },
    { name: "Observability", value: 20 },
    { name: "Governance", value: 20 }
  ];

  const activityData = [
    { subject: "Replay", value: 95 },
    { subject: "Recovery", value: 88 },
    { subject: "Observability", value: 92 },
    { subject: "Governance", value: 85 },
    { subject: "Integrity", value: 98 },
    { subject: "Concurrency", value: 90 }
  ];

  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid #334155"
        }}
      >

        <h1
          style={{
            fontSize: "38px",
            marginBottom: "15px"
          }}
        >
          UCCIS Replay Reconstruction Platform
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.9",
            maxWidth: "1000px"
          }}
        >
          Distributed replay-safe operational continuity platform
          demonstrating replay reconstruction,
          concurrent operator simulation,
          corruption recovery,
          append-only lineage validation,
          governance-safe replay UX,
          distributed observability,
          and deterministic operational replay validation.
        </p>

        {/* =====================================================
            OPEN OPERATIONAL DASHBOARD
        ===================================================== */}

        <button
          type="button"
          onClick={onOpenOperationalDashboard}
          style={{
            marginTop: "25px",
            padding: "14px 28px",
            background: "#2563eb",
            border: "none",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Open Operational Dashboard
        </button>

      </div>

      {/* =====================================================
          SUMMARY CARDS
      ===================================================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2>10</h2>
          <p>Operational Phases</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2>100%</h2>
          <p>Replay Validation</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2>Deterministic</h2>
          <p>Replay Continuity</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2>Stable</h2>
          <p>Distributed Observability</p>
        </div>

      </div>

      {/* =====================================================
          CHARTS ROW
      ===================================================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        {/* ===================================================
            OVERALL PHASE STABILITY
        =================================================== */}

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px",
            height: "400px"
          }}
        >

          <h2>Overall Phase Stability</h2>

          <ResponsiveContainer
            width="100%"
            height="90%"
          >

            <BarChart data={phaseData}>

              <XAxis
                dataKey="phase"
                stroke="#cbd5e1"
                label={{
                  value: "Operational Phase",
                  position: "insideBottom",
                  offset: -5,
                  fill: "#cbd5e1"
                }}
              />

              <YAxis
                stroke="#cbd5e1"
                label={{
                  value: "Stability Score",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#cbd5e1"
                }}
              />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#2563eb"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* ===================================================
            REPLAY DISTRIBUTION
        =================================================== */}

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px",
            height: "400px"
          }}
        >

          <h2>Replay Distribution</h2>

          <ResponsiveContainer
            width="100%"
            height="90%"
          >

            <PieChart>

              <Pie
                data={replayData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >

                {replayData.map((entry, index) => (

                  <Cell
                    key={`replay-cell-${index}`}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* =====================================================
          DISTRIBUTED REPLAY ACTIVITY
      ===================================================== */}

      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "20px",
          borderRadius: "12px",
          height: "500px"
        }}
      >

        <h2>Distributed Replay Activity</h2>

        <ResponsiveContainer
          width="100%"
          height="90%"
        >

          <PieChart>

            <Pie
              data={activityData}
              dataKey="value"
              nameKey="subject"
              innerRadius={90}
              outerRadius={160}
              paddingAngle={5}
              label
            >

              {activityData.map((entry, index) => (

                <Cell
                  key={`activity-cell-${index}`}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* =====================================================
          PROJECT CAPABILITIES
      ===================================================== */}

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "12px",
          lineHeight: "2"
        }}
      >

        <h2>Project Capabilities</h2>

        ✔ Replay Reconstruction
        <br />

        ✔ Concurrent Operator Simulation
        <br />

        ✔ Replay Corruption Recovery
        <br />

        ✔ Immutable Append-only Lineage
        <br />

        ✔ Enforcement-linked Continuity
        <br />

        ✔ Field Acknowledgement Replay
        <br />

        ✔ Distributed Observability Stability
        <br />

        ✔ Governance-safe Replay UX
        <br />

        ✔ Failure Visibility Layer
        <br />

        ✔ Deterministic Operational Replay Validation

      </div>

    </div>
  );
}