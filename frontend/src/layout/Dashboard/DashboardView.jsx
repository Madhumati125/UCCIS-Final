import RebuildSprint from "../../layout/RebuildSprint";
import KpiCard from "../../components/Cards/KpiCard";
import RuntimeHealthChart from "../../components/Charts/RuntimeHealthChart";
import IncidentTrendChartTask37 from "../../components/Charts/IncidentTrendChartTask37";

export default function DashboardView() {
  const incidents = [
    {
      id: "INC-1001",
      trace: "TRACE-1001",
      severity: "Critical",
      status: "Open",
    },
    {
      id: "INC-1002",
      trace: "TRACE-1002",
      severity: "High",
      status: "Closed",
    },
    {
      id: "INC-1003",
      trace: "TRACE-1003",
      severity: "Medium",
      status: "Pending",
    },
  ];

  const escalations = [
    {
      id: "ESC-1001",
      priority: "P1",
      assigned: "SRE Team",
      status: "Open",
    },
    {
      id: "ESC-1002",
      priority: "P2",
      assigned: "Platform Team",
      status: "Closed",
    },
  ];

  const timeline = [
    {
      title: "Critical Incident Created",
      time: "5 min ago",
    },
    {
      title: "Replay Executed",
      time: "15 min ago",
    },
    {
      title: "Evidence Uploaded",
      time: "25 min ago",
    },
    {
      title: "Escalation Triggered",
      time: "40 min ago",
    },
  ];

  return (
    <RebuildSprint>
      <h2>UCCIS Executive Dashboard</h2>

      <div className="card-grid">
        <KpiCard
          title="Runtime Health"
          value="98%"
          color="#22c55e"
        />

        <KpiCard
          title="Open Operations"
          value="42"
          color="#2563eb"
        />

        <KpiCard
          title="Resolved Today"
          value="17"
          color="#f59e0b"
        />

        <KpiCard
          title="Critical Incidents"
          value="6"
          color="#dc2626"
        />
      </div>

      <div className="dashboard-two-column">
        <RuntimeHealthChart />
        <IncidentTrendChartTask37 />
      </div>

      <div className="dashboard-two-column">
        <div className="card">
          <h3>System Overview</h3>

          <p>Total Signals : 450</p>
          <p>Total Incidents : 120</p>
          <p>Total Escalations : 34</p>
          <p>Total Replays : 280</p>
          <p>Total Evidence Files : 150</p>
          <p>Platform Status : Healthy</p>
        </div>

        <div className="card">
          <h3>Runtime Metrics</h3>

          <p>CPU Usage : 42%</p>
          <p>Memory Usage : 68%</p>
          <p>Disk Usage : 51%</p>
          <p>Network Traffic : 1.8 GB</p>
          <p>Replay Success Rate : 99.2%</p>
          <p>API Availability : 99.9%</p>
        </div>
      </div>

      <div className="card">
        <h3>Recent Incidents</h3>

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
            {incidents.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.trace}</td>
                <td>{item.severity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Recent Escalations</h3>

        <table className="uccis-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Priority</th>
              <th>Assigned</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {escalations.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.priority}</td>
                <td>{item.assigned}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Operational Timeline</h3>

        {timeline.map((event, index) => (
          <div
            key={index}
            className="timeline-item"
          >
            <strong>{event.title}</strong>
            <p>{event.time}</p>
          </div>
        ))}
      </div>
    </RebuildSprint>
  );
}