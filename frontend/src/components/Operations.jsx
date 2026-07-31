import { useEffect, useState } from "react";
import "../Task14.css"

import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend
} from "recharts";

import StatusCard from "../components/Cards/StatusCard";

import AnalyticsCard from "../components/Cards/AnalyticsCard";

import BackendResponseCard from "../components/Cards/BackendResponseCard";

/* ========================================================= */
/* INCIDENT DATA                                             */
/* ========================================================= */

const incidentData = [

  {
    district: "Mumbai",
    incidents: 44
  },

  {
    district: "Pune",
    incidents: 31
  },

  {
    district: "Nashik",
    incidents: 18
  },

  {
    district: "Nagpur",
    incidents: 27
  },

  {
    district: "Satara",
    incidents: 14
  }

];

/* ========================================================= */
/* DISTRICT STRESS DATA                                      */
/* ========================================================= */

const stressData = [

  {
    name: "High",
    value: 6
  },

  {
    name: "Medium",
    value: 11
  },

  {
    name: "Low",
    value: 18
  }

];

const stressColors = [

  "#ef4444",
  "#f59e0b",
  "#00d084"

];

/* ========================================================= */
/* EXECUTION TREND DATA                                      */
/* ========================================================= */

const executionTrendData = [

  {
    hour: "08:00",
    execution: 52
  },

  {
    hour: "09:00",
    execution: 61
  },

  {
    hour: "10:00",
    execution: 68
  },

  {
    hour: "11:00",
    execution: 74
  },

  {
    hour: "12:00",
    execution: 81
  },

  {
    hour: "13:00",
    execution: 88
  }

];

/* ========================================================= */
/* PAGE                                                      */
/* ========================================================= */

export default function Operations() {

  const [backendData, setBackendData] = useState({});

  /* ======================================================= */
  /* FETCH BACKEND                                           */
  /* ======================================================= */

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/operations")
      .then((res) => {

        setBackendData(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  /* ======================================================= */
  /* UI                                                       */
  /* ======================================================= */

  return (

    <div className="page-layout">

      {/* =================================================== */}
      {/* PAGE TITLE                                          */}
      {/* =================================================== */}

      <div className="page-title-section">

        <div>

          <h1 className="page-title">
            OPERATIONS COMMAND CENTER
          </h1>

          <p className="page-subtitle">

            Real-time statewide operational intelligence,
            escalation visibility, district execution monitoring,
            replay coordination, and governance telemetry.

          </p>

        </div>

        <div className="page-live-status">

          ● OPERATIONS LIVE

        </div>

      </div>

      {/* =================================================== */}
      {/* ESCALATION TICKER                                   */}
      {/* =================================================== */}

      <div className="command-ticker">

        <div className="ticker-item critical">

          Mumbai escalation aging threshold exceeded

        </div>

        <div className="ticker-item warning">

          Nashik telemetry stream delayed

        </div>

        <div className="ticker-item success">

          Replay synchronization restored

        </div>

        <div className="ticker-item">

          6 districts under elevated operational load

        </div>

      </div>

      {/* =================================================== */}
      {/* KPI STRIP                                           */}
      {/* =================================================== */}

      <div className="kpi-strip">

        <StatusCard
          title="ACTIVE INCIDENTS"
          value="84"
          status="Critical escalation load active"
          type="danger"
        />

        <StatusCard
          title="REPLAY EVENTS"
          value="142"
          status="Replay synchronization operational"
          type="success"
        />

        <StatusCard
          title="FIELD RESPONSE"
          value="91%"
          status="Operational response stable"
          type="primary"
        />

        <StatusCard
          title="DISTRICT STRESS"
          value="HIGH"
          status="6 districts overloaded"
          type="warning"
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

          {/* ============================================= */}
          {/* ANALYTICS                                     */}
          {/* ============================================= */}

          <AnalyticsCard
            title="EXECUTION VELOCITY"
            metric="78%"
            change="+12%"
            description="Execution throughput improved since previous operational cycle."
            type="primary"
          />

          <AnalyticsCard
            title="ESCALATION LOAD"
            metric="19"
            change="+4%"
            description="Escalation queue increasing in western operational corridor."
            type="danger"
          />

          {/* ============================================= */}
          {/* BACKEND RESPONSE                              */}
          {/* ============================================= */}

          <BackendResponseCard
            title="OPERATIONS BACKEND RESPONSE"
            data={backendData}
          />

        </div>

        {/* ================================================= */}
        {/* CENTER COLUMN                                     */}
        {/* ================================================= */}

        <div className="governance-center-column">

          {/* ============================================= */}
          {/* INCIDENT BAR CHART                            */}
          {/* ============================================= */}

          <div className="chart-box large-chart">
  <div className="execution-chart-title">
    DISTRICT INCIDENT LOAD
  </div>

  <div className="chart-frame">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={incidentData}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#223041" />

        <XAxis
          dataKey="district"
          stroke="#8ea2b8"
          tick={{ fill: "#d6dde5", fontSize: 13 }}
        />

        <YAxis
          stroke="#8ea2b8"
          tick={{ fill: "#d6dde5", fontSize: 13 }}
          allowDecimals={false}
        />

        <Tooltip
          contentStyle={{
            background: "#16202c",
            border: "1px solid #334155",
            color: "#fff",
          }}
        />

        <Bar
          dataKey="incidents"
          fill="#3b82f6"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
{console.log("Incident Data:", incidentData)}

          {/* ============================================= */}
          {/* EXECUTION TREND                               */}
          {/* ============================================= */}

          <div className="chart-box large-chart">

            <div className="chart-title">

              EXECUTION TREND ANALYTICS

            </div>

            <div className="chart-frame chart-frame-sm">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={executionTrendData}>

                  {/* GRID */}

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#233142"
                  />

                  {/* AXIS */}

                  <XAxis
                    dataKey="hour"
                    stroke="#8ea2b8"
                  />

                  <YAxis
                    stroke="#8ea2b8"
                    allowDecimals={false}
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
                      id="executionGradient"
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
                    dataKey="execution"
                    fill="url(#executionGradient)"
                    radius={[8, 8, 0, 0]}
                    isAnimationActive={false}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT COLUMN                                      */}
        {/* ================================================= */}

        <div className="governance-right-column">

          {/* ============================================= */}
          {/* DISTRICT STRESS PIE                           */}
          {/* ============================================= */}

          <div className="chart-box">

            <div className="chart-title">

              DISTRICT STRESS DISTRIBUTION

            </div>

            <div
              className="chart-frame-sm"
              style={{ height: 340 }}
            >
              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  {/* PIE */}

                  <Pie
                    data={stressData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={65}
                    outerRadius={105}
                    stroke="#ffffff"
                    strokeWidth={2}
                    paddingAngle={1}
                    labelLine={true}
                    label={(props) => {
                      const {
                        cx,
                        cy,
                        midAngle,
                        outerRadius,
                        percent,
                        fill,
                      } = props;

                      const RADIAN = Math.PI / 180;

                      const x =
                        cx +
                        (outerRadius + 25) *
                          Math.cos(-midAngle * RADIAN);

                      const y =
                        cy +
                        (outerRadius + 25) *
                          Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill={fill}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          fontSize={18}
                          fontWeight="700"
                        >
                          {(percent * 100).toFixed(0)}%
                        </text>
                      );
                    }}
                  >

                    {stressData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={stressColors[index]}
                      />

                    ))}

                  </Pie>

                  {/* TOOLTIP */}

                  <Tooltip
                    contentStyle={{
                      background: "#16202c",
                      border: "1px solid #334155",
                      borderRadius: 8,
                      color: "#fff",
                    }}
                  />

                  {/* LEGEND */}

                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    iconSize={12}
                    wrapperStyle={{
                      color: "#fff",
                      paddingTop: 20,
                      fontSize: 14,
                    }}
                  />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ============================================= */}
          {/* LIVE FEED                                     */}
          {/* ============================================= */}

          <div className="feed-panel">

            <div className="feed-header">

              LIVE OPERATIONAL FEED

            </div>

            <div className="feed-item success-feed">

              Statewide telemetry synchronization healthy.

            </div>

            <div className="feed-item warning-feed">

              Pune district response delay exceeded threshold.

            </div>

            <div className="feed-item danger-feed">

              Escalation backlog increasing in central corridor.

            </div>

            <div className="feed-item success-feed">

              Replay reconstruction completed successfully.

            </div>

          </div>

          {/* ============================================= */}
          {/* TRUST PANEL                                   */}
          {/* ============================================= */}

          <div className="trust-panel">

            <div className="trust-header">

              OPERATIONAL HEALTH

            </div>

            <div className="trust-row">

              Replay Stability
              <span>STABLE</span>

            </div>

            <div className="trust-row">

              Telemetry Integrity
              <span>HEALTHY</span>

            </div>

            <div className="trust-row">

              Governance Sync
              <span>ACTIVE</span>

            </div>

            <div className="trust-row">

              Field Coordination
              <span>SYNCED</span>

            </div>

          </div>

        </div>

      </div>

      {/* =================================================== */}
      {/* FOOTER                                              */}
      {/* =================================================== */}

      <div className="dashboard-footer">

        Operations Monitoring Active • Replay Stable • Governance Protected • Field Coordination Healthy

      </div>

    </div>

  );
}