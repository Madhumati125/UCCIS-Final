import { useEffect, useState } from "react";

import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

import StatusCard from "../components/Cards/StatusCard";

import AnalyticsCard from "../components/Cards/AnalyticsCard";

import BackendResponseCard from "../components/Cards/BackendResponseCard";

/* ========================================================= */
/* REPLAY DATA                                               */
/* ========================================================= */

const replayTimelineData = [

  {
    hour: "08",
    replay: 22
  },

  {
    hour: "09",
    replay: 34
  },

  {
    hour: "10",
    replay: 42
  },

  {
    hour: "11",
    replay: 51
  },

  {
    hour: "12",
    replay: 61
  }

];

const lifecycleData = [

  {
    name: "Acknowledged",
    value: 34,
    color: "#3b82f6"
  },

  {
    name: "Escalated",
    value: 18,
    color: "#f59e0b"
  },

  {
    name: "Resolved",
    value: 41,
    color: "#00d084"
  },

  {
    name: "Failed",
    value: 7,
    color: "#ef4444"
  }

];

const divergenceData = [

  {
    name: "Stable",
    value: 78
  },

  {
    name: "Diverged",
    value: 22
  }

];

const COLORS = [

  "#00d084",
  "#ef4444"

];

/* ========================================================= */
/* COMPONENT                                                 */
/* ========================================================= */

export default function Replay() {

  const [backendData, setBackendData] = useState({});

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/replay")
      .then((res) => {

        setBackendData(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <div className="page-layout">

      {/* =================================================== */}
      {/* HEADER                                              */}
      {/* =================================================== */}

      <div className="page-title-section">

        <div>

          <h1 className="page-title">

            REPLAY RECONSTRUCTION CENTER

          </h1>

          <p className="page-subtitle">

            Timeline-driven replay reconstruction, incident
            lifecycle playback, divergence visibility,
            acknowledgement tracking, and operator-safe replay analysis.

          </p>

        </div>

        <div className="page-live-status">

          ● REPLAY ACTIVE

        </div>

      </div>

      {/* =================================================== */}
      {/* TICKER                                              */}
      {/* =================================================== */}

      <div className="command-ticker">

        <div className="ticker-item success">

          Replay reconstruction completed

        </div>

        <div className="ticker-item warning">

          Divergence detected in audit chain

        </div>

        <div className="ticker-item critical">

          Replay queue aging threshold exceeded

        </div>

        <div className="ticker-item">

          142 replay events active

        </div>

      </div>

      {/* =================================================== */}
      {/* KPI STRIP                                           */}
      {/* =================================================== */}

      <div className="kpi-strip">

        <StatusCard
          title="ACTIVE REPLAYS"
          value="142"
          status="Replay reconstruction active"
          type="primary"
        />

        <StatusCard
          title="DIVERGENCES"
          value="04"
          status="Replay divergence detected"
          type="danger"
        />

        <StatusCard
          title="ACK CHAINS"
          value="91%"
          status="Acknowledgement synchronization stable"
          type="success"
        />

        <StatusCard
          title="REPLAY HEALTH"
          value="STABLE"
          status="Operational replay infrastructure healthy"
          type="warning"
        />

      </div>

      {/* =================================================== */}
      {/* MAIN GRID                                           */}
      {/* =================================================== */}

      <div className="governance-grid">

        <div className="governance-left-column">

          <AnalyticsCard
            title="REPLAY STABILITY"
            metric="92%"
            change="+9%"
            description="Replay reconstruction consistency improved across active operational corridors."
            type="success"
          />

          <AnalyticsCard
            title="DIVERGENCE PRESSURE"
            metric="12"
            change="+3%"
            description="Replay divergence increasing in delayed escalation timelines."
            type="danger"
          />

          <BackendResponseCard
            title="REPLAY BACKEND RESPONSE"
            data={backendData}
          />

        </div>

        {/* ================================================= */}
        {/* CENTER                                            */}
        {/* ================================================= */}

        <div className="governance-center-column">

          <div className="chart-box large-chart">

  <div className="chart-title">

    REPLAY TIMELINE ANALYTICS

  </div>

  <ResponsiveContainer width="100%" height={300}>

    <BarChart data={replayTimelineData}>

      {/* GRID */}

      <CartesianGrid
        strokeDasharray="3 3"
        stroke="#233142"
      />

      {/* X AXIS */}

      <XAxis
        dataKey="hour"
        stroke="#8ea2b8"
      />

      {/* Y AXIS */}

      <YAxis
        stroke="#8ea2b8"
      />

      {/* TOOLTIP */}

      <Tooltip
        contentStyle={{
          backgroundColor: "#141d28",
          border: "1px solid #223041",
          color: "#ffffff"
        }}
      />

      {/* GRADIENT */}

      <defs>

        <linearGradient
          id="replayGradient"
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
        dataKey="replay"
        fill="url(#replayGradient)"
        radius={[8, 8, 0, 0]}
      />

    </BarChart>

  </ResponsiveContainer>

</div>

          <div className="chart-box large-chart">

  <div className="chart-title">

    INCIDENT LIFECYCLE RECONSTRUCTION

  </div>

  <ResponsiveContainer width="100%" height={300}>

    <PieChart>

      <Pie
        data={lifecycleData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={110}
        paddingAngle={4}

        label={({ percent }) =>
          `${(percent * 100).toFixed(0)}%`
        }
      >

        {lifecycleData.map((entry, index) => (

          <Cell
            key={index}
            fill={entry.color}
          />

        ))}

      </Pie>

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
        iconType="circle"
        wrapperStyle={{
          color: "#d6dde5",
          paddingTop: "20px",
          fontSize: "12px"
        }}
      />

    </PieChart>

  </ResponsiveContainer>

</div>

        </div>

        {/* ================================================= */}
        {/* RIGHT                                             */}
        {/* ================================================= */}

        <div className="governance-right-column">

          <div className="chart-box">

  <div className="chart-title">

    REPLAY DIVERGENCE STATUS

  </div>

  <ResponsiveContainer width="100%" height={280}>

    <PieChart>

      {/* PIE */}

      <Pie
        data={divergenceData}
        dataKey="value"
        nameKey="name"
        outerRadius={90}
        innerRadius={50}

        label={({ percent }) =>
          `${(percent * 100).toFixed(0)}%`
        }
      >

        {divergenceData.map((entry, index) => (

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

          <div className="feed-panel">

            <div className="feed-header">

              LIVE REPLAY FEED

            </div>

            <div className="feed-item success-feed">

              Replay chain successfully reconstructed.

            </div>

            <div className="feed-item warning-feed">

              Delayed acknowledgement detected.

            </div>

            <div className="feed-item danger-feed">

              Divergence detected in escalation replay.

            </div>

            <div className="feed-item success-feed">

              Lifecycle visualization synchronized.

            </div>

          </div>

          <div className="trust-panel">

            <div className="trust-header">

              REPLAY SYSTEM HEALTH

            </div>

            <div className="trust-row">

              Replay Integrity
              <span>ACTIVE</span>

            </div>

            <div className="trust-row">

              Timeline Reconstruction
              <span>SYNCED</span>

            </div>

            <div className="trust-row">

              Divergence Visibility
              <span>HEALTHY</span>

            </div>

            <div className="trust-row">

              Incident Playback
              <span>PROTECTED</span>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================== */}
      {/* FOOTER                                              */}
      {/* =================================================== */}

      <div className="dashboard-footer">

        Replay Reconstruction Active • Timeline Visibility Stable • Incident Playback Protected

      </div>

    </div>

  );
}