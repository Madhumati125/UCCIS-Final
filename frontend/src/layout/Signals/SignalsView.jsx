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

export default function SignalsView() {

  const statusData = [
    {
      name: "Processed",
      value: 450
    },
    {
      name: "Pending",
      value: 120
    },
    {
      name: "Failed",
      value: 35
    },
    {
      name: "Escalated",
      value: 25
    }
  ];

  const domainData = [
    {
      domain: "Payments",
      count: 180
    },
    {
      domain: "Claims",
      count: 140
    },
    {
      domain: "Orders",
      count: 120
    },
    {
      domain: "Identity",
      count: 90
    },
    {
      domain: "Support",
      count: 100
    }
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#dc2626",
    "#2563eb"
  ];

  const backendResponse = [
    {
      signalId: "SIG-1001",
      traceId: "TRACE-2001",
      domain: "Payments",
      status: "Processed"
    },
    {
      signalId: "SIG-1002",
      traceId: "TRACE-2002",
      domain: "Claims",
      status: "Pending"
    },
    {
      signalId: "SIG-1003",
      traceId: "TRACE-2003",
      domain: "Orders",
      status: "Failed"
    },
    {
      signalId: "SIG-1004",
      traceId: "TRACE-2004",
      domain: "Identity",
      status: "Processed"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Signals Management</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Signals</h4>
          <h2>630</h2>
        </div>

        <div className="kpi-card">
          <h4>Processed</h4>
          <h2>450</h2>
        </div>

        <div className="kpi-card">
          <h4>Pending</h4>
          <h2>120</h2>
        </div>

        <div className="kpi-card">
          <h4>Failed</h4>
          <h2>35</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Signal Status Distribution</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {statusData.map((entry, index) => (
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

          <h3>Signals By Domain</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={domainData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
  dataKey="domain"
  label={{
    value: "Domains",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Signal Count",
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
              <th>Signal ID</th>
              <th>Trace ID</th>
              <th>Domain</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.signalId}>
                <td style={{ color: "#000000" }}>{item.signalId}</td>
                <td style={{ color: "#000000" }}>{item.traceId}</td>
                <td style={{ color: "#000000" }}>{item.domain}</td>
                <td style={{ color: "#000000" }}>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        {/* <div className="card">

          <h3>Active Signals</h3>

          <p>Payment Gateway Delay</p>
          <p>Customer Claim Queue Growth</p>
          <p>Replay Engine Processing Spike</p>
          <p>Evidence Synchronization Alert</p>
          <p>Identity Service Timeout</p>

        </div> */}

        {/* <div className="card">

          <h3>Signal Metrics</h3>

          <p>Total Signals Today : 630</p>
          <p>Average Processing Time : 2.1 sec</p>
          <p>Failure Rate : 5.5%</p>
          <p>Escalation Rate : 4%</p>
          <p>Replay Requests : 82</p>
          <p>Connected Domains : 18</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}