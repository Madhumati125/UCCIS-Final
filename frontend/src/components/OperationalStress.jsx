import Header from "../components/Header";

export default function OperationalStress() {

  const stressData = [
    35,
    48,
    61,
    74,
    82,
    69
  ];

  return (

    <div className="page-container">

      {/* PAGE HEADER */}

      <Header title="Operational Stress" />

      {/* TOP STATUS */}

      <div className="top-status-strip">

        <div className="status-pill">
          Runtime Stable
        </div>

        <div className="status-pill warning-pill">
          Stress High
        </div>

        <div className="status-pill">
          Recovery Active
        </div>

        <div className="status-pill">
          Confidence 89%
        </div>

      </div>

      {/* STATUS CARDS */}

      <div className="executive-grid">

        {/* SYSTEM LOAD */}

        <div className="executive-card">

          <h4>System Load</h4>

          <h1>82%</h1>

          <span className="danger">
            High Operational Pressure
          </span>

        </div>

        {/* TELEMETRY DELAY */}

        <div className="executive-card">

          <h4>Telemetry Delay</h4>

          <h1>14s</h1>

          <span className="warning">
            Delayed Signal Detection
          </span>

        </div>

        {/* FIELD STABILITY */}

        <div className="executive-card">

          <h4>Field Stability</h4>

          <h1>76%</h1>

          <span className="positive">
            Regional Stress Stabilized
          </span>

        </div>

        {/* RECOVERY */}

        <div className="executive-card">

          <h4>Recovery Confidence</h4>

          <h1>89%</h1>

          <span className="positive">
            Recovery Sequence Active
          </span>

        </div>

      </div>

      {/* STRESS ENGINE */}

      <div className="page-card">

        <h2>
          Operational Stress Analysis
        </h2>

        <p>
          Runtime stress escalation detected across operational districts.
        </p>

        <p>
          Telemetry delay observed in western signal channels.
        </p>

        <p>
          Operational load balancing initiated successfully.
        </p>

        <p>
          Stress recovery stabilization reached 76%.
        </p>

        <p>
          Governance escalation visibility preserved.
        </p>

      </div>

      {/* STRESS TREND CHART */}

      <div className="chart-card">

        <div className="chart-title">
          Operational Stress Trend
        </div>

        <div className="custom-chart">

          {
            stressData.map((item, index) => (

              <div
                key={index}
                className="bar-wrapper"
              >

                <div
                  className="bar"
                  style={{
                    height: `${item * 3}px`
                  }}
                ></div>

                <span>
                  {item}%
                </span>

              </div>

            ))
          }

        </div>

      </div>

      {/* BACKEND RESPONSE */}

      <div className="backend-response">

        <h2>
          Backend API Response
        </h2>

        <pre>
{`
GET /api/stress/status

{
  "system_load": "82%",
  "telemetry_delay": "14s",
  "field_stability": "76%",
  "stress_level": "high"
}

POST /api/stress/recover

{
  "message": "Stress recovery initiated",
  "recovery_confidence": "89%",
  "status": "stabilizing"
}
`}
        </pre>

      </div>

      {/* RUNTIME LOGS */}

      <div className="log-panel">

        <h3>
          Operational Runtime Logs
        </h3>

        <div className="log-item warning-log">
          13:01 Operational load spike detected
        </div>

        <div className="log-item warning-log">
          13:03 Telemetry synchronization delayed
        </div>

        <div className="log-item danger-log">
          13:05 Runtime stress escalation triggered
        </div>

        <div className="log-item">
          13:06 Regional balancing activated
        </div>

        <div className="log-item positive-log">
          13:08 Recovery sequence stabilized
        </div>

        <div className="log-item positive-log">
          13:10 Governance continuity maintained
        </div>

      </div>

    </div>

  );
}