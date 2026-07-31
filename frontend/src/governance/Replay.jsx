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

export default function Replay() {
  // ================= TRACE DATA =================
  const traces = [
    {
      id: "TRACE-1001",
      title: "Request Flow Reconstructed",
      status: "Completed",
      service: "API Gateway → DB → Auth",
      duration: 320,
      steps: 12,
      severity: "Low",
    },
    {
      id: "TRACE-1002",
      title: "API Crash Replay",
      status: "In Progress",
      service: "Auth Service",
      duration: 0,
      steps: 7,
      severity: "High",
    },
    {
      id: "TRACE-1003",
      title: "Latency Spike Investigation",
      status: "Completed",
      service: "API Gateway",
      duration: 540,
      steps: 18,
      severity: "Critical",
    },
    {
      id: "TRACE-1004",
      title: "DB Deadlock Replay",
      status: "Failed",
      service: "Database Cluster",
      duration: 0,
      steps: 9,
      severity: "Critical",
    },
    {
      id: "TRACE-1005",
      title: "Auth Token Validation Flow",
      status: "Completed",
      service: "Auth Service",
      duration: 210,
      steps: 10,
      severity: "Medium",
    },
    {
      id: "TRACE-1006",
      title: "Service Chain Delay Analysis",
      status: "In Progress",
      service: "API → Cache → DB",
      duration: 0,
      steps: 14,
      severity: "High",
    },
  ];

  // ================= PIE CHART =================
  const pieData = [
    { name: "Completed", value: 3 },
    { name: "In Progress", value: 2 },
    { name: "Failed", value: 1 },
  ];

  const pieColors = ["#22c55e", "#f59e0b", "#ef4444"];

  // ================= BAR CHART (FIXED REALISTIC VALUES) =================
  const barData = [
    { name: "Low Complexity", value: 1 },
    { name: "Medium Complexity", value: 3 },
    { name: "High Complexity", value: 2 },
  ];

  const barColors = ["#22c55e", "#f59e0b", "#ef4444"];

  // ================= BACKEND RESPONSE (UNCHANGED) =================
  const backendResponse = traces;

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Replay Engine</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        <div className="card"><h3>Total Traces</h3><h1>6</h1></div>
        <div className="card"><h3>Completed</h3><h1>3</h1></div>
        <div className="card"><h3>In Progress</h3><h1>2</h1></div>
        <div className="card"><h3>Failed</h3><h1>1</h1></div>
      </div>

      <div className="grid">

        {/* ================= TRACE LIST ================= */}
        <div className="card">
          <h3>Trace Replay List</h3>

          {traces.map((t) => (
            <div key={t.id} className="card">
              <b>{t.id}</b>
              <p>{t.title}</p>
              <p>Status: {t.status}</p>
              <p>Service: {t.service}</p>
              <p>Steps: {t.steps}</p>
              <p>Duration: {t.duration}ms</p>
              <p>Severity: {t.severity}</p>
            </div>
          ))}
        </div>

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Replay Status Distribution</h3>

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
        <h3>Trace Complexity Distribution</h3>

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