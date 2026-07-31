import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import SidebarTask22 from "../components/SidebarTask22";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  Activity,
  AlertTriangle,
  Database,
  MapPinned,
  ShieldAlert,
  ServerCrash,
  Waves,
  TrafficCone,
  Trash2,
  Cpu,
  PlayCircle,
  RefreshCw,
} from "lucide-react";

import "./Civic.css";

const CivicIntelligenceSystem = () => {
  /*
  =========================================================
  STATES
  =========================================================
  */

  const [phase, setPhase] =
    useState("PHASE 1");

  const [telemetry, setTelemetry] =
    useState([]);

  const [escalations, setEscalations] =
    useState([]);

  const [replay, setReplay] =
    useState([]);

  const [runtime, setRuntime] =
    useState({});

  const [logs, setLogs] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /*
  =========================================================
  LOAD DATA
  =========================================================
  */

  useEffect(() => {
    loadAllData();

    const interval =
      setInterval(() => {
        loadAllData();
      }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  const loadAllData = async () => {
    try {
      setLoading(true);

      const telemetryRes =
        await axios.get(
          "http://localhost:5000/api/telemetry"
        );

      const escalationRes =
        await axios.get(
          "http://localhost:5000/api/escalations"
        );

      const replayRes =
        await axios.get(
          "http://localhost:5000/api/replay"
        );

      const runtimeRes =
        await axios.get(
          "http://localhost:5000/api/runtime"
        );

      const logsRes =
        await axios.get(
          "http://localhost:5000/api/runtime/logs"
        );

      setTelemetry(
        telemetryRes.data.data || []
      );

      setEscalations(
        escalationRes.data.data || []
      );

      setReplay(
        replayRes.data.data || []
      );

      setRuntime(
        runtimeRes.data.runtime || {}
      );

      setLogs(
        logsRes.data.logs || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /*
  =========================================================
  PHASE DATA
  =========================================================
  */

  const phaseData = {
    "PHASE 1": {
      totalSignals: 84,
      activeSignals: 68,
      degraded: 12,
      escalations: 4,

      lineData: [
        {
          name: "DB-01",
          latency: 42,
        },
        {
          name: "DB-02",
          latency: 39,
        },
        {
          name: "DB-03",
          latency: 50,
        },
        {
          name: "DB-04",
          latency: 45,
        },
      ],

      pieData: [
        {
          name: "Healthy",
          value: 78,
        },
        {
          name: "Degraded",
          value: 22,
        },
      ],

      barData: [
        {
          district:
            "Pune Central",
          health: 92,
        },
        {
          district:
            "Shivajinagar",
          health: 88,
        },
        {
          district: "Kothrud",
          health: 81,
        },
        {
          district: "Baner",
          health: 76,
        },
      ],
    },

    "PHASE 2": {
      totalSignals: 146,
      activeSignals: 118,
      degraded: 19,
      escalations: 9,

      lineData: [
        {
          name: "TEL-01",
          latency: 58,
        },
        {
          name: "TEL-02",
          latency: 62,
        },
        {
          name: "TEL-03",
          latency: 44,
        },
        {
          name: "TEL-04",
          latency: 66,
        },
      ],

      pieData: [
        {
          name: "Healthy",
          value: 71,
        },
        {
          name: "Degraded",
          value: 29,
        },
      ],

      barData: [
        {
          district:
            "Hadapsar",
          health: 69,
        },
        {
          district: "Wakad",
          health: 83,
        },
        {
          district:
            "Aundh",
          health: 90,
        },
        {
          district:
            "Pimpri",
          health: 73,
        },
      ],
    },

    "PHASE 3": {
      totalSignals: 284,
      activeSignals: 224,
      degraded: 31,
      escalations: 18,

      lineData: [
        {
          name: "TTG-01",
          latency: 80,
        },
        {
          name: "TTG-02",
          latency: 96,
        },
        {
          name: "TTG-03",
          latency: 74,
        },
        {
          name: "TTG-04",
          latency: 108,
        },
      ],

      pieData: [
        {
          name: "Healthy",
          value: 64,
        },
        {
          name: "Degraded",
          value: 36,
        },
      ],

      barData: [
        {
          district:
            "Yerwada",
          health: 62,
        },
        {
          district:
            "Kharadi",
          health: 90,
        },
        {
          district:
            "Swargate",
          health: 66,
        },
        {
          district: "Nigdi",
          health: 79,
        },
      ],
    },

    "PHASE 4": {
      totalSignals: 348,
      activeSignals: 301,
      degraded: 17,
      escalations: 5,

      lineData: [
        {
          name: "DEMO-01",
          latency: 28,
        },
        {
          name: "DEMO-02",
          latency: 32,
        },
        {
          name: "DEMO-03",
          latency: 36,
        },
        {
          name: "DEMO-04",
          latency: 31,
        },
      ],

      pieData: [
        {
          name: "Healthy",
          value: 89,
        },
        {
          name: "Degraded",
          value: 11,
        },
      ],

      barData: [
        {
          district:
            "Viman Nagar",
          health: 94,
        },
        {
          district:
            "Hinjewadi",
          health: 91,
        },
        {
          district:
            "Chinchwad",
          health: 88,
        },
        {
          district:
            "Pune Central",
          health: 96,
        },
      ],
    },
  };

  const currentData =
    phaseData[phase];

  /*
  =========================================================
  UI
  =========================================================
  */

  return (
    <div className="dashboard-layout">
      {/* =================================================
      SIDEBAR
      ================================================= */}

      <SidebarTask22
        phase={phase}
        setPhase={setPhase}
      />

      {/* =================================================
      MAIN DASHBOARD
      ================================================= */}

      <div className="dashboard-main">
        {/* =================================================
        HEADER
        ================================================= */}

        <header className="top-header">
          <div>
            <h1>
              UCCIS COMMAND
              CENTER
            </h1>

            <p>
              Unified Civic
              Command
              Intelligence
              System
            </p>
          </div>

          <div className="header-actions">
            <button
              className="refresh-btn"
              onClick={loadAllData}
            >
              <RefreshCw
                size={18}
              />

              Refresh Runtime
            </button>
          </div>
        </header>

        {/* =================================================
        PHASE INFO
        ================================================= */}

        <section className="phase-info">
          <h2>{phase}</h2>

          {phase ===
            "PHASE 1" && (
            <p>
              Master DB
              onboarding,
              canonical schema
              alignment,
              governance
              participation and
              ecosystem
              structure
              modeling.
            </p>
          )}

          {phase ===
            "PHASE 2" && (
            <p>
              Operational data
              model
              construction,
              telemetry entity
              mapping and
              escalation chain
              linkage.
            </p>
          )}

          {phase ===
            "PHASE 3" && (
            <p>
              TTG runtime
              participation,
              replay
              reconstruction,
              simulation-driven
              escalation flow
              and operational
              telemetry.
            </p>
          )}

          {phase ===
            "PHASE 4" && (
            <p>
              Demo hardening,
              runtime
              stabilization,
              testing
              readiness and
              review packet
              generation.
            </p>
          )}
        </section>

        {/* =================================================
        BACKEND RESPONSE
        ================================================= */}

        <section className="backend-card">
          <div className="backend-header">
            <Database
              size={22}
            />

            <h2>
              {phase} Backend
              Response
            </h2>
          </div>

          <pre>
            {JSON.stringify(
              {
                runtime_state:
                  runtime.runtime_state ||
                  "RUNNING",

                telemetry_entities:
                  currentData.totalSignals,

                escalations:
                  currentData.escalations,

                replay_entities:
                  replay.length,

                db_status:
                  "CONNECTED",

                governance:
                  "ACTIVE",
              },
              null,
              2
            )}
          </pre>
        </section>

        {/* =================================================
        RUNTIME STRIP
        ================================================= */}

        <section className="runtime-strip">
          <div className="runtime-card">
            <Activity
              size={22}
            />

            <div>
              <h3>
                Runtime State
              </h3>

              <p>
                {runtime.runtime_state ||
                  "RUNNING"}
              </p>
            </div>
          </div>

          <div className="runtime-card">
            <Cpu size={22} />

            <div>
              <h3>
                CPU Load
              </h3>

              <p>
                {runtime.cpu_load ||
                  42}
                %
              </p>
            </div>
          </div>

          <div className="runtime-card">
            <Database
              size={22}
            />

            <div>
              <h3>
                Database
              </h3>

              <p>
                CONNECTED
              </p>
            </div>
          </div>

          <div className="runtime-card">
            <MapPinned
              size={22}
            />

            <div>
              <h3>
                Location
              </h3>

              <p>
                Pune
                Operations
                Zone
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
        METRICS
        ================================================= */}

        <section className="metrics-grid">
          <div className="metric-card">
            <Activity
              size={30}
            />

            <h2>
              {
                currentData.totalSignals
              }
            </h2>

            <p>
              Total Signals
            </p>
          </div>

          <div className="metric-card">
            <ShieldAlert
              size={30}
            />

            <h2>
              {
                currentData.activeSignals
              }
            </h2>

            <p>
              Active Signals
            </p>
          </div>

          <div className="metric-card">
            <ServerCrash
              size={30}
            />

            <h2>
              {
                currentData.degraded
              }
            </h2>

            <p>
              Degraded
              Infrastructure
            </p>
          </div>

          <div className="metric-card">
            <AlertTriangle
              size={30}
            />

            <h2>
              {
                currentData.escalations
              }
            </h2>

            <p>
              Critical
              Escalations
            </p>
          </div>
        </section>

        {/* =================================================
        CHARTS
        ================================================= */}

        <section className="charts-grid">
          {/* ===============================================
          LATENCY GRAPH
          =============================================== */}

          <div className="chart-card">
  <h3>Telemetry Latency</h3>

  <LineChart
    width={760}
    height={320}
    data={currentData.lineData}
    margin={{
      top: 20,
      right: 20,
      left: 20,
      bottom: 20,
    }}
  >
    <CartesianGrid
      strokeDasharray="3 3"
      stroke="#334155"
    />

    <XAxis
      dataKey="name"
      stroke="#94a3b8"
    />

    <YAxis
      stroke="#94a3b8"
    />

    <Tooltip
      contentStyle={{
        backgroundColor: "#111827",
        border: "1px solid #334155",
        borderRadius: "8px",
        color: "#ffffff",
      }}
      labelStyle={{
        color: "#00cfff",
      }}
      itemStyle={{
        color: "#ffffff",
      }}
    />

    <Line
      type="monotone"
      dataKey="latency"
      stroke="#3b82f6"
      strokeWidth={3}
      dot={{
        r: 5,
        fill: "#3b82f6",
      }}
      activeDot={{
        r: 7,
      }}
    />
  </LineChart>
</div>

          {/* ===============================================
          RUNTIME HEALTH
          =============================================== */}

          <div className="chart-card">
            <h3>
              Operational
              Runtime Health
            </h3>

              <BarChart
              width={760}
              height={320}
                data={
                  currentData.pieData
                }
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#22c55e"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />
              </BarChart>
          </div>

          {/* ===============================================
          DISTRICT HEALTH
          =============================================== */}

          <div className="chart-card full-width">
            <h3>
              District
              Health
              Overview
            </h3>

              <BarChart
              width={1100}
              height={400}
                data={
                  currentData.barData
                }
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="district" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="health"
                  fill="#06b6d4"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />
              </BarChart>
          </div>
        </section>

        {/* =================================================
        TTG SIMULATION PANEL
        ONLY FOR PHASE 3
        ================================================= */}

        {phase ===
          "PHASE 3" && (
          <section className="simulation-panel">
            <div className="section-title">
              <PlayCircle
                size={22}
              />

              <h2>
                TTG Simulation
                Runtime
              </h2>
            </div>

            <div className="simulation-grid">
              <button
                className="scenario-btn flood"
                onClick={() =>
                  (window.location.href =
                    "/flood-simulation")
                }
              >
                <Waves
                  size={20}
                />

                Flood
                Simulation
              </button>

              <button
                className="scenario-btn traffic"
                onClick={() =>
                  (window.location.href =
                    "/traffic-simulation")
                }
              >
                <TrafficCone
                  size={20}
                />

                Traffic
                Congestion
              </button>

              <button
                className="scenario-btn waste"
                onClick={() =>
                  (window.location.href =
                    "/waste-simulation")
                }
              >
                <Trash2
                  size={20}
                />

                Waste
                Overflow
              </button>
            </div>

            <div className="ttg-info-grid">
              <div className="ttg-info-card">
                <h3>
                  Flood Runtime
                </h3>

                <p>
                  Flood signal
                  escalation,
                  telemetry
                  degradation and
                  replay runtime
                  visibility.
                </p>
              </div>

              <div className="ttg-info-card">
                <h3>
                  Traffic Runtime
                </h3>

                <p>
                  Smart traffic
                  congestion
                  monitoring and
                  runtime
                  operational
                  response.
                </p>
              </div>

              <div className="ttg-info-card">
                <h3>
                  Waste Runtime
                </h3>

                <p>
                  Overflow
                  telemetry,
                  sanitation
                  escalation and
                  infrastructure
                  degradation
                  visibility.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* =================================================
        LOGS
        ================================================= */}

        <section className="logs-card">
          <h2>
            Runtime Logs
          </h2>

          {logs.map(
            (log, index) => (
              <div
                key={index}
                className="log-line"
              >
                {log}
              </div>
            )
          )}
        </section>

        {/* =================================================
        FOOTER
        ================================================= */}

        <footer className="footer">
          <p>
            UCCIS Ecosystem
            Integration
            Runtime Build
          </p>

          <p>
            Principal
            Secretary
            Demonstration
            Phase
          </p>

          <p>
            Runtime Status:
            {" "}
            {loading
              ? "Updating..."
              : "Stable"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CivicIntelligenceSystem;