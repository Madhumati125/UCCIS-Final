import Header from "../components/Header";

export default function ExecutiveOverview() {
  return (
    <div>

      <Header title="PRINCIPAL SECRETARY DASHBOARD" />

      {/* =======================================================
      TOP STATUS STRIP
      ======================================================= */}

      <div className="top-status-strip">

        <div className="status-pill">
          Replay Stable
        </div>

        <div className="status-pill warning-pill">
          Entropy 12%
        </div>

        <div className="status-pill">
          Confidence 92%
        </div>

      </div>

      {/* =======================================================
      TOP METRIC CARDS
      ======================================================= */}

      <div className="executive-grid">

        <div className="executive-card">
          <h4>TOTAL CITIES & ULBs</h4>
          <h1>398</h1>
          <span className="positive">
            Urban Local Bodies
          </span>
          <button className="card-btn">
            View Details
          </button>
        </div>

        <div className="executive-card">
          <h4>TOTAL POPULATION</h4>
          <h1>1.28 Cr</h1>
          <span className="positive">
            Urban Population
          </span>
        </div>

        <div className="executive-card">
          <h4>TOTAL PROJECTS</h4>
          <h1>1,247</h1>
          <span className="positive">
            Active Projects
          </span>
        </div>

        <div className="executive-card">
          <h4>TOTAL BUDGET (FY 24-25)</h4>
          <h1>₹ 48,752 Cr</h1>
          <span className="positive">
            Allocated Budget
          </span>
        </div>

        <div className="executive-card">
          <h4>BUDGET UTILIZATION</h4>
          <h1>78.4%</h1>
          <span className="positive">
            ₹ 38,205 Cr Utilized
          </span>
        </div>

        <div className="executive-card">
          <h4>PENDING APPROVALS</h4>
          <h1>56</h1>
          <span className="warning">
            Awaiting Review
          </span>
        </div>

        <div className="executive-card">
          <h4>ACTIVE ALERTS</h4>
          <h1>128</h1>
          <span className="danger">
            Requiring Attention
          </span>
        </div>

      </div>

      {/* =======================================================
      MAP + PRIORITIES + ALERTS + PERFORMANCE
      ======================================================= */}

      <div className="overview-main-grid">

        {/* MAP */}

        <div className="map-panel">

          <div className="section-header">

            <h2>
              STATE OVERVIEW MAP
            </h2>

            <div className="live-indicator">
              LIVE TELEMETRY
            </div>

          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/16/Maharashtra_map.png"
            alt="map"
            className="map-image"
          />

        </div>

        {/* PRIORITIES */}

        <div className="priority-panel">

          <div className="section-header">

            <h2>
              TOP OPERATIONAL PRIORITIES
            </h2>

          </div>

          <div className="priority-grid">

            <div className="priority-item">
              Water Supply Disruption
              <span>23 Districts</span>
            </div>

            <div className="priority-item warning-alert">
              Flood Risk Areas
              <span>19 Districts</span>
            </div>

            <div className="priority-item danger-alert">
              Waste Management Alerts
              <span>15 Districts</span>
            </div>

            <div className="priority-item">
              Traffic Congestion
              <span>12 Districts</span>
            </div>

            <div className="priority-item warning-alert">
              Sewage Overflow
              <span>9 Districts</span>
            </div>

          </div>

          <button className="card-btn">
            View All Priorities
          </button>

        </div>

        {/* ALERTS */}

        <div className="alerts-panel">

          <div className="section-header">

            <h2>
              ALERTS & ESCALATIONS
            </h2>

          </div>

          <div className="alerts-grid">

            <div className="alert danger-alert">
              Flood Alert — Kolhapur
            </div>

            <div className="alert warning-alert">
              Water Disruption — Pune
            </div>

            <div className="alert">
              Waste Overflow — Nagpur
            </div>

            <div className="alert warning-alert">
              Sewage Overflow — Mumbai
            </div>

            <div className="alert danger-alert">
              Building Delay — Thane
            </div>

          </div>

          <button className="card-btn">
            View All Alerts
          </button>

        </div>

        {/* DEPARTMENT PERFORMANCE */}

        <div className="department-panel">

          <div className="section-header">

            <h2>
              DEPARTMENTWISE PERFORMANCE
            </h2>

          </div>

          <div className="department-list">

            <div className="department-row">
              <span>Water Supply</span>

              <div className="progress-bar">
                <div
                  className="progress-fill blue-fill"
                  style={{ width: "76%" }}
                ></div>
              </div>

              <span>76%</span>
            </div>

            <div className="department-row">
              <span>Sewerage</span>

              <div className="progress-bar">
                <div
                  className="progress-fill green-fill"
                  style={{ width: "72%" }}
                ></div>
              </div>

              <span>72%</span>
            </div>

            <div className="department-row">
              <span>Urban Development</span>

              <div
                className="progress-bar"
              >
                <div
                  className="progress-fill yellow-fill"
                  style={{ width: "68%" }}
                ></div>
              </div>

              <span>68%</span>
            </div>

            <div className="department-row">
              <span>Road Infrastructure</span>

              <div className="progress-bar">
                <div
                  className="progress-fill purple-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>

              <span>65%</span>
            </div>

            <div className="department-row">
              <span>Environment</span>

              <div className="progress-bar">
                <div
                  className="progress-fill cyan-fill"
                  style={{ width: "61%" }}
                ></div>
              </div>

              <span>61%</span>
            </div>

          </div>

          <button className="card-btn">
            View Department Performance
          </button>

        </div>

      </div>

      {/* =======================================================
      KPI + PROJECT STATUS + DELAY
      ======================================================= */}

      <div className="dual-grid">

        {/* KPI */}

        <div className="pie-card">

          <div className="section-header">

            <h2>
              KEY PERFORMANCE INDICATORS
            </h2>

          </div>

          <div className="kpi-grid">

            <div className="kpi-circle">
              <div className="circle green-circle">
                87%
              </div>
              <p>Water Supply</p>
            </div>

            <div className="kpi-circle">
              <div className="circle blue-circle">
                76%
              </div>
              <p>Sewerage</p>
            </div>

            <div className="kpi-circle">
              <div className="circle yellow-circle">
                68%
              </div>
              <p>Waste Processing</p>
            </div>

            <div className="kpi-circle">
              <div className="circle purple-circle">
                72%
              </div>
              <p>Road Infrastructure</p>
            </div>

          </div>

          <button className="card-btn">
            View All KPIs
          </button>

        </div>

        {/* PROJECT STATUS */}

        <div className="pie-card">

          <div className="section-header">

            <h2>
              PROJECT STATUS
            </h2>

          </div>

          <div className="pie-chart status-chart"></div>

          <div className="legend">

            <div className="legend-item">
              <div className="legend-color green"></div>
              Completed
            </div>

            <div className="legend-item">
              <div className="legend-color blue"></div>
              In Progress
            </div>

            <div className="legend-item">
              <div className="legend-color red"></div>
              Delayed
            </div>

          </div>

          <button className="card-btn">
            View All Projects
          </button>

        </div>

        {/* DELAY IMPACT */}

        <div className="pie-card">

          <div className="section-header">

            <h2>
              DELAY IMPACT
            </h2>

          </div>

          <div className="pie-chart delay-chart"></div>

          <div className="legend">

            <div className="legend-item">
              <div className="legend-color red"></div>
              High Impact
            </div>

            <div className="legend-item">
              <div className="legend-color yellow"></div>
              Medium Impact
            </div>

            <div className="legend-item">
              <div className="legend-color blue"></div>
              Low Impact
            </div>

          </div>

          <button className="card-btn">
            View Delay Analysis
          </button>

        </div>

      </div>

      {/* =======================================================
      PROJECT DELAYS
      ======================================================= */}

      <div className="page-card">

        <div className="section-header">

          <h2>
            PROJECT DELAYS — TOP REASONS
          </h2>

        </div>

        <div className="delay-list">

          <div className="delay-item">
            Land Acquisition — 125
          </div>

          <div className="delay-item">
            Utility Shifting — 98
          </div>

          <div className="delay-item">
            Approval Delays — 87
          </div>

          <div className="delay-item">
            Contractor Performance — 76
          </div>

          <div className="delay-item">
            Fund Release Delays — 62
          </div>

        </div>

      </div>

      {/* =======================================================
      BOTTOM GRID
      ======================================================= */}

      <div className="bottom-grid">

        {/* GRIEVANCES */}

        <div className="page-card">

          <div className="section-header">

            <h2>
              GRIEVANCES OVERVIEW
            </h2>

          </div>

          <div className="line-chart">

            <div
              className="line-point"
              style={{
                left: "10%",
                bottom: "30%"
              }}
            ></div>

            <div
              className="line-point"
              style={{
                left: "25%",
                bottom: "40%"
              }}
            ></div>

            <div
              className="line-point"
              style={{
                left: "40%",
                bottom: "65%"
              }}
            ></div>

            <div
              className="line-point"
              style={{
                left: "55%",
                bottom: "48%"
              }}
            ></div>

            <div
              className="line-point"
              style={{
                left: "70%",
                bottom: "72%"
              }}
            ></div>

            <div
              className="line-point"
              style={{
                left: "85%",
                bottom: "60%"
              }}
            ></div>

          </div>

          <button className="card-btn">
            View Grievance Dashboard
          </button>

        </div>

        {/* ESCALATION MATRIX */}

        <div className="page-card">

          <div className="section-header">

            <h2>
              ESCALATION MATRIX
            </h2>

          </div>

          <table className="matrix-table">

            <thead>
              <tr>
                <th>Level</th>
                <th>Low</th>
                <th>Medium</th>
                <th>High</th>
                <th>Critical</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Level 1</td>
                <td>23</td>
                <td>18</td>
                <td>6</td>
                <td>2</td>
              </tr>

              <tr>
                <td>Level 2</td>
                <td>15</td>
                <td>21</td>
                <td>9</td>
                <td>3</td>
              </tr>

              <tr>
                <td>Level 3</td>
                <td>7</td>
                <td>14</td>
                <td>11</td>
                <td>4</td>
              </tr>

            </tbody>

          </table>

          <button className="card-btn">
            View Escalation Matrix
          </button>

        </div>

        {/* FIELD EXECUTION */}

        <div className="page-card">

          <div className="section-header">

            <h2>
              FIELD EXECUTION STATUS
            </h2>

          </div>

          <div className="pie-chart field-chart"></div>

          <button className="card-btn">
            View Field Execution
          </button>

        </div>

        {/* RECENT ESCALATIONS */}

        <div className="page-card">

          <div className="section-header">

            <h2>
              RECENT ESCALATIONS
            </h2>

          </div>

          <div className="alerts-grid">

            <div className="alert danger-alert">
              Drainage Overflow — Mumbai
            </div>

            <div className="alert warning-alert">
              Water Leakage — Pimpri
            </div>

            <div className="alert">
              Garbage Overflow — Nagpur
            </div>

            <div className="alert">
              Road Damage — Aurangabad
            </div>

            <div className="alert warning-alert">
              Street Light Outage — Nashik
            </div>

          </div>

          <button className="card-btn">
            View All Escalations
          </button>

        </div>

      </div>

    </div>
  );
}