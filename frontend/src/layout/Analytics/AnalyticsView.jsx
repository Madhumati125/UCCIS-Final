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

export default function AnalyticsView() {

  const analyticsStatus = [
    {
      name: "Healthy",
      value: 72
    },
    {
      name: "Warning",
      value: 18
    },
    {
      name: "Critical",
      value: 10
    }
  ];

  const analyticsVolume = [
    {
      month: "Jan",
      count: 120
    },
    {
      month: "Feb",
      count: 180
    },
    {
      month: "Mar",
      count: 250
    },
    {
      month: "Apr",
      count: 220
    },
    {
      month: "May",
      count: 310
    },
    {
      month: "Jun",
      count: 420
    }
  ];

  const trendData = [
    {
      day: "Mon",
      value: 95
    },
    {
      day: "Tue",
      value: 97
    },
    {
      day: "Wed",
      value: 93
    },
    {
      day: "Thu",
      value: 98
    },
    {
      day: "Fri",
      value: 96
    },
    {
      day: "Sat",
      value: 99
    },
    {
      day: "Sun",
      value: 97
    }
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#dc2626"
  ];

  const backendResponse = [
    {
      reportId: "ANL-1001",
      category: "Incident Analytics",
      generated: "Success",
      records: 1200
    },
    {
      reportId: "ANL-1002",
      category: "Signals Analytics",
      generated: "Success",
      records: 980
    },
    {
      reportId: "ANL-1003",
      category: "Replay Analytics",
      generated: "Success",
      records: 750
    },
    {
      reportId: "ANL-1004",
      category: "Evidence Analytics",
      generated: "Success",
      records: 620
    }
  ];

  return (
    <RebuildSprint>

      <h2>Analytics Center</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Reports</h4>
          <h2>542</h2>
        </div>

        <div className="kpi-card">
          <h4>Generated Today</h4>
          <h2>74</h2>
        </div>

        <div className="kpi-card">
          <h4>Success Rate</h4>
          <h2>98%</h2>
        </div>

        <div className="kpi-card">
          <h4>Insights</h4>
          <h2>128</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Platform Health Analytics</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={analyticsStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {analyticsStatus.map((entry, index) => (
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

          <h3>Monthly Analytics Volume</h3>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={analyticsVolume}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

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

        <h3>Performance Trend</h3>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trendData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

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
              <th>Report ID</th>
              <th>Category</th>
              <th>Status</th>
              <th>Records</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.reportId}>
                <td>{item.reportId}</td>
                <td>{item.category}</td>
                <td>{item.generated}</td>
                <td>{item.records}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Top Insights</h3>

          <p>Incident Resolution Improved By 14%</p>
          <p>Replay Success Rate Increased To 95%</p>
          <p>Signal Processing Delay Reduced</p>
          <p>Evidence Verification Faster By 11%</p>
          <p>Platform Availability Above 99%</p>

        </div>

        <div className="card">

          <h3>Analytics Metrics</h3>

          <p>Total Analytics Jobs : 542</p>
          <p>Success Rate : 98%</p>
          <p>Average Execution Time : 2.4 sec</p>
          <p>Generated Reports : 74</p>
          <p>Data Processed : 5.2 TB</p>
          <p>Insights Produced : 128</p>

        </div>

      </div>

    </RebuildSprint>
  );
}