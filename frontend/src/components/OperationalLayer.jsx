/* =========================================================
UCCIS GOVERNANCE COMMAND CENTER
PHASE 1 → PHASE 5
CLEAN STABLE DASHBOARD
========================================================= */

import "../styles/Task19.css";

/* =========================================================
COMPONENTS
========================================================= */

import CommandHeader from
"../components/commandCenter/CommandHeader";

import LiveAlertTicker from
"../components/alerts/LiveAlertTicker";

import ExecutiveCard from
"../components/primitives/ExecutiveCard";

import KPIBlock from
"../components/primitives/KPIBlock";

/* =========================================================
DASHBOARD
========================================================= */

const OperationalLayer = () => {

  return (

    <div className="dashboard-layout">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <CommandHeader />

      {/* ================================================= */}
      {/* ALERT TICKER */}
      {/* ================================================= */}

      <LiveAlertTicker />

      {/* ================================================= */}
      {/* EXECUTIVE GRID */}
      {/* ================================================= */}

      <div className="executive-command-grid">

        <ExecutiveCard
          title="Critical Alerts"
          value="12"
          status="Escalating"
        />

        <ExecutiveCard
          title="Operational Health"
          value="91%"
          status="Stable"
        />

        <ExecutiveCard
          title="Replay Continuity"
          value="94%"
          status="Verified"
        />

        <ExecutiveCard
          title="Field Readiness"
          value="87%"
          status="Active"
        />

      </div>

      {/* ================================================= */}
      {/* KPI GRID */}
      {/* ================================================= */}

      <div className="kpi-grid">

        <KPIBlock
          label="Mumbai Runtime"
          value="92%"
        />

        <KPIBlock
          label="Thane Stability"
          value="84%"
        />

        <KPIBlock
          label="MMR Density"
          value="76%"
        />

        <KPIBlock
          label="Escalation Load"
          value="68%"
        />

      </div>

      {/* ================================================= */}
      {/* LIVE OPERATIONS */}
      {/* ================================================= */}

      <div className="top-grid">

        {/* ALERT PANEL */}

        <div className="panel-card">

          <h2>
            LIVE ALERTS
          </h2>

          <div className="alert-item">

            <div>

              <h3>
                Flood Escalation Active
              </h3>

              <p>
                Mumbai Zone 4
              </p>

            </div>

            <span>
              Critical
            </span>

          </div>

          <div className="alert-item">

            <div>

              <h3>
                Traffic Congestion Spike
              </h3>

              <p>
                Thane East Corridor
              </p>

            </div>

            <span>
              High
            </span>

          </div>

          <div className="alert-item">

            <div>

              <h3>
                Medical Dispatch Delay
              </h3>

              <p>
                MMR South Cluster
              </p>

            </div>

            <span>
              Medium
            </span>

          </div>

        </div>

        {/* TELEMETRY PANEL */}

        <div className="panel-card">

          <h2>
            TELEMETRY STATUS
          </h2>

          <div className="telemetry-row">

            <div>

              <h3>
                Traffic Grid
              </h3>

              <p>
                Mumbai
              </p>

            </div>

            <span>
              Operational
            </span>

          </div>

          <div className="telemetry-row">

            <div>

              <h3>
                Police Mesh
              </h3>

              <p>
                Thane
              </p>

            </div>

            <span>
              Stable
            </span>

          </div>

          <div className="telemetry-row">

            <div>

              <h3>
                Utility Coordination
              </h3>

              <p>
                MMR
              </p>

            </div>

            <span>
              Elevated
            </span>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* REPLAY + ESCALATION */}
      {/* ================================================= */}

      <div className="triple-grid">

        {/* REPLAY */}

        <div className="panel-card">

          <h2>
            REPLAY ENGINE
          </h2>

          <div className="replay-card">

            <h3>
              Flood Reconstruction
            </h3>

            <div className="replay-metrics">

              <span>
                Confidence: 94%
              </span>

              <span>
                Entropy: 12%
              </span>

            </div>

            <div className="replay-progress">

              <div
                className="replay-fill"
                style={{
                  width: "94%"
                }}
              />

            </div>

          </div>

        </div>

        {/* ESCALATION */}

        <div className="panel-card">

          <h2>
            ESCALATION INTELLIGENCE
          </h2>

          <div className="escalation-row">

            <div>

              <h3>
                Mumbai
              </h3>

              <p>
                Critical Growth
              </p>

            </div>

            <div className="risk-bar-container">

              <div
                className="risk-bar"
                style={{
                  width: "84%"
                }}
              />

            </div>

            <span>
              84%
            </span>

          </div>

          <div className="escalation-row">

            <div>

              <h3>
                Thane
              </h3>

              <p>
                Stable Trend
              </p>

            </div>

            <div className="risk-bar-container">

              <div
                className="risk-bar"
                style={{
                  width: "62%"
                }}
              />

            </div>

            <span>
              62%
            </span>

          </div>

        </div>

        {/* HEALTH */}

        <div className="panel-card">

          <h2>
            OPERATIONAL HEALTH
          </h2>

          <div className="health-score">

            91%

          </div>

          <div className="health-grid">

            <div className="health-item">

              <span>
                Traffic Grid
              </span>

              <strong>
                Stable
              </strong>

            </div>

            <div className="health-item">

              <span>
                Replay Engine
              </span>

              <strong>
                Verified
              </strong>

            </div>

            <div className="health-item">

              <span>
                Governance Layer
              </span>

              <strong>
                Operational
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default OperationalLayer;