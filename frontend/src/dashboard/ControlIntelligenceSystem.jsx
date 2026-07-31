import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";

const phaseList = [
  "Overview",
  "Phase 1",
  "Phase 2",
  "Phase 3",
  "Phase 4",
  "Phase 5",
  "Phase 6",
  "Phase 7",
];

const trendData = [
  { name: "Mon", value: 62 },
  { name: "Tue", value: 71 },
  { name: "Wed", value: 69 },
  { name: "Thu", value: 80 },
  { name: "Fri", value: 76 },
  { name: "Sat", value: 88 },
  { name: "Sun", value: 91 },
];

const escalationData = [
  { name: "Critical", value: 4 },
  { name: "Medium", value: 9 },
  { name: "Low", value: 16 },
];

const departmentData = [
  { name: "Police", value: 84 },
  { name: "Health", value: 72 },
  { name: "Transport", value: 65 },
  { name: "Disaster", value: 91 },
  { name: "Power", value: 58 },
];

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

export default function ControlIntelligenceSystem() {
  const [selectedPhase, setSelectedPhase] = useState("Overview");

  const [runtimeData, setRuntimeData] = useState({
    health: 78,
    operators: 29,
    escalations: 1,
    runtime: "ACTIVE",
    heartbeat: 93,
    refresh: new Date().toISOString(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRuntimeData({
        health: Math.floor(Math.random() * 20) + 75,
        operators: Math.floor(Math.random() * 10) + 25,
        escalations: Math.floor(Math.random() * 6) + 1,
        runtime: "ACTIVE",
        heartbeat: Math.floor(Math.random() * 10) + 90,
        refresh: new Date().toISOString(),
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderOverview = () => {
    return (
      <>
        {/* STATUS GRID */}

        <div className="status-grid">
          <div className="status-card">
            <h3>Operational Health</h3>
            <h1>{runtimeData.health}%</h1>
            <p>Stable Runtime</p>
          </div>

          <div className="status-card">
            <h3>Active Operators</h3>
            <h1>{runtimeData.operators}</h1>
            <p>Connected Units</p>
          </div>

          <div className="status-card">
            <h3>Escalations</h3>
            <h1>{runtimeData.escalations}</h1>
            <p>Live Runtime Events</p>
          </div>
        </div>

        {/* COMMAND GRID */}

        <div className="command-grid">
          {/* TREND */}

          <div className="command-card">

  <div className="card-header">
    <h2>Operational Trend</h2>
    <span>LIVE</span>
  </div>

  <div
    className="chart-box"
    style={{
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    <AreaChart
      width={900}
      height={300}
      data={trendData}
      margin={{
        top: 20,
        right: 20,
        left: 10,
        bottom: 10,
      }}
    >

      <defs>
        <linearGradient
          id="colorTrend"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="5%"
            stopColor="#38bdf8"
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor="#38bdf8"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>

      <CartesianGrid
        stroke="#1e293b"
        strokeDasharray="3 3"
      />

      <XAxis
        dataKey="name"
        stroke="#94a3b8"
        tick={{
          fill: "#94a3b8",
          fontSize: 13,
        }}
      />

      <YAxis
        stroke="#94a3b8"
        tick={{
          fill: "#94a3b8",
          fontSize: 13,
        }}
      />

      <Tooltip
        contentStyle={{
          background: "#081426",
          border: "1px solid #1e293b",
          borderRadius: "10px",
          color: "#ffffff",
        }}
        labelStyle={{
          color: "#38bdf8",
        }}
        itemStyle={{
          color: "#ffffff",
        }}
      />

      <Area
        type="monotone"
        dataKey="value"
        stroke="#38bdf8"
        strokeWidth={3}
        fill="url(#colorTrend)"
        fillOpacity={1}
      />

    </AreaChart>

  </div>

</div>

          {/* ESCALATION */}

          <div className="command-card">
            <div className="card-header">
              <h2>Escalation Matrix</h2>
              <span>REALTIME</span>
            </div>

            <div className="chart-box">
              <div style={{ width: "100%", height: 320 }}>
                <PieChart width={420} height={320}>
                  <Pie
                    data={escalationData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {escalationData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW GRID */}

        <div className="overview-grid">
          {/* MAP */}

          <div className="panel map-panel">
            <div className="card-header">
              <h2>GIS Operational Surface</h2>
              <span>TRACKING</span>
            </div>

            <div className="map-box">
              <div className="map-grid"></div>

              <div className="map-dot dot1"></div>
              <div className="map-dot dot2"></div>
              <div className="map-dot dot3"></div>
              <div className="map-dot dot4"></div>
            </div>
          </div>

          {/* INTELLIGENCE */}

          <div className="panel">
            <div className="card-header">
              <h2>Department Intelligence</h2>
              <span>AI ANALYSIS</span>
            </div>

            <div className="intel-grid">
              <div className="intel-card">
                <span>District Stability</span>
                <h3>89%</h3>
              </div>

              <div className="intel-card">
                <span>Telemetry Integrity</span>
                <h3>94%</h3>
              </div>

              <div className="intel-card">
                <span>Signal Accuracy</span>
                <h3>91%</h3>
              </div>

              <div className="intel-card">
                <span>Replay Continuity</span>
                <h3>96%</h3>
              </div>
            </div>
          </div>
        </div>

        {/* DEPARTMENT PERFORMANCE */}

        <div className="panel">
          <div className="card-header">
            <h2>Department Performance Matrix</h2>
            <span>EXECUTIVE VIEW</span>
          </div>

          <div className="chart-box"
  style={{
    width: "100%",
    height: "320px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <BarChart
    width={900}
    height={320}
    data={departmentData}
    margin={{
      top: 20,
      right: 20,
      left: 20,
      bottom: 20,
    }}
  >
    <CartesianGrid
      stroke="#1e293b"
      strokeDasharray="3 3"
    />

    <XAxis
      dataKey="name"
      stroke="#94a3b8"
      tick={{
        fill: "#94a3b8",
        fontSize: 13,
      }}
    />

    <YAxis
      stroke="#94a3b8"
      tick={{
        fill: "#94a3b8",
        fontSize: 13,
      }}
    />

    <Tooltip
      contentStyle={{
        background: "#081426",
        border: "1px solid #1e293b",
        borderRadius: "10px",
        color: "#ffffff",
      }}
      labelStyle={{
        color: "#3b82f6",
      }}
      itemStyle={{
        color: "#ffffff",
      }}
    />

    <Bar
      dataKey="value"
      fill="#3b82f6"
      radius={[10, 10, 0, 0]}
      barSize={45}
    />

  </BarChart>
</div>
</div>

        {/* PHASE SUMMARY */}

        <div className="panel">
          <div className="card-header">
            <h2>Governance Capability Layers</h2>
            <span>PHASE STATUS</span>
          </div>

          <div className="phase-overview-grid">
            <div className="phase-mini-card">
              <h3>Phase 1</h3>
              <p>Canonical repository consolidation complete.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 2</h3>
              <p>Operational chain execution validated.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 3</h3>
              <p>Feature growth and intelligence layers active.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 4</h3>
              <p>Hardening and degraded runtime handling enabled.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 5</h3>
              <p>Live operational heartbeat and ticker streaming.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 6</h3>
              <p>Command-center dashboard maturity expanded.</p>
            </div>

            <div className="phase-mini-card">
              <h3>Phase 7</h3>
              <p>Testing, evidence, and runtime validation active.</p>
            </div>

            <div className="phase-mini-card">
              <h3>System</h3>
              <p>Unified governance intelligence runtime operational.</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderPhaseView = () => {
    return (
      <>
        <div className="status-grid">
          <div className="status-card">
            <h3>{selectedPhase} Runtime</h3>
            <h1>ACTIVE</h1>
            <p>Operational Layer Running</p>
          </div>

          <div className="status-card">
            <h3>API Response Time</h3>
            <h1>42ms</h1>
            <p>Healthy Runtime</p>
          </div>

          <div className="status-card">
            <h3>Data Integrity</h3>
            <h1>96%</h1>
            <p>Validated Replay Layer</p>
          </div>
        </div>

        <div className="command-grid">
         <div className="command-card">

  <div className="card-header">
    <h2>{selectedPhase} Telemetry</h2>
    <span>LIVE</span>
  </div>

  <div
    className="chart-box"
    style={{
      width: "100%",
      height: "320px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    <LineChart
      width={900}
      height={320}
      data={trendData}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 20,
      }}
    >

      <CartesianGrid
        stroke="#1e293b"
        strokeDasharray="3 3"
      />

      <XAxis
        dataKey="name"
        stroke="#94a3b8"
        tick={{
          fill: "#94a3b8",
          fontSize: 13,
        }}
      />

      <YAxis
        stroke="#94a3b8"
        tick={{
          fill: "#94a3b8",
          fontSize: 13,
        }}
      />

      <Tooltip
        contentStyle={{
          background: "#081426",
          border: "1px solid #1e293b",
          borderRadius: "10px",
          color: "#ffffff",
        }}
        labelStyle={{
          color: "#38bdf8",
        }}
        itemStyle={{
          color: "#ffffff",
        }}
      />

      <Line
        type="monotone"
        dataKey="value"
        stroke="#38bdf8"
        strokeWidth={4}
        dot={{
          r: 5,
          fill: "#38bdf8",
        }}
        activeDot={{
          r: 7,
          fill: "#38bdf8",
        }}
      />

    </LineChart>

  </div>

</div>

          <div className="command-card">
            <div className="card-header">
              <h2>{selectedPhase} API Runtime</h2>
              <span>JSON</span>
            </div>

            <div className="json-box">
              <pre>
{JSON.stringify(
{
  phase: selectedPhase,
  runtime: "ACTIVE",
  telemetry: "CONNECTED",
  replay: "VALIDATED",
  escalation: "HEALTHY",
  heartbeat: runtimeData.heartbeat,
  refresh: runtimeData.refresh,
},
null,
2
)}
              </pre>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="card-header">
            <h2>{selectedPhase} Runtime Events</h2>
            <span>EVENT STREAM</span>
          </div>

          <div className="event-card">
            <div>
              <h3>Telemetry Updated</h3>
              <p>Operational synchronization successful.</p>
            </div>

            <span>{runtimeData.refresh}</span>
          </div>

          <div className="event-card">
            <div>
              <h3>Replay Validation</h3>
              <p>Replay continuity verified.</p>
            </div>

            <span>{runtimeData.refresh}</span>
          </div>

          <div className="event-card">
            <div>
              <h3>Escalation Intelligence</h3>
              <p>Runtime escalation processed.</p>
            </div>

            <span>{runtimeData.refresh}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}

      <aside className="sidebar">
        <div className="sidebar-logo">UCCIS</div>

        <div className="sidebar-menu">
          {phaseList.map((phase) => (
            <button
              key={phase}
              className={
                selectedPhase === phase
                  ? "sidebar-btn active"
                  : "sidebar-btn"
              }
              onClick={() => setSelectedPhase(phase)}
            >
              {phase}
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN */}

      <main className="dashboard-main">
        {/* TOPBAR */}

        <div className="topbar">
          <div className="topbar-left">
            <h1 className="main-title">UCCIS</h1>

            <p className="subtitle">
              Unified Command & Control Intelligence System
            </p>
          </div>

          <div className="runtime-badge">
            {runtimeData.runtime}
          </div>
        </div>

        {/* ACTIONS */}

        <div className="action-bar">
          <button className="signal-btn">
            Generate Signal
          </button>

          <button className="reset-btn">
            Reset Runtime
          </button>
        </div>

        {/* PHASE CONTENT */}

        {selectedPhase === "Overview"
          ? renderOverview()
          : renderPhaseView()}
      </main>
    </div>
  );
}