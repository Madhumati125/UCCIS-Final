import React from "react";
import "../styles/national.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const operationalData = [
  { city: "Pune", value: 120 },
  { city: "Mumbai", value: 220 },
  { city: "Nashik", value: 80 },
  { city: "Nagpur", value: 150 },
];

const telemetryData = [
  { time: "10:00", signals: 30 },
  { time: "10:30", signals: 50 },
  { time: "11:00", signals: 75 },
  { time: "11:30", signals: 65 },
  { time: "12:00", signals: 95 },
  { time: "12:30", signals: 120 },
];

export default function OperationalSystem() {
  return (
    <div className="dashboard">

      {/* ================================================= */}
      {/* LIVE TOP STRIP */}
      {/* ================================================= */}

      {/* <div className="live-strip">
        LIVE • Phase Signal Escalation • Number Drift •
        Telemetry Sync • Operator Escalation Integrated
      </div> */}

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="dashboard-header">

        <div>
          <h1 className="dashboard-title">
            UCCIS Governance Command Center
          </h1>

          <p className="dashboard-subtitle">
            National Integrated Operational Intelligence Platform
          </p>
        </div>

        {/* <div className="live-status">
          LIVE • ACTIVE
        </div> */}

      </div>

      {/* ================================================= */}
      {/* STATS */}
      {/* ================================================= */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-label">
            ACTIVE OPERATIONS
          </div>

          <div className="stat-value">
            19
          </div>

          <div className="stat-sub">
            +4 Operational Surges
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            ESCALATIONS
          </div>

          <div className="stat-value">
            27
          </div>

          <div className="stat-sub">
            Realtime Signal Tracking
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            TELEMETRY SIGNALS
          </div>

          <div className="stat-value">
            480
          </div>

          <div className="stat-sub">
            Live Sensor Synchronization
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            SYSTEM STATUS
          </div>

          <div className="stat-value">
            ACTIVE
          </div>

          <div className="stat-sub">
            Runtime Stable
          </div>
        </div>

      </div>

      {/* ================================================= */}
      {/* MAIN GRID */}
      {/* ================================================= */}

      <div className="main-grid">

        {/* ============================================= */}
        {/* OPERATIONAL TREND */}
        {/* ============================================= */}

        <div className="panel">
  <div className="panel-title">
    Operational Trend
  </div>

  <div className="chart-box">
    <BarChart
  width={760}
  height={320}
  data={operationalData}
  margin={{
    top: 20,
    right: 20,
    left: 30,
    bottom: 40,
  }}
>
  <XAxis
    dataKey="city"
    stroke="#7aa6d1"
    tick={{ fill: "#7aa6d1" }}
    label={{
      value: "City",
      position: "insideBottom",
      offset: -25,
      fill: "#7aa6d1",
    }}
  />

  <YAxis
    stroke="#7aa6d1"
    tick={{ fill: "#7aa6d1" }}
    label={{
      value: "Operational Value",
      angle: -90,
      position: "insideLeft",
      offset: 5,
      fill: "#7aa6d1",
    }}
  />

  <Tooltip />

  <Bar
    dataKey="value"
    fill="#00cfff"
    radius={[8, 8, 0, 0]}
  />
</BarChart>
  </div>
</div>

        {/* ============================================= */}
        {/* LIVE TELEMETRY */}
        {/* ============================================= */}

        <div className="panel">

          <div className="panel-title">
            Live Telemetry
          </div>

          <div className="chart-box">
  <div style={{ width: "100%", height: "360px" }}>
    <AreaChart
      width={760}
      height={320}
      data={telemetryData}
    >
      <defs>
        <linearGradient id="colorSignals" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00cfff" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#00cfff" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
      <XAxis dataKey="time" stroke="#7aa6d1" 
        label={{
    value: "Time",
    position: "insideBottom",
    offset: -10,
    fill: "#7aa6d1",
  }}
      />
      <YAxis stroke="#7aa6d1" 
        label={{
    value: "Signal Strength",
    angle: -90,
    position: "insideLeft",
    fill: "#7aa6d1",
  }}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="signals"
        stroke="#00cfff"
        fill="url(#colorSignals)"
        fillOpacity={1}
      />
    </AreaChart>
  </div>
</div>
</div>

      </div>

      {/* ================================================= */}
      {/* HEATMAP */}
      {/* ================================================= */}

      <div className="panel">

        <div className="panel-title">
          Escalation Heatmap
        </div>

        <div className="heatmap-grid">

          <div className="heat-card heat-critical">
            <div className="heat-city">Mumbai</div>
            <div className="heat-alerts">18 Alerts</div>
          </div>

          <div className="heat-card heat-critical">
            <div className="heat-city">Pune</div>
            <div className="heat-alerts">12 Alerts</div>
          </div>

          <div className="heat-card heat-medium">
            <div className="heat-city">Nagpur</div>
            <div className="heat-alerts">10 Alerts</div>
          </div>

          <div className="heat-card heat-medium">
            <div className="heat-city">Nashik</div>
            <div className="heat-alerts">7 Alerts</div>
          </div>

          <div className="heat-card heat-low">
            <div className="heat-city">Kolhapur</div>
            <div className="heat-alerts">5 Alerts</div>
          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOTTOM GRID */}
      {/* ================================================= */}

      <div className="bottom-grid">

        {/* ============================================= */}
        {/* TIMELINE */}
        {/* ============================================= */}

        <div className="panel">

          <div className="panel-title">
            Operational Replay Timeline
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-title">
                Signal Replay Executed
              </div>

              <div className="timeline-time">
                2026-05-28 11:20:00
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-title">
                Escalation Route Activated
              </div>

              <div className="timeline-time">
                2026-05-28 11:25:00
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-title">
                Telemetry Sync Completed
              </div>

              <div className="timeline-time">
                2026-05-28 11:35:00
              </div>
            </div>

          </div>

        </div>

        {/* ============================================= */}
        {/* LIVE FEED */}
        {/* ============================================= */}

        <div className="panel">

          <div className="panel-title">
            Live Telemetry Feed
          </div>

          <div className="feed-grid">

            <div className="feed-card">

              <div className="feed-title">
                Pune CCTV Grid
              </div>

              <div className="feed-meta">

                <div className="feed-severity severity-high">
                  HIGH
                </div>

                <div className="feed-location">
                  District: Pune
                </div>

              </div>

              <div className="feed-desc">
                Abnormal signal spike detected in
                surveillance zone cluster.
              </div>

            </div>

            <div className="feed-card">

              <div className="feed-title">
                Traffic Monitoring
              </div>

              <div className="feed-meta">

                <div className="feed-severity severity-medium">
                  MEDIUM
                </div>

                <div className="feed-location">
                  District: Mumbai
                </div>

              </div>

              <div className="feed-desc">
                Runtime telemetry fluctuation observed
                across transport sensors.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}