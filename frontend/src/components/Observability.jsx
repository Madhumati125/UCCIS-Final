import { useEffect, useState } from "react";

import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

import StatusCard from "../components/Cards/StatusCard";

import AnalyticsCard from "../components/Cards/AnalyticsCard";

import BackendResponseCard from "../components/Cards/BackendResponseCard";

/* ========================================================= */
/* TELEMETRY DATA                                            */
/* ========================================================= */

const telemetryData = [

  {
    time: "08:00",
    telemetry: 82
  },

  {
    time: "09:00",
    telemetry: 86
  },

  {
    time: "10:00",
    telemetry: 90
  },

  {
    time: "11:00",
    telemetry: 74
  },

  {
    time: "12:00",
    telemetry: 91
  },

  {
    time: "13:00",
    telemetry: 96
  }

];

/* ========================================================= */
/* REPLAY SYNC DATA                                          */
/* ========================================================= */

const replaySyncData = [

  {
    hour: "08",
    sync: 61
  },

  {
    hour: "09",
    sync: 68
  },

  {
    hour: "10",
    sync: 72
  },

  {
    hour: "11",
    sync: 79
  },

  {
    hour: "12",
    sync: 91
  }

];

/* ========================================================= */
/* SIGNAL DISTRIBUTION                                       */
/* ========================================================= */

const signalData = [

  {
    name: "Healthy",
    value: 72
  },

  {
    name: "Delayed",
    value: 18
  },

  {
    name: "Critical",
    value: 10
  }

];

const COLORS = [

  "#00d084",
  "#f59e0b",
  "#ef4444"

];

/* ========================================================= */
/* COMPONENT                                                 */
/* ========================================================= */

export default function Observability() {

  const [backendData, setBackendData] = useState({});

  /* ======================================================= */
  /* FETCH BACKEND                                           */
  /* ======================================================= */

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/observability")
      .then((res) => {

        setBackendData(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  /* ======================================================= */
  /* UI                                                      */
  /* ======================================================= */

  return (

    <div className="page-layout">

      {/* =================================================== */}
      {/* PAGE HEADER                                         */}
      {/* =================================================== */}

      <div className="page-title-section">

        <div>

          <h1 className="page-title">

            OBSERVABILITY CONTROL CENTER

          </h1>

          <p className="page-subtitle">

            Real-time telemetry visibility, replay synchronization,
            signal intelligence, stale stream detection, and
            statewide operational monitoring.

          </p>

        </div>

        {/* <div className="page-live-status">

          ● OBSERVABILITY ACTIVE

        </div> */}

      </div>

      {/* =================================================== */}
      {/* TICKER                                               */}
      {/* =================================================== */}

      <div className="command-ticker">

        <div className="ticker-item success">

          Replay synchronization healthy

        </div>

        <div className="ticker-item warning">

          2 telemetry streams delayed

        </div>

        <div className="ticker-item critical">

          Signal degradation detected in Pune district

        </div>

        <div className="ticker-item">

          Monitoring 36 active districts

        </div>

      </div>

      {/* =================================================== */}
      {/* KPI STRIP                                           */}
      {/* =================================================== */}

      <div className="kpi-strip">

        <StatusCard
          title="TELEMETRY HEALTH"
          value="91%"
          status="Operational telemetry stable"
          type="success"
        />

        <StatusCard
          title="REPLAY SYNC"
          value="ACTIVE"
          status="Replay synchronization healthy"
          type="primary"
        />

        <StatusCard
          title="STALE STREAMS"
          value="02"
          status="Delayed telemetry detected"
          type="warning"
        />

        <StatusCard
          title="SIGNAL FAILURES"
          value="04"
          status="Critical stream degradation active"
          type="danger"
        />

      </div>

      {/* =================================================== */}
      {/* MAIN GRID                                           */}
      {/* =================================================== */}

      <div className="governance-grid">

        {/* ================================================= */}
        {/* LEFT COLUMN                                       */}
        {/* ================================================= */}

        <div className="governance-left-column">

          <AnalyticsCard
            title="OBSERVABILITY HEALTH"
            metric="94%"
            change="+7%"
            description="Telemetry visibility improved across statewide monitoring infrastructure."
            type="success"
          />

          <AnalyticsCard
            title="STREAM STABILITY"
            metric="88%"
            change="-2%"
            description="Minor degradation detected in delayed telemetry corridors."
            type="warning"
          />

          {/* <BackendResponseCard
            title="OBSERVABILITY BACKEND RESPONSE"
            data={backendData}
          /> */}

        </div>

        {/* ================================================= */}
        {/* CENTER COLUMN                                     */}
        {/* ================================================= */}

        <div className="governance-center-column">

          {/* ============================================= */}
          {/* TELEMETRY CHART                              */}
          {/* ============================================= */}

          <div className="chart-box large-chart">

  <div className="chart-title">

    TELEMETRY PERFORMANCE TREND

  </div>

  <ResponsiveContainer width="100%" height={300}>

    <BarChart data={telemetryData}>

      {/* GRID */}

      <CartesianGrid
        strokeDasharray="3 3"
        stroke="#233142"
      />

      {/* X AXIS */}

      <XAxis
        dataKey="time"
        stroke="#8ea2b8"
        label={{
    value: "Time",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 14,
  }}
      />

      {/* Y AXIS */}

      <YAxis
        stroke="#8ea2b8"
        label={{
    value: "Telemetry Performance",
    angle: -90,
    position: "insideLeft",
    fill: "#d6dde5",
    fontSize: 14,
  }}
      />

      {/* TOOLTIP */}

      <Tooltip
        formatter={(value) => [`${value}%`, "Telemetry"]}
        contentStyle={{
          backgroundColor: "#141d28",
          border: "1px solid #223041",
          color: "#ffffff"
        }}
      />

      {/* LEGEND */}

      <Legend
        verticalAlign="top"
        height={36}
        wrapperStyle={{
          color: "#d6dde5",
          fontSize: "12px"
        }}
      />

      {/* GRADIENT */}

      <defs>

        <linearGradient
          id="telemetryGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >

          <stop
            offset="0%"
            stopColor="#3b82f6"
          />

          <stop
            offset="100%"
            stopColor="#1d4ed8"
          />

        </linearGradient>

      </defs>

      {/* BAR */}

      <Bar
        dataKey="telemetry"
        fill="url(#telemetryGradient)"
        radius={[8, 8, 0, 0]}
        name="Telemetry %"
      />

    </BarChart>

  </ResponsiveContainer>

</div>

          {/* ============================================= */}
          {/* REPLAY SYNC CHART                             */}
          {/* ============================================= */}

          <div className="chart-box large-chart">

  <div className="chart-title">

    REPLAY SYNCHRONIZATION ANALYTICS

  </div>

  <ResponsiveContainer width="100%" height={300}>

    <BarChart data={replaySyncData}>

      {/* GRID */}

      <CartesianGrid
        strokeDasharray="3 3"
        stroke="#233142"
      />

      {/* X AXIS */}

      <XAxis
        dataKey="hour"
        stroke="#8ea2b8"
        label={{
    value: "Synchronization Time",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 14,
  }}
      />

      {/* Y AXIS */}

      <YAxis
        stroke="#8ea2b8"
        label={{
    value: "Replay Synchronization Count",
    angle: -90,
    position: "outsideRight",
    fill: "#d6dde5",
    fontSize: 16,
  }}
      />

      {/* TOOLTIP */}

      <Tooltip
        formatter={(value) => [`${value}%`, "Replay Sync"]}
        contentStyle={{
          backgroundColor: "#141d28",
          border: "1px solid #223041",
          color: "#ffffff"
        }}
      />

      {/* LEGEND */}

      <Legend
        verticalAlign="top"
        height={36}
        wrapperStyle={{
          color: "#d6dde5",
          fontSize: "12px"
        }}
      />

      {/* GRADIENT */}

      <defs>

        <linearGradient
          id="replaySyncGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >

          <stop
            offset="0%"
            stopColor="#00d084"
          />

          <stop
            offset="100%"
            stopColor="#0f766e"
          />

        </linearGradient>

      </defs>

      {/* BAR */}

      <Bar
        dataKey="sync"
        fill="url(#replaySyncGradient)"
        radius={[8, 8, 0, 0]}
        name="Replay Sync %"
      />

    </BarChart>

  </ResponsiveContainer>

</div>

        </div>

        {/* ================================================= */}
        {/* RIGHT COLUMN                                      */}
        {/* ================================================= */}

        <div className="governance-right-column">

          {/* ============================================= */}
          {/* SIGNAL PIE CHART                              */}
          {/* ============================================= */}

          <div className="chart-box">

  <div className="chart-title">

    SIGNAL DISTRIBUTION

  </div>

  <ResponsiveContainer width="100%" height={280}>

    <PieChart>

      {/* PIE */}

      <Pie
        data={signalData}
        dataKey="value"
        nameKey="name"
        outerRadius={90}
        innerRadius={50}

        label={({ percent }) =>
          `${(percent * 100).toFixed(0)}%`
        }
      >

        {signalData.map((entry, index) => (

          <Cell
            key={index}
            fill={COLORS[index]}
          />

        ))}

      </Pie>

      {/* TOOLTIP */}

      <Tooltip
        contentStyle={{
          backgroundColor: "#ffffff",
          border: "1px solid #223041",
          color: "#ffffff"
        }}
      />

      {/* LEGEND */}

      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="circle"

        wrapperStyle={{
          color: "#d6dde5",
          paddingTop: "16px",
          fontSize: "12px"
        }}
      />

    </PieChart>

  </ResponsiveContainer>

</div>

          {/* ============================================= */}
          {/* LIVE FEED                                     */}
          {/* ============================================= */}

          <div className="feed-panel">

            <div className="feed-header">

              LIVE OBSERVABILITY FEED

            </div>

            <div className="feed-item success-feed">

              Replay monitoring synchronization stable.

            </div>

            <div className="feed-item warning-feed">

              Telemetry aging threshold exceeded in Nashik.

            </div>

            <div className="feed-item danger-feed">

              Critical signal degradation detected.

            </div>

            <div className="feed-item success-feed">

              Observability infrastructure healthy.

            </div>

          </div>

          {/* ============================================= */}
          {/* HEALTH PANEL                                  */}
          {/* ============================================= */}

          <div className="trust-panel">

            <div className="trust-header">

              SYSTEM OBSERVABILITY HEALTH

            </div>

            <div className="trust-row">

              Replay Visibility
              <span>ACTIVE</span>

            </div>

            <div className="trust-row">

              Telemetry Integrity
              <span>HEALTHY</span>

            </div>

            <div className="trust-row">

              Signal Reconstruction
              <span>SYNCED</span>

            </div>

            <div className="trust-row">

              Monitoring Stability
              <span>PROTECTED</span>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================== */}
      {/* FOOTER                                              */}
      {/* =================================================== */}

      <div className="dashboard-footer">

        Observability Monitoring Active • Replay Visibility Stable • Telemetry Protected

      </div>

    </div>

  );
}