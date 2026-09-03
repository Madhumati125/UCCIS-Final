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

export default function Domains() {
  const [selected, setSelected] = useState(null);

  // ================= DOMAIN DATA =================
  const domains = [
    {
      id: "DOM-01",
      name: "API Layer",
      owner: "Platform Team",
      status: "Healthy",
      load: 65,
      services: 12,
      description: "Handles all external and internal API traffic.",
    },
    {
      id: "DOM-02",
      name: "Authentication",
      owner: "Security Team",
      status: "Warning",
      load: 82,
      services: 5,
      description: "Manages user login, tokens, and sessions.",
    },
    {
      id: "DOM-03",
      name: "Database",
      owner: "DB Ops",
      status: "Healthy",
      load: 55,
      services: 8,
      description: "Stores and manages all persistent data.",
    },
    {
      id: "DOM-04",
      name: "Telemetry",
      owner: "Observability Team",
      status: "Healthy",
      load: 40,
      services: 6,
      description: "Collects logs, metrics, and traces.",
    },
  ];

  // ================= KPI CARDS =================
  const stats = [
    { label: "Total Domains", value: domains.length },
    {
      label: "Healthy",
      value: domains.filter((d) => d.status === "Healthy").length,
    },
    {
      label: "Warning",
      value: domains.filter((d) => d.status === "Warning").length,
    },
    {
      label: "Avg Load",
      value:
        Math.round(
          domains.reduce((acc, d) => acc + d.load, 0) / domains.length
        ) + "%",
    },
  ];

  // ================= PIE CHART DATA =================
  const pieData = [
    { name: "Healthy", value: 3 },
    { name: "Warning", value: 1 },
  ];

  const COLORS = ["#22c55e", "#f59e0b"];

  // ================= BAR CHART DATA =================
  const barData = domains.map((d) => ({
    name: d.name,
    load: d.load,
  }));

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Domain Overview</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.label}</h3>
            <h1>{s.value}</h1>
          </div>
        ))}
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="grid">

        {/* ================= DOMAIN LIST ================= */}
        <div className="card">
          <h3>System Domains</h3>

          {domains.map((d) => (
            <div
              key={d.id}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(d)}
            >
              <div><b>{d.name}</b></div>
              <div>Owner: {d.owner}</div>
              <div>Status: {d.status}</div>
              <div>Load: {d.load}%</div>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Domain Health Distribution</h3>

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
                    fill={COLORS[index % COLORS.length]}
                  />
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
        <h3>Domain Load Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis
  dataKey="name"
  label={{
    value: "Domain",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Load",
    angle: -90,
    position: "insideLeft",
  }}
/>
            <Tooltip />
            <Legend />
            <Bar dataKey="load" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= DETAILS PANEL ================= */}
      {selected && (
        <div className="card">
          <h3>Domain Details</h3>

          <p><b>ID:</b> {selected.id}</p>
          <p><b>Name:</b> {selected.name}</p>
          <p><b>Owner:</b> {selected.owner}</p>
          <p><b>Status:</b> {selected.status}</p>
          <p><b>Load:</b> {selected.load}%</p>
          <p><b>Services:</b> {selected.services}</p>
          <p><b>Description:</b> {selected.description}</p>

          <button onClick={() => setSelected(null)}>
            Close
          </button>
        </div>
      )}

      {/* ================= BACKEND RESPONSE ================= */}
      {/* <div className="card">
        <h3>Domains Backend Response</h3>

        <pre>
{JSON.stringify(domains, null, 2)}
        </pre>
      </div> */}

    </div>
  );
}