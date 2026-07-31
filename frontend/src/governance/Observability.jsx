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

export default function Observability() {
  // ================= OBSERVABILITY DATA =================
  const services = [
    {
      name: "API Gateway",
      status: "Healthy",
      latency: 120,
      errorRate: 1.2,
      uptime: 99.9,
    },
    {
      name: "Auth Service",
      status: "Degraded",
      latency: 340,
      errorRate: 4.8,
      uptime: 98.2,
    },
    {
      name: "Database Cluster",
      status: "Critical",
      latency: 820,
      errorRate: 9.5,
      uptime: 95.1,
    },
    {
      name: "Cache Layer",
      status: "Healthy",
      latency: 60,
      errorRate: 0.5,
      uptime: 99.99,
    },
    {
      name: "Payment Service",
      status: "Degraded",
      latency: 410,
      errorRate: 3.9,
      uptime: 97.6,
    },
    {
      name: "Telemetry Engine",
      status: "Healthy",
      latency: 90,
      errorRate: 0.8,
      uptime: 99.7,
    },
  ];

  // ================= PIE CHART (SYSTEM HEALTH DISTRIBUTION) =================
  const pieData = [
    { name: "Healthy", value: 3 },
    { name: "Degraded", value: 2 },
    { name: "Critical", value: 1 },
  ];

  const pieColors = ["#22c55e", "#f59e0b", "#ef4444"];

  // ================= BAR CHART (REALISTIC LATENCY BUCKETS) =================
  const barData = [
    { name: "Low Latency", value: 2 },
    { name: "Medium Latency", value: 3 },
    { name: "High Latency", value: 1 },
  ];

  const barColors = ["#22c55e", "#f59e0b", "#ef4444"];

  // ================= BACKEND RESPONSE =================
  const backendResponse = services;

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Observability Dashboard</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        <div className="card"><h3>Total Services</h3><h1>6</h1></div>
        <div className="card"><h3>Healthy</h3><h1>3</h1></div>
        <div className="card"><h3>Degraded</h3><h1>2</h1></div>
        <div className="card"><h3>Critical</h3><h1>1</h1></div>
      </div>

      <div className="grid">

        {/* ================= SERVICE LIST ================= */}
        <div className="card">
          <h3>Service Health</h3>

          {services.map((s, i) => (
            <div key={i} className="card">
              <b>{s.name}</b>
              <p>Status: {s.status}</p>
              <p>Latency: {s.latency}ms</p>
              <p>Error Rate: {s.errorRate}%</p>
              <p>Uptime: {s.uptime}%</p>
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
        <h3>Latency Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
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
      <div className="card">
        <h3>Backend Response</h3>

        <pre>
          {JSON.stringify(backendResponse, null, 2)}
        </pre>
      </div>

    </div>
  );
}