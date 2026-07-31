import DashboardCards from "../components/DashboardCards";
import BarChartCard from "../components/BarChartCard";
import PieChartCard from "../components/PieChartCard";
import ActivityTable from "../components/ActivityTable";

export default function RuntimeDashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>UCCIS Runtime Dashboard</h1>
        <p>
          Operational Monitoring • Runtime Analytics • Incident Tracking
        </p>
      </div>

      {/* KPI Cards */}
      <DashboardCards />

      {/* Charts Section */}
      <div className="charts">

        <div className="chart-wrapper">
          <BarChartCard />
        </div>

        <div className="chart-wrapper">
          <PieChartCard />
        </div>

      </div>

      {/* Recent Activity */}
      <ActivityTable />

      {/* Runtime Status */}
      <div className="status-section">

        <div className="status-card">
          <h3>System Status</h3>
          <p>WORKING</p>
        </div>

        <div className="status-card">
          <h3>Convergence Status</h3>
          <p>PARTIALLY CONVERGED</p>
        </div>

        <div className="status-card">
          <h3>Runtime Engine</h3>
          <p>ACTIVE</p>
        </div>

        <div className="status-card">
          <h3>Database</h3>
          <p>CONNECTED</p>
        </div>

      </div>

      {/* Operational Flow */}
      <div className="flow-card">

        <h2>Operational Chain</h2>

        <div className="flow">

          <div className="flow-item">
            Signal
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            Telemetry
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            Incident
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            Escalation
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            Replay
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            Runtime Log
          </div>

        </div>

      </div>

    </div>
  );
}