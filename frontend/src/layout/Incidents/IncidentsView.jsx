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

export default function IncidentsView() {

  const incidentStatus = [
    { name: "Open", value: 42 },
    { name: "Closed", value: 80 },
    { name: "Pending", value: 18 },
    { name: "Critical", value: 6 }
  ];

  const incidentDomain = [
    { domain: "Payments", count: 20 },
    { domain: "Claims", count: 35 },
    { domain: "Orders", count: 25 },
    { domain: "Identity", count: 15 },
    { domain: "Support", count: 10 }
  ];

  const COLORS = [
    "#ef4444",
    "#22c55e",
    "#f59e0b",
    "#dc2626"
  ];

  const backendResponse = [
    {
      incidentId: "INC-1001",
      traceId: "TRACE-1001",
      severity: "Critical",
      status: "Open"
    },
    {
      incidentId: "INC-1002",
      traceId: "TRACE-1002",
      severity: "High",
      status: "Closed"
    },
    {
      incidentId: "INC-1003",
      traceId: "TRACE-1003",
      severity: "Medium",
      status: "Pending"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Incident Management</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Incidents</h4>
          <h2>146</h2>
        </div>

        <div className="kpi-card">
          <h4>Open</h4>
          <h2>42</h2>
        </div>

        <div className="kpi-card">
          <h4>Closed</h4>
          <h2>80</h2>
        </div>

        <div className="kpi-card">
          <h4>Critical</h4>
          <h2>6</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Incident Status Distribution</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={incidentStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {incidentStatus.map((entry, index) => (
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

          <h3>Incidents By Domain</h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={incidentDomain}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="domain" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card">

        <h3>Backend Response</h3>

        <table className="uccis-table">

          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Trace ID</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.incidentId}>
                <td>{item.incidentId}</td>
                <td>{item.traceId}</td>
                <td>{item.severity}</td>
                <td>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </RebuildSprint>
  );
}