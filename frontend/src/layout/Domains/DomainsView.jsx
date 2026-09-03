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

export default function DomainsView() {

  const domainStatus = [
    {
      name: "Active",
      value: 18
    },
    {
      name: "Monitoring",
      value: 6
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

  const domainTraffic = [
    {
      domain: "Payments",
      traffic: 850
    },
    {
      domain: "Claims",
      traffic: 720
    },
    {
      domain: "Orders",
      traffic: 650
    },
    {
      domain: "Identity",
      traffic: 480
    },
    {
      domain: "Support",
      traffic: 390
    }
  ];

  const performanceTrend = [
    {
      month: "Jan",
      value: 95
    },
    {
      month: "Feb",
      value: 96
    },
    {
      month: "Mar",
      value: 97
    },
    {
      month: "Apr",
      value: 98
    },
    {
      month: "May",
      value: 99
    },
    {
      month: "Jun",
      value: 99.5
    }
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#dc2626",
    "#6b7280"
  ];

  const backendResponse = [
    {
      domainId: "DOM-1001",
      domain: "Payments",
      status: "Active",
      health: "99.9%"
    },
    {
      domainId: "DOM-1002",
      domain: "Claims",
      status: "Monitoring",
      health: "97.2%"
    },
    {
      domainId: "DOM-1003",
      domain: "Orders",
      status: "Active",
      health: "99.1%"
    },
    {
      domainId: "DOM-1004",
      domain: "Identity",
      status: "Critical",
      health: "89.4%"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Domain Management Center</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Domains</h4>
          <h2>28</h2>
        </div>

        <div className="kpi-card">
          <h4>Active Domains</h4>
          <h2>18</h2>
        </div>

        <div className="kpi-card">
          <h4>Monitoring</h4>
          <h2>6</h2>
        </div>

        <div className="kpi-card">
          <h4>Critical</h4>
          <h2>3</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Domain Status Distribution</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={domainStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {domainStatus.map((entry, index) => (
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

          <h3>Domain Traffic Volume</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={domainTraffic}>

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
    value: "Traffic Volume",
    angle: -90,
    position: "insideLeft",
  }}
/>

              <Tooltip />

              <Bar
                dataKey="traffic"
                fill="#2563eb"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="card">

        <h3>Domain Performance Trend</h3>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <LineChart data={performanceTrend}>

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
    value: "Traffic Volume",
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
              <th>Domain ID</th>
              <th>Domain</th>
              <th>Status</th>
              <th>Health</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.domainId}>
                <td style={{ color: "#000000" }}>{item.domainId}</td>
                <td style={{ color: "#000000" }}>{item.domain}</td>
                <td style={{ color: "#000000" }}>{item.status}</td>
                <td style={{ color: "#000000" }}>{item.health}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        {/* <div className="card">

          <h3>Connected Domains</h3>

          <p>Payments Domain</p>
          <p>Claims Domain</p>
          <p>Orders Domain</p>
          <p>Identity Domain</p>
          <p>Customer Support Domain</p>

        </div> */}

        {/* <div className="card">

          <h3>Domain Metrics</h3>

          <p>Total Domains : 28</p>
          <p>Average Health : 98.2%</p>
          <p>Traffic Processed : 3.1M</p>
          <p>Availability : 99.9%</p>
          <p>Connected Services : 124</p>
          <p>Cross-Domain Links : 342</p>

        </div> */}

      </div>

    </RebuildSprint>
  );
}