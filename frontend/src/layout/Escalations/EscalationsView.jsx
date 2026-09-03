import RebuildSprint from "../../layout/RebuildSprint";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

export default function EscalationsView() {

  const escalationStatus = [
    {
      name: "Open",
      value: 24
    },
    {
      name: "In Progress",
      value: 18
    },
    {
      name: "Resolved",
      value: 52
    },
    {
      name: "Critical",
      value: 8
    }
  ];

  const escalationPriority = [
    {
      priority: "P1",
      count: 8
    },
    {
      priority: "P2",
      count: 18
    },
    {
      priority: "P3",
      count: 32
    },
    {
      priority: "P4",
      count: 20
    }
  ];

  const COLORS = [
    "#ef4444",
    "#f59e0b",
    "#22c55e",
    "#dc2626"
  ];

  const backendResponse = [
    {
      escalationId: "ESC-1001",
      traceId: "TRACE-3001",
      priority: "P1",
      assignedTo: "SRE Team",
      status: "Open"
    },
    {
      escalationId: "ESC-1002",
      traceId: "TRACE-3002",
      priority: "P2",
      assignedTo: "Platform Team",
      status: "In Progress"
    },
    {
      escalationId: "ESC-1003",
      traceId: "TRACE-3003",
      priority: "P3",
      assignedTo: "Operations Team",
      status: "Resolved"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Escalation Management</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Escalations</h4>
          <h2>102</h2>
        </div>

        <div className="kpi-card">
          <h4>Open</h4>
          <h2>24</h2>
        </div>

        <div className="kpi-card">
          <h4>Resolved</h4>
          <h2>52</h2>
        </div>

        <div className="kpi-card">
          <h4>Critical</h4>
          <h2>8</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Escalation Status Distribution</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={escalationStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {escalationStatus.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>

        <div className="card">

          <h3>Escalations By Priority</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={escalationPriority}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
  dataKey="priority"
  label={{
    value: "Priority",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Escalation Count",
    angle: -90,
    position: "insideLeft",
  }}
/>

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#2563eb"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card">

        <h3>Backend Response</h3>

        <table className="uccis-table">

          <thead>
            <tr>
              <th>Escalation ID</th>
              <th>Trace ID</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.escalationId}>
                <td style={{ color: "#000000" }}>{item.escalationId}</td>
                <td style={{ color: "#000000" }}>{item.traceId}</td>
                <td style={{ color: "#000000" }}>{item.priority}</td>
                <td style={{ color: "#000000" }}>{item.assignedTo}</td>
                <td style={{ color: "#000000" }}>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        {/* <div className="card">

          <h3>Active Escalations</h3>

          <p>Payment Gateway Failure</p>
          <p>Database Latency Alert</p>
          <p>Replay Engine Timeout</p>
          <p>Identity Verification Failure</p>
          <p>Evidence Processing Delay</p>

        </div> */}

        {/* <div className="card">

          <h3>Escalation Metrics</h3>

          <p>Total Escalations Today : 102</p>
          <p>Average Resolution Time : 45 min</p>
          <p>P1 Escalations : 8</p>
          <p>P2 Escalations : 18</p>
          <p>Resolution Rate : 92%</p>
          <p>Operations Teams Active : 12</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}