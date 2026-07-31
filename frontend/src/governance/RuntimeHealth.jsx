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

export default function RuntimeHealth() {
  const [selected, setSelected] = useState(null);

  // ================= RUNTIME COMPONENTS =================
  const services = [
    {
      id: "RT-01",
      service: "API Gateway",
      cpu: "65%",
      memory: "70%",
      status: "Healthy",
      description: "Handles all incoming API traffic and routing.",
    },
    {
      id: "RT-02",
      service: "Auth Service",
      cpu: "80%",
      memory: "60%",
      status: "Warning",
      description: "Authentication service with elevated load.",
    },
    {
      id: "RT-03",
      service: "Database Cluster",
      cpu: "55%",
      memory: "75%",
      status: "Healthy",
      description: "Primary data storage layer.",
    },
  ];

  // ================= KPI CARDS =================
  const stats = [
    { label: "Services Running", value: services.length },
    { label: "Healthy", value: 2 },
    { label: "Warning", value: 1 },
    { label: "Avg CPU Load", value: "66%" },
  ];

  // ================= PIE CHART DATA =================
  const pieData = [
    { name: "Healthy", value: 2 },
    { name: "Warning", value: 1 },
  ];

  const COLORS = ["#22c55e", "#f59e0b"];

  // ================= BAR CHART DATA =================
  const barData = services.map((s) => ({
    name: s.service,
    cpu: parseInt(s.cpu),
    memory: parseInt(s.memory),
  }));

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Runtime Health Dashboard</h2>

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

        {/* ================= SERVICE LIST ================= */}
        <div className="card">
          <h3>Runtime Services</h3>

          {services.map((s) => (
            <div
              key={s.id}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(s)}
            >
              <div><b>{s.service}</b></div>
              <div>CPU: {s.cpu}</div>
              <div>Memory: {s.memory}</div>
              <div>Status: {s.status}</div>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>System Health Distribution</h3>

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
        <h3>CPU & Memory Usage</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cpu" fill="#3b82f6" />
            <Bar dataKey="memory" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= DETAILS PANEL ================= */}
      {selected && (
        <div className="card">
          <h3>Service Details</h3>

          <p><b>Service:</b> {selected.service}</p>
          <p><b>CPU:</b> {selected.cpu}</p>
          <p><b>Memory:</b> {selected.memory}</p>
          <p><b>Status:</b> {selected.status}</p>
          <p><b>Description:</b> {selected.description}</p>

          <button onClick={() => setSelected(null)}>
            Close
          </button>
        </div>
      )}

      {/* ================= BACKEND RESPONSE ================= */}
      <div className="card">
        <h3>Runtime Backend Response</h3>

        <pre>
{JSON.stringify(services, null, 2)}
        </pre>
      </div>

    </div>
  );
}