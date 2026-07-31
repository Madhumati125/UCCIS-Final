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

function OperatorPage() {

  const activityData = [
    { day: "Mon", tasks: 20 },
    { day: "Tue", tasks: 25 },
    { day: "Wed", tasks: 18 },
    { day: "Thu", tasks: 30 },
    { day: "Fri", tasks: 28 },
    { day: "Sat", tasks: 15 },
    { day: "Sun", tasks: 12 }
  ];

  const statusData = [
    { name: "Online", value: 60 },
    { name: "Busy", value: 25 },
    { name: "Offline", value: 15 }
  ];

  const COLORS = [
    "#22C55E",
    "#F97316",
    "#EF4444"
  ];

  return (
    <div>

      {/* KPI CARDS */}

      <div className="card-grid">

        <div className="metric-card">
          <h2>42</h2>
          <p>Total Operators</p>
        </div>

        <div className="metric-card">
          <h2>28</h2>
          <p>Online</p>
        </div>

        <div className="metric-card">
          <h2>9</h2>
          <p>Busy</p>
        </div>

        <div className="metric-card">
          <h2>5</h2>
          <p>Offline</p>
        </div>

      </div>

      {/* ACTIVITY GRAPH */}

      <div className="chart-card">

        <h2>👷 Operator Activity Trend</h2>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={activityData}>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="tasks"
              fill="#06B6D4"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* STATUS PIE */}

      <div className="chart-card">

        <h2>📊 Operator Status Distribution</h2>

        <ResponsiveContainer width="100%" height={350}>

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={120}
              label
            >

              {statusData.map((entry,index)=>(
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* BACKEND RESPONSE */}

      <div className="chart-card">

        <h2>🗄 Operator Backend Response</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Zone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>OP-101</td>
              <td>Rahul Sharma</td>
              <td>Ward 1</td>
              <td>Online</td>
            </tr>

            <tr>
              <td>OP-102</td>
              <td>Priya Patil</td>
              <td>Ward 2</td>
              <td>Busy</td>
            </tr>

            <tr>
              <td>OP-103</td>
              <td>Amit Joshi</td>
              <td>Ward 3</td>
              <td>Offline</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ACTIVE OPERATORS */}

      <div className="chart-card">

        <h2>👥 Active Operators</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>Operator</th>
              <th>Location</th>
              <th>Current Task</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Rahul Sharma</td>
              <td>Ward 1</td>
              <td>Waste Cleanup</td>
              <td>Assigned</td>
            </tr>

            <tr>
              <td>Priya Patil</td>
              <td>Ward 2</td>
              <td>Water Leakage</td>
              <td>Working</td>
            </tr>

            <tr>
              <td>Ajay Kumar</td>
              <td>Ward 5</td>
              <td>Traffic Monitoring</td>
              <td>Active</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* TASK ASSIGNMENTS */}

      <div className="chart-card">

        <h2>📋 Task Assignments</h2>

        <table className="runtime-table">

          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task</th>
              <th>Assigned To</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>TASK-001</td>
              <td>Waste Overflow</td>
              <td>Rahul Sharma</td>
              <td>High</td>
            </tr>

            <tr>
              <td>TASK-002</td>
              <td>Water Leakage</td>
              <td>Priya Patil</td>
              <td>Critical</td>
            </tr>

            <tr>
              <td>TASK-003</td>
              <td>Street Light Repair</td>
              <td>Ajay Kumar</td>
              <td>Medium</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* TIMELINE */}

      <div className="chart-card">

        <h2>🕒 Operator Timeline</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              09:00 - Operator Logged In
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              09:20 - Task Assigned
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              10:00 - Field Activity Started
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              11:15 - Task Completed
            </div>
          </div>

        </div>

      </div>

      {/* SYSTEM STATUS */}

      <div className="chart-card">

        <h2>⚙ Operator Service Status</h2>

        <div className="card-grid">

          <div className="metric-card">
            <h2>ONLINE</h2>
            <p>Operator Service</p>
          </div>

          <div className="metric-card">
            <h2>CONNECTED</h2>
            <p>Master DB</p>
          </div>

          <div className="metric-card">
            <h2>ACTIVE</h2>
            <p>Task Engine</p>
          </div>

          <div className="metric-card">
            <h2>99%</h2>
            <p>Availability</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OperatorPage;