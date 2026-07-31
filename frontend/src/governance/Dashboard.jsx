import React from "react";
import EscalationChartTask38 from "../components/Charts/EscalationChartTask38";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const stats = [
    { label: "Total Incidents", value: 128, color: "blue" },
    { label: "Active Alerts", value: 12, color: "orange" },
    { label: "Critical Issues", value: 3, color: "red" },
    { label: "System Health", value: "98%", color: "green" },
  ];

  // PIE CHART DATA
  const incidentData = [
    { name: "Open", value: 42 },
    { name: "Investigating", value: 18 },
    { name: "Resolved", value: 55 },
    { name: "Closed", value: 23 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#22c55e", "#ef4444"];

  return (
    <div className="page">

      {/* HEADER */}
      <h2>UCCIS Dashboard</h2>

      {/* KPI CARDS */}
      <div className="grid">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.label}</h3>
            <h1 style={{ color: `var(--${s.color})` }}>
              {s.value}
            </h1>
          </div>
        ))}
      </div>

      {/* SYSTEM INFO */}
      <div className="card">
        <h3>Runtime Overview</h3>
        <p>🌍 Region: India (Mumbai Cluster)</p>
        <p>⚙️ Version: 1.0.0</p>
        <p>📡 Telemetry: Active</p>
        <p>🔐 Security Level: High</p>
        <p>⏱ Uptime: 14d 6h 22m</p>
      </div>

      {/* CHARTS */}
      <div className="grid">

        {/* PIE CHART */}
        <div className="card">
          <h3>Incident Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incidentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {incidentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ESCALATION CHART */}
        <div className="card">
          <h3>Escalation Breakdown</h3>
          <EscalationChartTask38 />
        </div>

      </div>

      {/* INSIGHTS */}
      <div className="card">
        <h3>Quick Insights</h3>
        <ul>
          <li>⚠️ Spike detected in API latency (last 30 min)</li>
          <li>🔄 4 incidents auto-escalated to L2</li>
          <li>🟢 System recovery trend improving</li>
          <li>📊 Telemetry ingestion stable</li>
        </ul>
      </div>

    </div>
  );
}