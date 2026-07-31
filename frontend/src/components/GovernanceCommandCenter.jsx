import "../dashboard.css";

export default function GovernanceCommandCenter() {
  return (
    <div className="uccis-root">

      {/* =====================================================
      HEADER
      ===================================================== */}

      <div className="top-header">

        <div>
          <h1 className="main-title">
            UCCIS Governance Command Center
          </h1>

          <p className="main-subtitle">
            Principal Secretary Operational Intelligence Layer
          </p>
        </div>

        <div className="header-right">

          <div className="live-indicator">
            <div className="status-dot"></div>
            LIVE GOVERNANCE STATE
          </div>

        </div>

      </div>

      {/* =====================================================
      KPI ROW
      ===================================================== */}

      <div className="kpi-row">

        <div className="kpi kpi-red">
          <div className="kpi-title">
            Active Critical Alerts
          </div>

          <div className="kpi-value">
            12
          </div>

          <div className="kpi-trend negative">
            +2 escalation spikes detected
          </div>
        </div>

        <div className="kpi kpi-green">
          <div className="kpi-title">
            Infrastructure Health
          </div>

          <div className="kpi-value">
            92%
          </div>

          <div className="kpi-trend positive">
            Stable across 18 districts
          </div>
        </div>

        <div className="kpi kpi-blue">
          <div className="kpi-title">
            Execution Velocity
          </div>

          <div className="kpi-value">
            1.8x
          </div>

          <div className="kpi-trend positive">
            Workflow throughput increased
          </div>
        </div>

        <div className="kpi kpi-yellow">
          <div className="kpi-title">
            Pending Escalations
          </div>

          <div className="kpi-value">
            7
          </div>

          <div className="kpi-trend neutral">
            3 require district approval
          </div>
        </div>

        <div className="kpi kpi-orange">
          <div className="kpi-title">
            Project Delays
          </div>

          <div className="kpi-value">
            5
          </div>

          <div className="kpi-trend negative">
            Infra pipeline affected
          </div>
        </div>

        <div className="kpi kpi-purple">
          <div className="kpi-title">
            Department Efficiency
          </div>

          <div className="kpi-value">
            78%
          </div>

          <div className="kpi-trend positive">
            +6% improvement this week
          </div>
        </div>

      </div>

      {/* =====================================================
      MAIN GRID
      ===================================================== */}

      <div className="main-grid">

        {/* =====================================================
        LEFT SECTION
        ===================================================== */}

        <div className="left-section">

          {/* =====================================================
          OPERATIONAL CORE
          ===================================================== */}

          <div className="panel">

            <div className="panel-header">
              Operational Intelligence Core
            </div>

            <div className="intel-grid">

              <div className="intel-card">
                <div className="intel-title">
                  System Monitoring
                </div>

                <div className="intel-value green">
                  ACTIVE
                </div>
              </div>

              <div className="intel-card">
                <div className="intel-title">
                  Telemetry Stability
                </div>

                <div className="intel-value blue">
                  STABLE
                </div>
              </div>

              <div className="intel-card">
                <div className="intel-title">
                  Replay Continuity
                </div>

                <div className="intel-value green">
                  VERIFIED
                </div>
              </div>

              <div className="intel-card">
                <div className="intel-title">
                  AI Observation Layer
                </div>

                <div className="intel-value yellow">
                  MONITORING
                </div>
              </div>

            </div>

            <div className="recommendation-text">
              Governance systems operating within acceptable
              operational thresholds. No statewide instability
              detected at this time.
            </div>

          </div>

          {/* =====================================================
          OPERATIONAL REPLAY TIMELINE
          ===================================================== */}

          <div className="panel">

            <div className="panel-header">
              Operational Replay Timeline
            </div>

            <div className="timeline-wrapper">

              <div className="timeline-event">

                <div className="timeline-left">
                  <div className="timeline-dot critical-dot"></div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">

                  <div className="timeline-time">
                    10:00 AM
                  </div>

                  <div className="timeline-title">
                    Infrastructure Escalation Triggered
                  </div>

                  <div className="timeline-description">
                    Zone 3 power instability exceeded
                    operational threshold.
                  </div>

                </div>

              </div>

              <div className="timeline-event">

                <div className="timeline-left">
                  <div className="timeline-dot high-dot"></div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">

                  <div className="timeline-time">
                    10:15 AM
                  </div>

                  <div className="timeline-title">
                    District Transport Alert
                  </div>

                  <div className="timeline-description">
                    Transport approval delay detected
                    in regional corridor.
                  </div>

                </div>

              </div>

              <div className="timeline-event">

                <div className="timeline-left">
                  <div className="timeline-dot medium-dot"></div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">

                  <div className="timeline-time">
                    10:30 AM
                  </div>

                  <div className="timeline-title">
                    Water Distribution Recovery
                  </div>

                  <div className="timeline-description">
                    AI-assisted balancing restored
                    operational flow stability.
                  </div>

                </div>

              </div>

              <div className="timeline-event">

                <div className="timeline-left">
                  <div className="timeline-dot stable-dot"></div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">

                  <div className="timeline-time">
                    10:45 AM
                  </div>

                  <div className="timeline-title">
                    Health Infrastructure Balanced
                  </div>

                  <div className="timeline-description">
                    Load balancing successfully distributed
                    emergency capacity.
                  </div>

                </div>

              </div>

              <div className="timeline-event">

                <div className="timeline-left">
                  <div className="timeline-dot ai-dot"></div>
                </div>

                <div className="timeline-content">

                  <div className="timeline-time">
                    11:15 AM
                  </div>

                  <div className="timeline-title">
                    Governance AI Replay Completed
                  </div>

                  <div className="timeline-description">
                    Replay continuity verification
                    completed successfully.
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
          LIVE FEED
          ===================================================== */}

          <div className="panel">

            <div className="panel-header">
              Live Operational Feed
            </div>

            <div className="feed-list">

              <div className="feed-item">
                <div className="feed-dot red"></div>
                Power fluctuation detected in Zone 3
              </div>

              <div className="feed-item">
                <div className="feed-dot yellow"></div>
                Transport escalation pending approval
              </div>

              <div className="feed-item">
                <div className="feed-dot green"></div>
                Water distribution stabilized
              </div>

              <div className="feed-item">
                <div className="feed-dot blue"></div>
                AI governance sync completed
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
        RIGHT SECTION
        ===================================================== */}

        <div className="right-section">

          {/* =====================================================
          COMMAND STATUS PANEL
          ===================================================== */}

          <div className="panel">

            <div className="panel-header">
              Command Status Panel
            </div>

            <div className="summary-grid">

              <div className="summary-card">
                <div className="summary-title">
                  System Load
                </div>

                <div className="summary-value green">
                  NORMAL
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-title">
                  Data Sync
                </div>

                <div className="summary-value blue">
                  ACTIVE
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-title">
                  Alert Engine
                </div>

                <div className="summary-value yellow">
                  MONITORING
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-title">
                  AI Layer
                </div>

                <div className="summary-value purple">
                  STANDBY
                </div>
              </div>

            </div>

          </div>

          {/* =====================================================
          ESCALATION HEATMAP
          ===================================================== */}

          <div className="panel">

            <div className="panel-header">
              Escalation Heatmap
            </div>

            <div className="heatmap-container">

              <div className="heatmap-row">

                <div className="heat-cell critical">
                  <span>Infrastructure</span>
                  <strong>92%</strong>
                </div>

                <div className="heat-cell high">
                  <span>Transport</span>
                  <strong>81%</strong>
                </div>

                <div className="heat-cell medium">
                  <span>Energy</span>
                  <strong>64%</strong>
                </div>

              </div>

              <div className="heatmap-row">

                <div className="heat-cell medium">
                  <span>Water</span>
                  <strong>58%</strong>
                </div>

                <div className="heat-cell low">
                  <span>Healthcare</span>
                  <strong>34%</strong>
                </div>

                <div className="heat-cell low">
                  <span>Education</span>
                  <strong>28%</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}