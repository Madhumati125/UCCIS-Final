import React, { useState } from "react";
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

export default function Incidents() {
  const [selected, setSelected] = useState(null);

  // ================= INCIDENT DATA =================
  const incidents = [
    {
      id: "INC-1001",
      title: "API Latency Spike",
      priority: "High",
      status: "Open",
      description:
        "Increased response time detected in payment API gateway.",
      owner: "Team A",
    },
    {
      id: "INC-1002",
      title: "DB Connection Failure",
      priority: "Critical",
      status: "Closed",
      description: "Database connection pool exhausted.",
      owner: "DB Ops",
    },
    {
      id: "INC-1003",
      title: "Auth Service Delay",
      priority: "Medium",
      status: "Investigating",
      description: "Login service experiencing intermittent delays.",
      owner: "Security Team",
    },
  ];

  // ================= PIE CHART (STATUS) =================
  const pieData = [
    { name: "Open", value: 1 },
    { name: "Closed", value: 1 },
    { name: "Investigating", value: 1 },
  ];

  const pieColors = ["#3b82f6", "#ef4444", "#f59e0b"];

  // ================= BAR CHART (PRIORITY - DIFFERENT DATA) =================
  const barData = [
    { name: "High", value: 2 },
    { name: "Critical", value: 1 },
    { name: "Medium", value: 3 },
  ];

  const barColors = ["#ef4444", "#a855f7", "#f59e0b"];

  // ================= KPI CARDS =================
  const stats = [
    { label: "Total", value: incidents.length },
    {
      label: "Open",
      value: incidents.filter((i) => i.status === "Open").length,
    },
    {
      label: "Critical",
      value: incidents.filter((i) => i.priority === "Critical").length,
    },
    { label: "Investigating", value: 1 },
  ];

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Incidents</h2>

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

        {/* ================= INCIDENT LIST ================= */}
        <div className="card">
          <h3>Incident List</h3>

          {incidents.map((i) => (
            <div
              key={i.id}
              className="card"
              onClick={() => setSelected(i)}
              style={{ cursor: "pointer" }}
            >
              <b>{i.id}</b>
              <p>{i.title}</p>
              <p>Priority: {i.priority}</p>
              <p>Status: {i.status}</p>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Incident Status Distribution (Pie)</h3>

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
                  <Cell
                    key={index}
                    fill={pieColors[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ================= BAR CHART (DIFFERENT DATA + COLORS) ================= */}
      <div className="card">
        <h3>Incident Priority Distribution (Bar)</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="value">
              {barData.map((_, index) => (
                <Cell
                  key={index}
                  fill={barColors[index]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= DETAILS PANEL ================= */}
      {selected && (
        <div className="card">
          <h3>Incident Details</h3>

          <p><b>ID:</b> {selected.id}</p>
          <p><b>Title:</b> {selected.title}</p>
          <p><b>Priority:</b> {selected.priority}</p>
          <p><b>Status:</b> {selected.status}</p>
          <p><b>Owner:</b> {selected.owner}</p>
          <p><b>Description:</b> {selected.description}</p>

          <button onClick={() => setSelected(null)}>
            Close
          </button>
        </div>
      )}

      {/* ================= BACKEND RESPONSE ================= */}
      <div className="card">
        <h3>Backend Response</h3>

        <pre>{JSON.stringify(incidents, null, 2)}</pre>
      </div>

    </div>
  );
}