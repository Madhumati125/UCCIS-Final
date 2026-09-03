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

export default function RuntimeView() {

  const runtimeStatus = [
    {
      name: "Healthy",
      value: 98
    },
    {
      name: "Warning",
      value: 8
    },
    {
      name: "Critical",
      value: 3
    },
    {
      name: "Offline",
      value: 1
    }
  ];

  const runtimeServices = [
    {
      service: "Signals",
      value: 98
    },
    {
      service: "Incidents",
      value: 97
    },
    {
      service: "Replay",
      value: 99
    },
    {
      service: "Evidence",
      value: 96
    },
    {
      service: "Analytics",
      value: 98
    }
  ];

  const runtimeTrend = [
    {
      time: "00:00",
      health: 96
    },
    {
      time: "04:00",
      health: 97
    },
    {
      time: "08:00",
      health: 98
    },
    {
      time: "12:00",
      health: 99
    },
    {
      time: "16:00",
      health: 98
    },
    {
      time: "20:00",
      health: 99
    }
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#dc2626",
    "#6b7280"
  ];

  const runtimeData = [
    {
      runtimeId: "RUN-1001",
      service: "Signals Engine",
      status: "Healthy",
      uptime: "99.9%"
    },
    {
      runtimeId: "RUN-1002",
      service: "Replay Engine",
      status: "Healthy",
      uptime: "99.8%"
    },
    {
      runtimeId: "RUN-1003",
      service: "Evidence Engine",
      status: "Warning",
      uptime: "97.4%"
    },
    {
      runtimeId: "RUN-1004",
      service: "Analytics Engine",
      status: "Healthy",
      uptime: "99.7%"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Runtime Operations Center</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Runtime Health</h4>
          <h2>98%</h2>
        </div>

        <div className="kpi-card">
          <h4>Active Services</h4>
          <h2>24</h2>
        </div>

        <div className="kpi-card">
          <h4>Open Operations</h4>
          <h2>42</h2>
        </div>

        <div className="kpi-card">
          <h4>Resolved Today</h4>
          <h2>17</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Runtime Status Distribution</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={runtimeStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {runtimeStatus.map((entry, index) => (
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

          <h3>Service Health</h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={runtimeServices}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
  dataKey="service"
  label={{
    value: "Services",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  domain={[0, 100]}
  label={{
    value: "Health Score (%)",
    angle: -90,
    position: "insideLeft",
  }}
/>

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#2563eb"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card">

        <h3>Runtime Trend</h3>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={runtimeTrend}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
  dataKey="time"
  label={{
    value: "Time",
    position: "insideBottom",
    offset: -1,
  }}
/>

<YAxis
  domain={[0, 100]}
  label={{
    value: "Health Score (%)",
    angle: -90,
    position: "insideLeft",
  }}
/>

            <Tooltip />

            <Line
              type="monotone"
              dataKey="health"
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
              <th>Runtime ID</th>
              <th>Service</th>
              <th>Status</th>
              <th>Uptime</th>
            </tr>
          </thead>

          <tbody>

            {runtimeData.map((item) => (
              <tr key={item.runtimeId}>
                <td style={{ color: "#000000" }}>{item.runtimeId}</td>
                <td style={{ color: "#000000" }}>{item.service}</td>
                <td style={{ color: "#000000" }}>{item.status}</td>
                <td style={{ color: "#000000" }}>{item.uptime}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        {/* <div className="card">

          <h3>Runtime Services</h3>

          <p>Signals Processing Engine</p>
          <p>Incident Management Engine</p>
          <p>Replay Runtime Engine</p>
          <p>Evidence Storage Engine</p>
          <p>Analytics Processing Engine</p>

        </div> */}

        {/* <div className="card">

          <h3>Runtime Metrics</h3>

          <p>CPU Usage : 42%</p>
          <p>Memory Usage : 68%</p>
          <p>Disk Usage : 51%</p>
          <p>Network Traffic : 1.8 GB</p>
          <p>API Availability : 99.9%</p>
          <p>Active Sessions : 124</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}