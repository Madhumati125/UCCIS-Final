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

export default function EvidenceView() {

  const evidenceStatus = [
    {
      name: "Verified",
      value: 180
    },
    {
      name: "Pending",
      value: 45
    },
    {
      name: "Rejected",
      value: 15
    },
    {
      name: "Archived",
      value: 120
    }
  ];

  const evidenceDomains = [
    {
      domain: "Payments",
      count: 95
    },
    {
      domain: "Claims",
      count: 80
    },
    {
      domain: "Orders",
      count: 70
    },
    {
      domain: "Identity",
      count: 60
    },
    {
      domain: "Support",
      count: 55
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
      evidenceId: "EVD-1001",
      traceId: "TRACE-7001",
      category: "Payment Logs",
      status: "Verified"
    },
    {
      evidenceId: "EVD-1002",
      traceId: "TRACE-7002",
      category: "Claims Records",
      status: "Pending"
    },
    {
      evidenceId: "EVD-1003",
      traceId: "TRACE-7003",
      category: "Order Audit",
      status: "Archived"
    },
    {
      evidenceId: "EVD-1004",
      traceId: "TRACE-7004",
      category: "Identity Proof",
      status: "Verified"
    }
  ];

  return (
    <RebuildSprint>

      <h2>Evidence Repository</h2>

      <div className="card-grid">

        <div className="kpi-card">
          <h4>Total Evidence</h4>
          <h2>360</h2>
        </div>

        <div className="kpi-card">
          <h4>Verified</h4>
          <h2>180</h2>
        </div>

        <div className="kpi-card">
          <h4>Pending</h4>
          <h2>45</h2>
        </div>

        <div className="kpi-card">
          <h4>Archived</h4>
          <h2>120</h2>
        </div>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Evidence Status Distribution</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={evidenceStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {evidenceStatus.map((entry, index) => (
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

          <h3>Evidence By Domain</h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={evidenceDomains}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="domain" />

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

        <h3>Backend Response</h3>

        <table className="uccis-table">

          <thead>
            <tr>
              <th>Evidence ID</th>
              <th>Trace ID</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {backendResponse.map((item) => (
              <tr key={item.evidenceId}>
                <td>{item.evidenceId}</td>
                <td>{item.traceId}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="dashboard-two-column">

        <div className="card">

          <h3>Recent Evidence Files</h3>

          <p>Payment Audit Log.pdf</p>
          <p>Claims Investigation Report.docx</p>
          <p>Replay Trace Snapshot.json</p>
          <p>Identity Verification Report.pdf</p>
          <p>System Runtime Evidence.zip</p>

        </div>

        <div className="card">

          <h3>Evidence Metrics</h3>

          <p>Total Evidence Today : 360</p>
          <p>Verification Rate : 94%</p>
          <p>Pending Review : 45</p>
          <p>Archive Size : 2.4 TB</p>
          <p>Average Upload Time : 1.8 sec</p>
          <p>Retention Compliance : 100%</p>

        </div>

      </div>

    </RebuildSprint>
  );
}