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

export default function ReplayView() {

  const replayStatus = [
    {
      name: "Successful",
      value: 280
    },
    {
      name: "Running",
      value: 45
    },
    {
      name: "Failed",
      value: 18
    },
    {
      name: "Queued",
      value: 30
    }
  ];

  const replayDomains = [
    {
      domain: "Payments",
      count: 120
    },
    {
      domain: "Claims",
      count: 80
    },
    {
      domain: "Orders",
      count: 60
    },
    {
      domain: "Identity",
      count: 50
    },
    {
      domain: "Support",
      count: 40
    }
  ];

  const COLORS = [
    "#22c55e",
    "#2563eb",
    "#dc2626",
    "#f59e0b"
  ];

  const backendResponse = [
    {
      replayId: "REP-1001",
      traceId: "TRACE-5001",
      domain: "Payments",
      status: "Successful"
    },
    {
      replayId: "REP-1002",
      traceId: "TRACE-5002",
      domain: "Claims",
      status: "Running"
    },
    {
      replayId: "REP-1003",
      traceId: "TRACE-5003",
      domain: "Orders",
      status: "Failed"
    },
    {
      replayId: "REP-1004",
      traceId: "TRACE-5004",
      domain: "Identity",
      status: "Queued"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Replay Engine</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Replays</h4>
          <h2>373</h2>
        </div>

        <div className="kpi-card">
          <h4>Successful</h4>
          <h2>280</h2>
        </div>

        <div className="kpi-card">
          <h4>Running</h4>
          <h2>45</h2>
        </div>

        <div className="kpi-card">
          <h4>Failed</h4>
          <h2>18</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Replay Status Distribution</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={replayStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {replayStatus.map((entry, index) => (
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

          <h3>Replay Volume By Domain</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={replayDomains}>

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
    value: "Replay Volume",
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
              <th>Replay ID</th>
              <th>Trace ID</th>
              <th>Domain</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.replayId}>
                <td style={{ color: "#000000" }}>{item.replayId}</td>
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

          <h3>Replay Queue</h3>

          <p>Payment Transaction Replay</p>
          <p>Claims Settlement Replay</p>
          <p>Order Processing Replay</p>
          <p>Identity Verification Replay</p>
          <p>Evidence Synchronization Replay</p>

        </div> */}

        {/* <div className="card">

          <h3>Replay Metrics</h3>

          <p>Total Replays Today : 373</p>
          <p>Success Rate : 95%</p>
          <p>Failure Rate : 5%</p>
          <p>Average Runtime : 3.1 sec</p>
          <p>Queue Length : 30</p>
          <p>Active Workers : 15</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}