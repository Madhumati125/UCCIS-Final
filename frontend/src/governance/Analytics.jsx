import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  // ================= KPI METRICS =================
  const stats = [
    { label: "Total Events", value: 320 },
    { label: "Incident Rate", value: "12%" },
    { label: "System Efficiency", value: "91%" },
    { label: "Avg Response Time", value: "320ms" },
  ];

  // ================= PIE CHART (INCIDENT TRENDS) =================
  const incidentTrendData = [
    { name: "Open", value: 42 },
    { name: "Investigating", value: 18 },
    { name: "Resolved", value: 55 },
    { name: "Closed", value: 23 },
  ];

  // ================= BAR CHART DATA =================
  const barData = [
    { name: "Week 1", incidents: 12 },
    { name: "Week 2", incidents: 19 },
    { name: "Week 3", incidents: 8 },
    { name: "Week 4", incidents: 25 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#22c55e", "#ef4444"];

  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>Analytics Dashboard</h2>

      {/* ================= KPI CARDS ================= */}
      <div className="grid">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.label}</h3>
            <h1>{s.value}</h1>
          </div>
        ))}
      </div>

      {/* ================= CHART SECTION ================= */}
      <div className="grid">

        {/* ================= PIE CHART ================= */}
        <div className="card">
          <h3>Incident Trends (Pie View)</h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={incidentTrendData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {incidentTrendData.map((_, index) => (
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

        {/* ================= BAR CHART (NEW) ================= */}
        <div className="card">
          <h3>Incident Trend (Bar View)</h3>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <XAxis
  dataKey="name"
  label={{
    value: "Incident Trend",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Incident Count",
    angle: -90,
    position: "insideLeft",
  }}
/>
              <Tooltip />
              <Legend />
              <Bar dataKey="incidents" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ================= BACKEND RESPONSE ================= */}
      {/* <div className="card">
        <h3>Analytics Backend Response</h3>

        <pre>
{JSON.stringify(
  {
    totalEvents: 320,
    incidentRate: "12%",
    efficiency: "91%",
    avgResponseTime: "320ms",
    incidentTrend: incidentTrendData,
    weeklyTrend: barData,
  },
  null,
  2
)}
        </pre>
      </div> */}

    </div>
  );
}