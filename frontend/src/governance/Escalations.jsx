import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function Escalations() {
  // ================= ESCALATIONS DATA =================
  const escalations = [
    {
      id: "ESC-01",
      level: "L1",
      owner: "Team A",
      status: "Active",
      priority: "High",
      reason: "API latency threshold breached",
      createdAt: "2026-06-24 10:12:05",
    },
    {
      id: "ESC-02",
      level: "L2",
      owner: "Team B",
      status: "Resolved",
      priority: "Critical",
      reason: "Database optimization required",
      createdAt: "2026-06-23 18:44:12",
    },
    {
      id: "ESC-03",
      level: "L3",
      owner: "Platform Team",
      status: "Acknowledged",
      priority: "Critical",
      reason: "Auth service cascading failure",
      createdAt: "2026-06-24 09:05:33",
    },
    {
      id: "ESC-04",
      level: "L1",
      owner: "Team C",
      status: "Pending",
      priority: "Medium",
      reason: "Telemetry anomaly detected",
      createdAt: "2026-06-24 11:20:10",
    },
    {
      id: "ESC-05",
      level: "L2",
      owner: "Security Team",
      status: "In Review",
      priority: "High",
      reason: "Suspicious traffic spike",
      createdAt: "2026-06-24 08:41:22",
    },
    {
      id: "ESC-06",
      level: "L1",
      owner: "DB Ops",
      status: "Reassigned",
      priority: "Critical",
      reason: "DB lock contention escalation",
      createdAt: "2026-06-23 21:10:44",
    },
  ];

  // ================= PIE CHART (STATUS DISTRIBUTION) =================
  const pieData = [
    { name: "Active", value: 1 },
    { name: "Resolved", value: 1 },
    { name: "Pending", value: 1 },
    { name: "Acknowledged", value: 1 },
    { name: "In Review", value: 1 },
    { name: "Reassigned", value: 1 },
  ];

  const pieColors = [
    "#ef4444",
    "#22c55e",
    "#f59e0b",
    "#3b82f6",
    "#a855f7",
    "#14b8a6",
  ];

  // ================= BAR CHART (LEVEL DISTRIBUTION) =================
  const barData = [
    { name: "L1", value: 3 },
    { name: "L2", value: 2 },
    { name: "L3", value: 1 },
  ];

  const barColors = ["#3b82f6", "#f59e0b", "#ef4444"];

  // ================= BACKEND RESPONSE =================
  const backendResponse = escalations;

  // ================= KPIs =================
  const stats = [
    { label: "Total", value: escalations.length },
    {
      label: "Active",
      value: escalations.filter((e) => e.status === "Active").length,
    },
    {
      label: "Resolved",
      value: escalations.filter((e) => e.status === "Resolved").length,
    },
    {
      label: "Pending",
      value: escalations.filter((e) => e.status === "Pending").length,
    },
  ];

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Escalations</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.label}</h3>
            <h1>{s.value}</h1>
          </div>
        ))}
      </div>

      <div className="grid">

        {/* ================= LIST ================= */}
        <div className="card">
          <h3>Escalation List</h3>

          {escalations.map((e) => (
            <div key={e.id} className="card">
              <b>{e.id}</b>
              <p>Level: {e.level}</p>
              <p>Owner: {e.owner}</p>
              <p>Status: {e.status}</p>
              <p>Priority: {e.priority}</p>
              <p>Reason: {e.reason}</p>
              <p>Created: {e.createdAt}</p>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Escalation Status Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={pieColors[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ================= BAR CHART ================= */}
      <div className="card">
        <h3>Escalation Level Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis
  dataKey="name"
  label={{
    value: "Escalation Level",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Escalation Count",
    angle: -90,
    position: "insideLeft",
  }}
/>
            <Tooltip />

            <Bar dataKey="value">
              {barData.map((_, index) => (
                <Cell key={index} fill={barColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= BACKEND RESPONSE ================= */}
      {/* <div className="card">
        <h3>Backend Response</h3>

        <pre>
          {JSON.stringify(backendResponse, null, 2)}
        </pre>
      </div> */}

    </div>
  );
}