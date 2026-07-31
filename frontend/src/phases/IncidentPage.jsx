import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function IncidentPage() {

  const incidentTrend = [
    { day: "Mon", count: 8 },
    { day: "Tue", count: 12 },
    { day: "Wed", count: 6 },
    { day: "Thu", count: 15 },
    { day: "Fri", count: 10 },
    { day: "Sat", count: 7 },
    { day: "Sun", count: 5 }
  ];

  const categoryData = [
    { name: "Waste", value: 40 },
    { name: "Traffic", value: 25 },
    { name: "Water", value: 20 },
    { name: "StreetLight", value: 15 }
  ];

  const COLORS = [
    "#EF4444",
    "#F97316",
    "#22C55E",
    "#3B82F6"
  ];

  return (
    <div>

      {/* KPI CARDS */}

      <div className="card-grid">

        <div className="metric-card">
          <h2>52</h2>
          <p>Total Incidents</p>
        </div>

        <div className="metric-card">
          <h2>17</h2>
          <p>Open Incidents</p>
        </div>

        <div className="metric-card">
          <h2>31</h2>
          <p>Resolved</p>
        </div>

        <div className="metric-card">
          <h2>4</h2>
          <p>Critical</p>
        </div>

      </div>

      {/* TREND GRAPH */}

      <div className="chart-card">

        <h2>🚨 Incident Trend</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={incidentTrend}>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#EF4444"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* PIE CHART */}

      <div className="chart-card">

        <h2>📊 Incident Categories</h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={120}
              label
            >

              {categoryData.map(
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

        <h2>🗄 Backend Response</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>INC-101</td>
              <td>Waste Overflow</td>
              <td>High</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>INC-102</td>
              <td>Traffic Jam</td>
              <td>Medium</td>
              <td>In Progress</td>
            </tr>

            <tr>
              <td>INC-103</td>
              <td>Water Leakage</td>
              <td>Critical</td>
              <td>Escalated</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ACTIVE INCIDENTS */}

      <div className="chart-card">

        <h2>📋 Active Incidents</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>INC-101</td>
              <td>Pune Ward 3</td>
              <td>Waste Overflow</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>INC-102</td>
              <td>Pune Ward 5</td>
              <td>Traffic Congestion</td>
              <td>Assigned</td>
            </tr>

            <tr>
              <td>INC-103</td>
              <td>Pune Ward 8</td>
              <td>Water Leakage</td>
              <td>Escalated</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ESCALATION SUMMARY */}

      <div className="chart-card">

        <h2>⚠ Escalation Summary</h2>

        <div className="card-grid">

          <div className="metric-card">
            <h2>6</h2>
            <p>Total Escalations</p>
          </div>

          <div className="metric-card">
            <h2>2</h2>
            <p>Critical Escalations</p>
          </div>

          <div className="metric-card">
            <h2>4</h2>
            <p>Pending Review</p>
          </div>

        </div>

      </div>

      {/* TIMELINE */}

      <div className="chart-card">

        <h2>🕒 Incident Timeline</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:00 - Waste Overflow Reported
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:10 - Assigned To Operator
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:25 - Escalation Triggered
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default IncidentPage;