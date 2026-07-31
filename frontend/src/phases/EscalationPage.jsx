import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function EscalationPage() {

  const escalationTrend = [
    { day: "Mon", count: 2 },
    { day: "Tue", count: 4 },
    { day: "Wed", count: 3 },
    { day: "Thu", count: 6 },
    { day: "Fri", count: 5 },
    { day: "Sat", count: 3 },
    { day: "Sun", count: 2 }
  ];

  const escalationCategories = [
    {
      name: "Supervisor",
      value: 35
    },
    {
      name: "Department Head",
      value: 25
    },
    {
      name: "Commissioner",
      value: 20
    },
    {
      name: "Secretary",
      value: 20
    }
  ];

  const COLORS = [
    "#EF4444",
    "#F97316",
    "#EAB308",
    "#22C55E"
  ];

  return (
    <div>

      {/* KPI CARDS */}

      <div className="card-grid">

        <div className="metric-card">
          <h2>20</h2>
          <p>Total Escalations</p>
        </div>

        <div className="metric-card">
          <h2>6</h2>
          <p>Critical Escalations</p>
        </div>

        <div className="metric-card">
          <h2>8</h2>
          <p>Pending Review</p>
        </div>

        <div className="metric-card">
          <h2>12</h2>
          <p>Resolved</p>
        </div>

      </div>

      {/* TREND GRAPH */}

      <div className="chart-card">

        <h2>⚠ Escalation Trend</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={escalationTrend}>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#EF4444"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* CATEGORY PIE CHART */}

      <div className="chart-card">

        <h2>📊 Escalation Levels</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <PieChart>

            <Pie
              data={escalationCategories}
              dataKey="value"
              outerRadius={120}
              label
            >

              {escalationCategories.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* BACKEND RESPONSE */}

      <div className="chart-card">

        <h2>🗄 Backend Escalation Response</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Incident</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>ESC-201</td>
              <td>Waste Overflow</td>
              <td>High</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>ESC-202</td>
              <td>Water Leakage</td>
              <td>Critical</td>
              <td>Escalated</td>
            </tr>

            <tr>
              <td>ESC-203</td>
              <td>Traffic Congestion</td>
              <td>Medium</td>
              <td>Resolved</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ACTIVE ESCALATIONS */}

      <div className="chart-card">

        <h2>🚨 Active Escalations</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Assigned To</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>ESC-201</td>
              <td>Supervisor</td>
              <td>Level 1</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>ESC-202</td>
              <td>Department Head</td>
              <td>Level 2</td>
              <td>Review</td>
            </tr>

            <tr>
              <td>ESC-203</td>
              <td>Commissioner</td>
              <td>Level 3</td>
              <td>Closed</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ESCALATION MATRIX */}

      <div className="chart-card">

        <h2>📋 Escalation Matrix</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>Severity</th>
              <th>Escalate To</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Low</td>
              <td>Supervisor</td>
            </tr>

            <tr>
              <td>Medium</td>
              <td>Department Head</td>
            </tr>

            <tr>
              <td>High</td>
              <td>Commissioner</td>
            </tr>

            <tr>
              <td>Critical</td>
              <td>Principal Secretary</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* TIMELINE */}

      <div className="chart-card">

        <h2>🕒 Escalation Timeline</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:00 - Incident Reported
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:05 - Supervisor Assigned
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:15 - Department Head Review
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:30 - Escalation Closed
            </div>
          </div>

        </div>

      </div>

      {/* SYSTEM STATUS */}

      <div className="chart-card">

        <h2>⚙ Escalation Engine Status</h2>

        <div className="card-grid">

          <div className="metric-card">
            <h2>ACTIVE</h2>
            <p>Rules Engine</p>
          </div>

          <div className="metric-card">
            <h2>CONNECTED</h2>
            <p>Database</p>
          </div>

          <div className="metric-card">
            <h2>ONLINE</h2>
            <p>Notification Service</p>
          </div>

          <div className="metric-card">
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default EscalationPage;