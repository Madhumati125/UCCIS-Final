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
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

export default function HistoricalOpsView() {

  const operationStatus = [
    {
      name: "Completed",
      value: 720
    },
    {
      name: "Archived",
      value: 310
    },
    {
      name: "Failed",
      value: 48
    },
    {
      name: "Recovered",
      value: 122
    }
  ];

  const monthlyOperations = [
    {
      month: "Jan",
      operations: 120
    },
    {
      month: "Feb",
      operations: 180
    },
    {
      month: "Mar",
      operations: 240
    },
    {
      month: "Apr",
      operations: 280
    },
    {
      month: "May",
      operations: 320
    },
    {
      month: "Jun",
      operations: 410
    }
  ];

  const trendData = [
    {
      year: "2021",
      value: 400
    },
    {
      year: "2022",
      value: 550
    },
    {
      year: "2023",
      value: 720
    },
    {
      year: "2024",
      value: 940
    },
    {
      year: "2025",
      value: 1180
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
      operationId: "OPS-1001",
      traceId: "TRACE-9001",
      type: "Replay",
      status: "Completed"
    },
    {
      operationId: "OPS-1002",
      traceId: "TRACE-9002",
      type: "Incident",
      status: "Archived"
    },
    {
      operationId: "OPS-1003",
      traceId: "TRACE-9003",
      type: "Evidence",
      status: "Recovered"
    },
    {
      operationId: "OPS-1004",
      traceId: "TRACE-9004",
      type: "Escalation",
      status: "Completed"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Historical Operations</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Operations</h4>
          <h2>1200</h2>
        </div>

        <div className="kpi-card">
          <h4>Completed</h4>
          <h2>720</h2>
        </div>

        <div className="kpi-card">
          <h4>Archived</h4>
          <h2>310</h2>
        </div>

        <div className="kpi-card">
          <h4>Recovered</h4>
          <h2>122</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Operation Status Distribution</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={operationStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {operationStatus.map((entry, index) => (
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

          <h3>Monthly Operations</h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyOperations}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
  dataKey="month"
  label={{
    value: "Month",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Operations Volume",
    angle: -90,
    position: "insideLeft",
  }}
/>

              <Tooltip />

              <Bar
                dataKey="operations"
                fill="#2563eb"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card">

        <h3>Historical Growth Trend</h3>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trendData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
  dataKey="year"
  label={{
    value: "Year",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  label={{
    value: "Operations Volume",
    angle: -90,
    position: "insideLeft",
  }}
/>

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      <div className="card">

        <h3>Backend Response</h3>

        <table className="uccis-table">

          <thead>
            <tr>
              <th>Operation ID</th>
              <th>Trace ID</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.operationId}>
                <td style={{ color: "#000000" }}>{item.operationId}</td>
                <td style={{ color: "#000000" }}>{item.traceId}</td>
                <td style={{ color: "#000000" }}>{item.type}</td>
                <td style={{ color: "#000000" }}>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        {/* <div className="card">

          <h3>Historical Insights</h3>

          <p>Replay Recovery Improved By 22%</p>
          <p>Archived Operations Increased</p>
          <p>Incident Resolution Faster Than Previous Year</p>
          <p>Evidence Retention Fully Compliant</p>
          <p>Escalation Handling Optimized</p>

        </div> */}

        {/* <div className="card">

          <h3>Historical Metrics</h3>

          <p>Total Operations : 1200</p>
          <p>Recovery Success Rate : 96%</p>
          <p>Archive Retention : 100%</p>
          <p>Average Resolution Time : 38 min</p>
          <p>Historical Storage : 12.5 TB</p>
          <p>Operational Availability : 99.8%</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}