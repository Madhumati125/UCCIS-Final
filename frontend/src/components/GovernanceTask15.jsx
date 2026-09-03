import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";


/* =====================================================
   SEED DATA
   Swap these for real API data whenever ready.
===================================================== */

const REPLAY_LINEAGE_DATA = [
  { stage: "Signal", value: 22 },
  { stage: "Escalation", value: 18 },
  { stage: "Recovery", value: 14 },
  { stage: "Validation", value: 30 },
];

const AUDIT_TREND_SEED = [
  { time: "10:00", value: 10 },
  { time: "10:05", value: 14 },
  { time: "10:10", value: 22 },
  { time: "10:15", value: 15 },
  { time: "10:20", value: 24 },
  { time: "10:25", value: 32 },
];

const GOVERNANCE_PIE_DATA = [
  { name: "Verified", value: 85 },
  { name: "Flagged", value: 15 },
];

const GOVERNANCE_COLORS = ["#00e08f", "#ff4d4f"];

const VALIDATION_EVENTS = [
  "> Replay lineage verified",
  "> Governance reconstruction validated",
  "> Audit continuity active",
  "> Append-only persistence confirmed",
  "> Anti-misrepresentation active",
];

const GOVERNANCE_METRICS = [
  { label: "Replay Safety", value: "PASS" },
  { label: "Lineage Integrity", value: "VERIFIED" },
  { label: "Divergence Visibility", value: "ACTIVE" },
  { label: "Audit Continuity", value: "ENABLED" },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

const GovernanceTask15 = () => {
  const [auditTrend, setAuditTrend] = useState(AUDIT_TREND_SEED);
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  /* =====================================================
     SIMULATE LIVE DATA
     Refreshes the audit trend + timestamp on an interval.
     Replace with a real API/WebSocket call when ready.
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setAuditTrend((prev) => {
        const next = prev.slice(1);
        const lastTime = prev[prev.length - 1].time;
        const [h, m] = lastTime.split(":").map(Number);
        const totalMinutes = h * 60 + m + 5;
        const newTime = `${String(
          Math.floor(totalMinutes / 60) % 24
        ).padStart(2, "0")}:${String(totalMinutes % 60).padStart(2, "0")}`;

        next.push({
          time: newTime,
          value: Math.floor(8 + Math.random() * 28),
        });

        return next;
      });

      setTimestamp(new Date().toISOString());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const backendResponse = {
    platform: "UCCIS",
    governanceSafe: true,
    lineageIntegrity: "VERIFIED",
    auditContinuity: "ACTIVE",
    replaySafe: true,
    divergenceRisk: "LOW",
    activeAudits: 184,
    timestamp,
  };

  return (
    <div className="gcc-dashboard">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="gcc-header">
        <h1>Governance Command Center</h1>
        <p>Replay-safe operational governance visibility</p>
      </div>

      {/* =================================================
          STAT CARDS
      ================================================= */}

      <div className="gcc-stat-grid">
        <div className="gcc-stat-card">
          <span className="gcc-stat-label">Governance Integrity</span>
          <span className="gcc-stat-value verified">VERIFIED</span>
        </div>

        <div className="gcc-stat-card">
          <span className="gcc-stat-label">Replay Lineage</span>
          <span className="gcc-stat-value">98%</span>
        </div>

        <div className="gcc-stat-card">
          <span className="gcc-stat-label">Active Audits</span>
          <span className="gcc-stat-value">184</span>
        </div>

        <div className="gcc-stat-card">
          <span className="gcc-stat-label">Divergence Risk</span>
          <span className="gcc-stat-value low">LOW</span>
        </div>
      </div>

      {/* =================================================
          ROW 1: GOVERNANCE STATUS / LINEAGE / AUDIT TREND
      ================================================= */}

      <div className="gcc-row gcc-row-3">
        <div className="gcc-panel">
          <h3>Governance Status</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={GOVERNANCE_PIE_DATA}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                outerRadius={90}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {GOVERNANCE_PIE_DATA.map((entry, index) => (
                  <Cell key={entry.name} fill={GOVERNANCE_COLORS[index]} />
                ))}
              </Pie>
              <Legend
      verticalAlign="bottom"
      align="center"
      iconType="circle"
      wrapperStyle={{
        color: "#d6dde5",
        paddingTop: "15px",
        fontSize: "12px",
      }}
    />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="gcc-panel">
          <h3>Replay Lineage Validation</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={REPLAY_LINEAGE_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e2733"
                vertical={false}
              />
              <XAxis
                dataKey="stage"
                stroke="#6b7785"
                tick={{ fontSize: 11 }}
                label={{
    value: "Replay Lineage Stages",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 13,
  }}
              />
              <YAxis stroke="#6b7785" tick={{ fontSize: 11 }} 
                label={{
    value: "Validation Count",
    angle: -90,
    position: "insideLeft",
    fill: "#d6dde5",
    fontSize: 13,
  }}
              />
              <Bar dataKey="value" fill="#00e08f" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="gcc-panel">
          <h3>Audit Continuity Trend</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={auditTrend}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e2733"
                vertical={false}
              />
              <XAxis
                dataKey="time"
                stroke="#6b7785"
                tick={{ fontSize: 11 }}
                label={{
    value: "Audit Timeline",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 13,
  }}
              />
              <YAxis stroke="#6b7785" tick={{ fontSize: 11 }} 
                label={{
    value: "Audit Events",
    angle: -90,
    position: "insideLeft",
    fill: "#d6dde5",
    fontSize: 13,
  }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00e08f"
                strokeWidth={2}
                dot={{ r: 3, fill: "#00e08f" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* =================================================
          BACKEND GOVERNANCE RESPONSE
      ================================================= */}

      {/* <div className="gcc-panel gcc-full">
        <h3>Backend Governance Response</h3>
        <pre className="gcc-json-block">
          {JSON.stringify(backendResponse, null, 2)}
        </pre>
      </div> */}

      {/* =================================================
          ROW 2: VALIDATION EVENTS / METRICS
      ================================================= */}

      <div className="gcc-row gcc-row-2">
        <div className="gcc-panel">
          <h3>Governance Validation Events</h3>
          <div className="gcc-log">
            {VALIDATION_EVENTS.map((line) => (
              <div key={line} className="gcc-log-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="gcc-panel">
          <h3>Governance Metrics</h3>
          <div className="gcc-metrics">
            {GOVERNANCE_METRICS.map((metric) => (
              <div key={metric.label} className="gcc-metric-line">
                <span className="gcc-metric-label">{metric.label}</span>
                <span className="gcc-metric-value">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTask15;