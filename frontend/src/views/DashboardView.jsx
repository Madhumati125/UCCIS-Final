import React from "react";

import KPICards from "../components/dashboard/KPICards";
import RuntimeHealth from "../components/dashboard/RuntimeHealth";
import RuntimeTrendChart from "../components/Charts/RuntimeTrendChart";
import IncidentChart from "../components/Charts/IncidentChart";

function DashboardView() {
  return (
    <div>

      <h1 className="dashboard-title">
        UCCIS Executive Dashboard
      </h1>

      <div className="panel">
        <h2>Platform Overview</h2>

        <p>
          The UCCIS Production Runtime Engine is currently
          operating within healthy thresholds. Runtime
          services, telemetry pipelines, replay services,
          evidence repositories and analytics engines are
          available and processing operational workloads.
        </p>

        <br />

        <p>
          Current platform health remains above SLA targets
          with active monitoring across runtime, signals,
          telemetry, incidents and escalation domains.
        </p>
      </div>

      <br />

      <KPICards />

      <br />

      <div className="dashboard-grid">

        <RuntimeHealth />

        <div className="panel">

          <h2>Executive Summary</h2>

          <p>
            Runtime Availability : 99.8%
          </p>

          <p>
            Active Traces : 124
          </p>

          <p>
            Signals Processed Today : 7,421
          </p>

          <p>
            Open Incidents : 18
          </p>

          <p>
            Critical Escalations : 6
          </p>

          <p>
            Average Response Time : 128 ms
          </p>

        </div>

      </div>

      <div className="dashboard-grid">

        <RuntimeTrendChart />

        <IncidentChart />

      </div>

      <div className="dashboard-grid">

        <div className="panel">

          <h2>Recent Alerts</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Severity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={{ color: "#000000" }}>INC-1001</td>
                <td style={{ color: "#000000" }}>Critical</td>
                <td style={{ color: "#000000" }}>Open</td>
              </tr>

              <tr>
                <td style={{ color: "#000000" }}>INC-1002</td>
                <td style={{ color: "#000000" }}>High</td>
                <td style={{ color: "#000000" }}>Investigating</td>
              </tr>

              <tr>
                <td style={{ color: "#000000" }}>INC-1003</td>
                <td style={{ color: "#000000" }}>Medium</td>
                <td style={{ color: "#000000" }}>Resolved</td>
              </tr>

            </tbody>
          </table>

        </div>

        {/* <div className="panel">

          <h2>System Status</h2>

          <table>

            <tbody>

              <tr>
                <td>Runtime Engine</td>
                <td>🟢 Healthy</td>
              </tr>

              <tr>
                <td>MongoDB</td>
                <td>🟢 Healthy</td>
              </tr>

              <tr>
                <td>Redis</td>
                <td>🟢 Healthy</td>
              </tr>

              <tr>
                <td>Kafka</td>
                <td>🟡 Warning</td>
              </tr>

              <tr>
                <td>Analytics Engine</td>
                <td>🟢 Healthy</td>
              </tr>

            </tbody>

          </table>

        </div> */}

      </div>

      <div className="dashboard-grid">

        <div className="panel">

          <h2>Active Operations</h2>

          <table>

            <thead>
              <tr>
                <th>Trace ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td style={{ color: "#000000" }}>TRACE-1001</td>
                <td style={{ color: "#000000" }}>Running</td>
              </tr>

              <tr>
                <td style={{ color: "#000000" }}>TRACE-1002</td>
                <td style={{ color: "#000000" }}>Escalated</td>
              </tr>

              <tr>
                <td style={{ color: "#000000" }}>TRACE-1003</td>
                <td style={{ color: "#000000" }}>Completed</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* <div className="panel">

          <h2>Operational Metrics</h2>

          <p>Domains Monitored : 24</p>
          <p>Services Running : 118</p>
          <p>Events Processed : 84,210</p>
          <p>Replay Operations : 342</p>
          <p>Evidence Files : 1,208</p>
          <p>Analytics Reports : 97</p>

        </div> */}

      </div>

    </div>
  );
}

export default DashboardView;