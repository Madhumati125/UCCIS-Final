// Dashboard.jsx

import React from "react";

import "../dashboard/Task21.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

import {
  Activity,
  AlertTriangle,
  ShieldCheck,
  Users,
  Radio,
  Database,
  Server,
  Globe,
  Wifi,
} from "lucide-react";

/* =========================================================
DATA
========================================================= */

const operationalData = [
  { day: "Mon", alerts: 5 },
  { day: "Tue", alerts: 8 },
  { day: "Wed", alerts: 13 },
  { day: "Thu", alerts: 10 },
  { day: "Fri", alerts: 7 },
  { day: "Sat", alerts: 9 },
  { day: "Sun", alerts: 11 },
];

const telemetryData = [
  { time: "10AM", cpu: 32 },
  { time: "11AM", cpu: 45 },
  { time: "12PM", cpu: 61 },
  { time: "1PM", cpu: 75 },
  { time: "2PM", cpu: 54 },
  { time: "3PM", cpu: 67 },
  { time: "4PM", cpu: 48 },
];

const alerts = [
  {
    title: "Flood Risk Detected",
    location: "Pune District, Maharashtra",
    level: "HIGH",
  },
  {
    title: "Fire Incident Reported",
    location: "Nagpur District, Maharashtra",
    level: "MEDIUM",
  },
  {
    title: "Medical Emergency",
    location: "Mumbai District, Maharashtra",
    level: "LOW",
  },
];

const heatmap = [
  "Pune",
  "Mumbai",
  "Nashik",
  "Nagpur",
  "Thane",
  "Satara",
  "Kolhapur",
  "Aurangabad",
  "Solapur",
];

const departments = [
  { name: "Police", status: "ACTIVE", load: "78%" },
  { name: "Medical", status: "HIGH LOAD", load: "89%" },
  { name: "Fire", status: "STABLE", load: "52%" },
  { name: "Cyber", status: "CRITICAL", load: "96%" },
];

const logs = [
  "Escalation Triggered",
  "Emergency Response Activated",
  "Incident Contained",
  "Field Teams Deployed",
];

/* =========================================================
DASHBOARD
========================================================= */

function SystemOperational() {
  return (
    <div className="dashboard">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <header className="topbar">

        <div>

          <h1>
            UCCIS Governance Command Center
          </h1>

          <p>
            Unified Command & Control Intelligence System
          </p>

        </div>

        {/* <div className="system-status">

          <div className="pulse"></div>

          SYSTEM OPERATIONAL

        </div> */}

      </header>

      {/* ========================================================= */}
      {/* METRICS */}
      {/* ========================================================= */}

      <section className="metrics-grid">

        <MetricCard
          icon={<AlertTriangle />}
          title="Critical Alerts"
          value="12"
          sub="↑ 20% from yesterday"
          danger
        />

        <MetricCard
          icon={<Users />}
          title="Operators Active"
          value="45"
          sub="↑ 12% from yesterday"
        />

        <MetricCard
          icon={<Radio />}
          title="Escalation Level"
          value="HIGH"
          sub="Active in 3 Districts"
          warning
        />

        <MetricCard
          icon={<ShieldCheck />}
          title="System Health"
          value="98%"
          sub="All systems operational"
          success
        />

      </section>

      {/* ========================================================= */}
      {/* MAIN GRID */}
      {/* ========================================================= */}

      <section className="main-grid">

        {/* ========================================================= */}
        {/* OPERATIONAL TREND */}
        {/* ========================================================= */}

        <div className="panel large-panel">

  <div className="panel-header">
    <h2>Operational Trend</h2>
    {/* <span>Last 7 Days</span> */}
  </div>

  <div
    style={{
      width: "100%",
      height: "330px",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={operationalData}
        margin={{
          top: 10,
          right: 35,
          left: 10,
          bottom: 25,
        }}
        barCategoryGap="18%"
      >
      <CartesianGrid
        stroke="#1e293b"
        strokeDasharray="3 3"
      />

        <XAxis
          dataKey="day"
          interval={0}
          padding={{ left: 15, right: 15 }}
          tick={{ fill: "#94a3b8", fontSize: 14 }}
          label={{
            value: "Day",
            position: "insideBottom",
            offset: -12,
            fill: "#94a3b8",
            fontSize: 14,
            fontWeight: "600",
          }}
          stroke="#94a3b8"
        />

        <YAxis
          domain={[0, 16]}
          ticks={[0, 4, 8, 12, 16]}
          tick={{ fill: "#94a3b8", fontSize: 14 }}
          label={{
            value: "Time Period",
            angle: -90,
            position: "insideLeft",
            fill: "#94a3b8",
            fontSize: 14,
            fontWeight: "600",
          }}
          stroke="#94a3b8"
        />

      <Tooltip
        contentStyle={{
          background: "#081426",
          border: "1px solid #1e293b",
          borderRadius: "12px",
        }}
      />

        <Bar
          dataKey="alerts"
          name="Alerts"
          fill="#38bdf8"
          radius={[12, 12, 0, 0]}
          maxBarSize={58}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

</div>

        {/* ========================================================= */}
        {/* ========================================================= */}
{/* LIVE TELEMETRY */}
{/* ========================================================= */}

<div className="panel">

  <div className="panel-header">
    <h2>Live Telemetry</h2>
    {/* <span>CPU Monitoring</span> */}
  </div>

  <div
    style={{
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LineChart
      width={900}
      height={300}
      data={telemetryData}
      margin={{
        top: 20,
        right: 20,
        left: 10,
        bottom: 10,
      }}
    >
      <CartesianGrid
        stroke="#1e293b"
        strokeDasharray="3 3"
      />

      <XAxis
        dataKey="time"
        stroke="#94a3b8"
        tick={{ fill: "#94a3b8" }}
        label={{
    value: "Time",
    position: "insideBottom",
    offset: -5,
    fill: "#94a3b8",
  }}
      />

      <YAxis
        stroke="#94a3b8"
        tick={{ fill: "#94a3b8" }}
        label={{
    value: "Telemetry Value",
    angle: -90,
    position: "insideLeft",
    fill: "#94a3b8",
  }}
      />

      <Tooltip
        contentStyle={{
          background: "#081426",
          border: "1px solid #1e293b",
          borderRadius: "12px",
          color: "#ffffff",
        }}
        labelStyle={{
          color: "#38bdf8",
        }}
      />

      <Line
        type="monotone"
        dataKey="cpu"
        stroke="#22c55e"
        strokeWidth={4}
        dot={{
          r: 6,
          fill: "#22c55e",
        }}
        activeDot={{
          r: 8,
          fill: "#22c55e",
        }}
      />
    </LineChart>
  </div>

</div>

      </section>

      {/* ========================================================= */}
      {/* LOWER GRID */}
      {/* ========================================================= */}

      <section className="secondary-grid">

        {/* ========================================================= */}
        {/* HEATMAP */}
        {/* ========================================================= */}

        <div className="panel">

          <div className="panel-header">

            <h2>
              Escalation Heatmap
            </h2>

            {/* <span>
              Live District Activity
            </span> */}

          </div>

          <div className="heatmap-grid">

            {heatmap.map((city, i) => (

              <div
                key={i}
                className={`heat-box ${
                  i % 3 === 0
                    ? "danger-box"
                    : i % 2 === 0
                    ? "safe-box"
                    : "warning-box"
                }`}
              >

                {city}

              </div>

            ))}

          </div>

        </div>

        {/* ========================================================= */}
        {/* DEPARTMENT PERFORMANCE */}
        {/* ========================================================= */}

        <div className="panel">

          <div className="panel-header">

            <h2>
              Department Performance
            </h2>

            {/* <span>
              Load
            </span> */}

          </div>

          <table className="dept-table" style={{ color: "#000000" }}>

            <thead>

              <tr>

                <th>Department</th>
                <th>Status</th>
                <th>Load</th>

              </tr>

            </thead>

            <tbody>

              {departments.map((dept, i) => (

                <tr key={i}>

                  <td style={{ color: "#000000" }}>{dept.name}</td>

                  <td style={{ color: "#000000" }}
                    className={
                      dept.status === "ACTIVE"
                        ? "green"
                        : dept.status === "STABLE"
                        ? "blue"
                        : dept.status === "HIGH LOAD"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {dept.status}
                  </td>

                  <td style={{ color: "#000000" }}>{dept.load}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ========================================================= */}
      {/* LIVE ALERT FEED */}
      {/* ========================================================= */}

      <section className="panel">

        <div className="panel-header">

          <h2>
            Live Alert Feed
          </h2>

          {/* <span className="green">
            ● LIVE
          </span> */}

        </div>

        <div className="alerts-list">

          {alerts.map((alert, i) => (

            <div className="alert-item" key={i}>

              <div>

                <h4>
                  {alert.title}
                </h4>

                <p>
                  {alert.location}
                </p>

              </div>

              <div
                className={`badge ${
                  alert.level === "HIGH"
                    ? "badge-red"
                    : alert.level === "MEDIUM"
                    ? "badge-yellow"
                    : "badge-green"
                }`}
              >

                {alert.level}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ========================================================= */}
      {/* TIMELINE */}
      {/* ========================================================= */}

      <section className="panel">

        <div className="panel-header">

          <h2>
            Operational Replay Timeline
          </h2>

        </div>

        <div className="timeline">

          {logs.map((item, i) => (

            <div className="timeline-item" key={i}>

              <div className="timeline-dot"></div>

              <div>

                <h5>
                  {["10:00 AM", "10:15 AM", "10:45 AM", "11:10 AM"][i]}
                </h5>

                <p>
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ========================================================= */}
      {/* SYSTEM HEALTH */}
      {/* ========================================================= */}

      {/* <section className="panel health-panel">

        <div className="health-left">

          <div className="panel-header">

            <h2>
              System Health Overview
            </h2>

            <span className="green">
              ● HEALTHY
            </span>

          </div>

          <div className="health-services">

            <Service
              name="Backend Services"
              icon={<Server />}
            />

            <Service
              name="Database"
              icon={<Database />}
            />

            <Service
              name="APIs"
              icon={<Globe />}
            />

            <Service
              name="WebSocket"
              icon={<Wifi />}
            />

          </div>

        </div>

        <div className="health-circle">

          <div className="circle">

            <span>
              98%
            </span>

            <small>
              Healthy
            </small>

          </div>

        </div>

      </section> */}

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      {/* <footer className="footer">

        <p>
          UCCIS • Unified Governance Intelligence Layer
        </p>

      </footer> */}

    </div>
  );
}

/* =========================================================
METRIC CARD
========================================================= */

function MetricCard({
  icon,
  title,
  value,
  sub,
  danger,
  warning,
  success,
}) {

  return (

    <div className="metric-card">

      <div className="metric-top">

        <div className="metric-icon">
          {icon}
        </div>

        <Activity
          size={18}
          className="mini-pulse"
        />

      </div>

      <p>
        {title}
      </p>

      <h2
        className={
          danger
            ? "danger-text"
            : warning
            ? "warning-text"
            : success
            ? "success-text"
            : ""
        }
      >
        {value}
      </h2>

      <span>
        {sub}
      </span>

    </div>

  );
}

/* =========================================================
SERVICE
========================================================= */

function Service({ name, icon }) {

  return (

    <div className="service-item">

      <div className="service-left">

        {icon}

        <span>
          {name}
        </span>

      </div>

      <span className="green">
        Operational
      </span>

    </div>

  );
}

export default SystemOperational;