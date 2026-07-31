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

export default function Evidence() {
  // ================= EVIDENCE DATA =================
  const evidence = [
    {
      id: "EVD-1",
      type: "Log",
      source: "API Gateway",
      confidence: "High",
      severity: "Critical",
      timestamp: "2026-06-24 08:50:11",
      message: "Latency exceeded threshold 900ms",
      domain: "API Layer",
    },
    {
      id: "EVD-2",
      type: "Trace",
      source: "Auth Service",
      confidence: "Medium",
      severity: "Warning",
      timestamp: "2026-06-24 09:10:33",
      message: "Token validation delay detected",
      domain: "Security",
    },
    {
      id: "EVD-3",
      type: "Metric",
      source: "Database Cluster",
      confidence: "High",
      severity: "Critical",
      timestamp: "2026-06-23 23:44:12",
      message: "Connection pool exhaustion detected",
      domain: "Database",
    },
    {
      id: "EVD-4",
      type: "Event",
      source: "Telemetry Engine",
      confidence: "Medium",
      severity: "Warning",
      timestamp: "2026-06-24 10:05:55",
      message: "CPU usage spike 92%",
      domain: "Infrastructure",
    },
    {
      id: "EVD-5",
      type: "Log",
      source: "Cache Layer",
      confidence: "High",
      severity: "Critical",
      timestamp: "2026-06-24 11:22:10",
      message: "Cache miss rate increased to 80%",
      domain: "Performance",
    },
    {
      id: "EVD-6",
      type: "Trace",
      source: "Payment Service",
      confidence: "High",
      severity: "Critical",
      timestamp: "2026-06-24 07:15:44",
      message: "Transaction delay in payment pipeline",
      domain: "Payments",
    },
  ];

  // ================= PIE CHART =================
  const pieData = [
    { name: "Critical", value: 3 },
    { name: "Warning", value: 2 },
    { name: "Info", value: 1 },
  ];

  const pieColors = ["#ef4444", "#f59e0b", "#3b82f6"];

  // ================= BAR CHART (REALISTIC DISTRIBUTION) =================
  const barData = [
    { name: "Logs", value: 3 },
    { name: "Traces", value: 2 },
    { name: "Metrics", value: 1 },
    { name: "Events", value: 1 },
  ];

  const barColors = ["#3b82f6", "#ef4444", "#f59e0b", "#22c55e"];

  // ================= BACKEND RESPONSE (UNCHANGED) =================
  const backendResponse = evidence;

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Evidence Intelligence</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        <div className="card"><h3>Total Evidence</h3><h1>6</h1></div>
        <div className="card"><h3>Critical</h3><h1>3</h1></div>
        <div className="card"><h3>Warning</h3><h1>2</h1></div>
        <div className="card"><h3>High Confidence</h3><h1>4</h1></div>
      </div>

      <div className="grid">

        {/* ================= LIST ================= */}
        <div className="card">
          <h3>Evidence Store</h3>

          {evidence.map((e) => (
            <div key={e.id} className="card">
              <b>{e.id}</b>
              <p>Type: {e.type}</p>
              <p>Source: {e.source}</p>
              <p>Domain: {e.domain}</p>
              <p>Severity: {e.severity}</p>
              <p>Confidence: {e.confidence}</p>
              <p>Message: {e.message}</p>
              <p>Timestamp: {e.timestamp}</p>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Evidence Severity Distribution</h3>

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
        <h3>Evidence Type Distribution</h3>

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