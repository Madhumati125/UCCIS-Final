import "../components/Governance.css";
import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


/* =========================================================
   EXISTING GOVERNANCE DASHBOARD DATA
========================================================= */

const lineData = [
  { day: "Mon", incidents: 12 },
  { day: "Tue", incidents: 18 },
  { day: "Wed", incidents: 10 },
  { day: "Thu", incidents: 25 },
  { day: "Fri", incidents: 17 },
  { day: "Sat", incidents: 30 },
  { day: "Sun", incidents: 20 },
];

const pieData = [
  { name: "Critical", value: 10 },
  { name: "High", value: 20 },
  { name: "Medium", value: 40 },
  { name: "Low", value: 30 },
];

const barData = [
  { zone: "South Mumbai", value: 40 },
  { zone: "Andheri", value: 30 },
  { zone: "Thane West", value: 50 },
  { zone: "Kalwa", value: 20 },
];

const COLORS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#22c55e",
];


/* =========================================================
   TASK 10 DATA
========================================================= */

const task10StatusData = [
  {
    name: "Critical",
    value: 3,
  },
  {
    name: "High",
    value: 5,
  },
  {
    name: "Medium",
    value: 7,
  },
  {
    name: "Resolved",
    value: 12,
  },
];

const task10ZoneData = [
  {
    zone: "South Mumbai",
    escalations: 8,
  },
  {
    zone: "Andheri",
    escalations: 5,
  },
  {
    zone: "Thane West",
    escalations: 9,
  },
  {
    zone: "Kalwa",
    escalations: 4,
  },
  {
    zone: "Mumbra",
    escalations: 6,
  },
];

const task10TrendData = [
  {
    day: "Mon",
    escalations: 4,
  },
  {
    day: "Tue",
    escalations: 7,
  },
  {
    day: "Wed",
    escalations: 5,
  },
  {
    day: "Thu",
    escalations: 9,
  },
  {
    day: "Fri",
    escalations: 6,
  },
  {
    day: "Sat",
    escalations: 11,
  },
  {
    day: "Sun",
    escalations: 8,
  },
];

const TASK10_COLORS = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#22c55e",
];


/* =========================================================
   CHART STYLES
========================================================= */

const chartFillStyle = {
  flex: "1 1 auto",
  minHeight: 0,
  width: "100%",
};

const mapBoxStyle = {
  width: "100%",
  height: 420,
};


/* =========================================================
   COMPONENT
========================================================= */

function GovernanceDashboard() {

  const [simulation, setSimulation] = useState(false);

  const [logs, setLogs] = useState([]);

  /* IMPORTANT:
     Controls which page is visible in main-content
  */
  const [activeMenu, setActiveMenu] = useState("dashboard");


  /* =======================================================
     MINISTERIAL SIMULATION
  ======================================================= */

  const runSimulation = () => {

    setSimulation(true);

    const events = [
      "Flood surge detected in South Mumbai",
      "Signal intelligence activated",
      "Ministerial escalation approved",
      "Field execution teams dispatched",
      "Traffic rerouting initiated",
      "Water pumps activated",
      "Citizen complaint spike handled",
      "Emergency response stabilized",
      "Governance execution completed",
      "Replay timeline generated",
    ];

    setLogs([]);

    events.forEach((event, index) => {

      setTimeout(() => {

        setLogs((prev) => [
          ...prev,
          event,
        ]);

      }, index * 1500);

    });
  };


  /* =======================================================
     TASK 10 PAGE
  ======================================================= */

  const renderTask10 = () => {

    return (
      <div className="task10-dashboard">

        {/* =================================================
            TASK 10 HEADER
        ================================================= */}

        <div className="task10-header">

          <div>
            <h1>
              Escalation Management
            </h1>

            <p>
              UCCIS Ministerial Escalation & Governance Response
            </p>
          </div>


          {/* <div className="task10-status">

            <span className="status-dot"></span>

            SYSTEM OPERATIONAL

          </div> */}

        </div>


        {/* =================================================
            KPI CARDS
        ================================================= */}

        <div className="task10-kpi-grid">

          <div className="task10-kpi-card">

            <div className="kpi-title">
              ACTIVE ESCALATIONS
            </div>

            <div className="kpi-value">
              08
            </div>

            <div className="kpi-subtitle">
              Currently under monitoring
            </div>

          </div>


          <div className="task10-kpi-card critical-card">

            <div className="kpi-title">
              CRITICAL ESCALATIONS
            </div>

            <div className="kpi-value">
              03
            </div>

            <div className="kpi-subtitle">
              Immediate intervention required
            </div>

          </div>


          <div className="task10-kpi-card">

            <div className="kpi-title">
              PENDING APPROVAL
            </div>

            <div className="kpi-value">
              02
            </div>

            <div className="kpi-subtitle">
              Awaiting ministerial decision
            </div>

          </div>


          <div className="task10-kpi-card resolved-card">

            <div className="kpi-title">
              RESOLVED
            </div>

            <div className="kpi-value">
              12
            </div>

            <div className="kpi-subtitle">
              Successfully closed
            </div>

          </div>

        </div>


        {/* =================================================
            CHART ROW
        ================================================= */}

        <div className="task10-chart-grid">


          {/* ===============================================
              PIE CHART
          =============================================== */}

          <div className="task10-chart-card">

            <h2>
              Escalation Status Distribution
            </h2>

            <div style={chartFillStyle}>

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={task10StatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="48%"
                    innerRadius={75}
                    outerRadius={120}
                    paddingAngle={3}
                    label
                  >

                    {task10StatusData.map(
                      (entry, index) => (

                        <Cell
                          key={`status-${index}`}
                          fill={
                            TASK10_COLORS[index]
                          }
                        />

                      )
                    )}

                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background:
                        "#111827",
                      border:
                        "1px solid #334155",
                      borderRadius:
                        "8px",
                      color: "#ffffff",
                    }}
                  />

                </PieChart>

              </ResponsiveContainer>

            </div>


            <div className="chart-legend">

              <span>
                <i className="legend-critical"></i>
                Critical
              </span>

              <span>
                <i className="legend-high"></i>
                High
              </span>

              <span>
                <i className="legend-medium"></i>
                Medium
              </span>

              <span>
                <i className="legend-resolved"></i>
                Resolved
              </span>

            </div>

          </div>


          {/* ===============================================
              ZONE BAR CHART
          =============================================== */}

          <div className="task10-chart-card">

            <h2>
              Escalations by Zone
            </h2>

            <div style={chartFillStyle}>

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={task10ZoneData}
                  margin={{
                    top: 15,
                    right: 20,
                    left: 10,
                    bottom: 75,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#334155"
                  />

                  <XAxis
  dataKey="zone"
  interval={0}
  tickLine={false}
  axisLine={{
    stroke: "#475569",
  }}
  height={85}
  tick={({ x, y, payload }) => (
    <text
      x={x}
      y={y + 15}
      textAnchor="middle"
      fill="#cbd5e1"
      fontSize={11}
      fontWeight={500}
    >
      {payload.value === "South Mumbai" ? (
        <>
          <tspan x={x} dy="0">
            South
          </tspan>
          <tspan x={x} dy="15">
            Mumbai
          </tspan>
        </>
      ) : payload.value === "Thane West" ? (
        <>
          <tspan x={x} dy="0">
            Thane
          </tspan>
          <tspan x={x} dy="15">
            West
          </tspan>
        </>
      ) : (
        <tspan x={x} dy="0">
          {payload.value}
        </tspan>
      )}
    </text>
  )}
  label={{
    value: "Zone",
    position: "insideBottom",
    offset: -8,
    fill: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  }}
/>

                  <YAxis
                    domain={[0, 10]}
                    ticks={[
                      0,
                      2,
                      4,
                      6,
                      8,
                      10,
                    ]}
                    tick={{
                      fill: "#cbd5e1",
                      fontSize: 12,
                    }}
                    axisLine={{
                      stroke: "#475569",
                    }}
                    tickLine={false}
                    label={{
                      value:
                        "Escalation Count",
                      angle: -90,
                      position:
                        "outsideRight",
                      fill: "#ffffff",
                      fontSize: 14,
                      fontWeight:
                        "bold",
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      background:
                        "#111827",
                      border:
                        "1px solid #334155",
                      borderRadius:
                        "8px",
                      color: "#ffffff",
                    }}
                  />

                  <Bar
                    dataKey="escalations"
                    fill="#18b4eb"
                    radius={[
                      8,
                      8,
                      0,
                      0,
                    ]}
                    barSize={42}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>


        {/* =================================================
            TREND CHART
        ================================================= */}

        <div className="task10-chart-card full-width">

          <h2>
            Escalation Trend Analysis
          </h2>

          <div style={chartFillStyle}>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={task10TrendData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 10,
                  bottom: 25,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#cbd5e1",
                    fontSize: 14,
                  }}
                  axisLine={{
                    stroke: "#475569",
                  }}
                  tickLine={false}
                  label={{
                    value: "Day",
                    position:
                      "insideBottom",
                    offset: -15,
                    fill: "#ffffff",
                    fontSize: 15,
                    fontWeight:
                      "bold",
                  }}
                />

                <YAxis
                  domain={[0, 12]}
                  ticks={[
                    0,
                    3,
                    6,
                    9,
                    12,
                  ]}
                  tick={{
                    fill: "#cbd5e1",
                    fontSize: 14,
                  }}
                  axisLine={{
                    stroke: "#475569",
                  }}
                  tickLine={false}
                  label={{
                    value:
                      "Escalation Count",
                    angle: -90,
                    position:
                      "insideLeft",
                    fill: "#ffffff",
                    fontSize: 15,
                    fontWeight:
                      "bold",
                  }}
                />

                <Tooltip
                  contentStyle={{
                    background:
                      "#111827",
                    border:
                      "1px solid #334155",
                    borderRadius:
                      "8px",
                    color: "#ffffff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="escalations"
                  stroke="#18b4eb"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#18b4eb",
                    stroke:
                      "#ffffff",
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 9,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* =================================================
            RECENT ESCALATION ACTIVITY
        ================================================= */}

        <div className="task10-activity-card">

          <div className="activity-header">

            <div>

              <h2>
                Recent Escalation Activity
              </h2>

              <p>
                Latest governance escalation events
              </p>

            </div>

            {/* <span className="live-badge">
              LIVE
            </span> */}

          </div>


          <div className="escalation-table">

            <div className="table-header">

              <span>ZONE</span>

              <span>EVENT</span>

              <span>SEVERITY</span>

              <span>STATUS</span>

            </div>


            <div className="table-row">

              <span>
                South Mumbai
              </span>

              <span>
                Flood escalation detected
              </span>

              <span className="severity-critical">
                CRITICAL
              </span>

              <span className="status-active">
                ACTIVE
              </span>

            </div>


            <div className="table-row">

              <span>
                Thane West
              </span>

              <span>
                Ministerial intervention requested
              </span>

              <span className="severity-high">
                HIGH
              </span>

              <span className="status-pending">
                PENDING
              </span>

            </div>


            <div className="table-row">

              <span>
                Kalwa
              </span>

              <span>
                Water shortage escalation
              </span>

              <span className="severity-medium">
                MEDIUM
              </span>

              <span className="status-active">
                ACTIVE
              </span>

            </div>


            <div className="table-row">

              <span>
                Andheri
              </span>

              <span>
                Traffic congestion escalation
              </span>

              <span className="severity-high">
                HIGH
              </span>

              <span className="status-resolved">
                RESOLVED
              </span>

            </div>

          </div>

        </div>

      </div>
    );
  };



  /* =======================================================
     TASK 11 — FIELD EXECUTION
  ======================================================= */

  const renderFieldExecution = () => {
    const statusData = [
      { name: "Dispatched", value: 8 },
      { name: "In Progress", value: 6 },
      { name: "Completed", value: 12 },
      { name: "Delayed", value: 2 },
    ];

    const zoneData = [
      { zone: "South Mumbai", tasks: 12 },
      { zone: "Andheri", tasks: 7 },
      { zone: "Thane West", tasks: 15 },
      { zone: "Kalwa", tasks: 5 },
      { zone: "Mumbra", tasks: 10 },
    ];

    const trendData = [
      { day: "Mon", tasks: 5 },
      { day: "Tue", tasks: 8 },
      { day: "Wed", tasks: 6 },
      { day: "Thu", tasks: 10 },
      { day: "Fri", tasks: 8 },
      { day: "Sat", tasks: 13 },
      { day: "Sun", tasks: 9 },
    ];

    const fieldColors = ["#18b4eb", "#f59e0b", "#22c55e", "#ef4444"];

    return (
      <div className="task11-dashboard">
        <div className="task11-header">
          <div>
            <h1>Field Execution Management</h1>
            <p>UCCIS Field Operations & Governance Response</p>
          </div>

          <div className="task11-system-status">
            {/* <span></span>
            SYSTEM OPERATIONAL */}
          </div>
        </div>

        <div className="task11-kpi-grid">
          <div className="task11-kpi-card">
            <div className="kpi-title">ACTIVE OPERATIONS</div>
            <div className="kpi-value">08</div>
            <div className="kpi-subtitle">Currently deployed</div>
          </div>

          <div className="task11-kpi-card task11-active-card">
            <div className="kpi-title">IN PROGRESS</div>
            <div className="kpi-value">06</div>
            <div className="kpi-subtitle">Field teams executing</div>
          </div>

          <div className="task11-kpi-card task11-resolved-card">
            <div className="kpi-title">COMPLETED</div>
            <div className="kpi-value">12</div>
            <div className="kpi-subtitle">Successfully completed</div>
          </div>

          <div className="task11-kpi-card task11-critical-card">
            <div className="kpi-title">DELAYED</div>
            <div className="kpi-value">02</div>
            <div className="kpi-subtitle">Requires attention</div>
          </div>
        </div>

        <div className="task11-chart-grid">
          <div className="task11-chart-card">
            <h2>Execution Status Distribution</h2>

            <div className="task11-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="48%"
                    innerRadius={72}
                    outerRadius={120}
                    paddingAngle={3}
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={`task11-status-${index}`}
                        fill={fieldColors[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background: "#111827",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#ffffff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="task11-legend">
              <span><i style={{ background: "#18b4eb" }}></i>Dispatched</span>
              <span><i style={{ background: "#f59e0b" }}></i>In Progress</span>
              <span><i style={{ background: "#22c55e" }}></i>Completed</span>
              <span><i style={{ background: "#ef4444" }}></i>Delayed</span>
            </div>
          </div>

          <div className="task11-chart-card">
            <h2>Field Operations by Zone</h2>

            <div className="task11-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={zoneData}
                  margin={{ top: 15, right: 20, left: 10, bottom: 70 }}
                  barCategoryGap="12%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                  <XAxis
                    dataKey="zone"
                    interval={0}
                    height={80}
                    tickLine={false}
                    axisLine={{ stroke: "#475569" }}
                    tick={({ x, y, payload }) => (
                      <text
                        x={x}
                        y={y + 14}
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize={11}
                      >
                        {payload.value === "South Mumbai" ? (
                          <>
                            <tspan x={x} dy="0">South</tspan>
                            <tspan x={x} dy="15">Mumbai</tspan>
                          </>
                        ) : payload.value === "Thane West" ? (
                          <>
                            <tspan x={x} dy="0">Thane</tspan>
                            <tspan x={x} dy="15">West</tspan>
                          </>
                        ) : (
                          <tspan x={x}>{payload.value}</tspan>
                        )}
                      </text>
                    )}
                    label={{
                      value: "Zone",
                      position: "insideBottom",
                      offset: -8,
                      fill: "#ffffff",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  />

                  <YAxis
                    domain={[0, 10]}
                    ticks={[0, 2, 4, 6, 8, 10]}
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    axisLine={{ stroke: "#475569" }}
                    tickLine={false}
                    label={{
                      value: "Execution Count",
                      angle: -90,
                      position: "outsideLeft",
                      fill: "#ffffff",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#111827",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#ffffff",
                    }}
                  />

                  <Bar
                    dataKey="tasks"
                    name="Executions"
                    fill="#18b4eb"
                    radius={[8, 8, 0, 0]}
                    barSize={42}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="task11-chart-card task11-full-width">
          <h2>Field Execution Trend Analysis</h2>

          <div className="task11-trend-area">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                <XAxis
                  dataKey="day"
                  tick={{ fill: "#cbd5e1", fontSize: 14 }}
                  axisLine={{ stroke: "#475569" }}
                  tickLine={false}
                  label={{
                    value: "Day",
                    position: "insideBottom",
                    offset: -18,
                    fill: "#ffffff",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                />

                <YAxis
                  domain={[0, 15]}
                  ticks={[0, 3, 6, 9, 12, 15]}
                  tick={{ fill: "#cbd5e1", fontSize: 14 }}
                  axisLine={{ stroke: "#475569" }}
                  tickLine={false}
                  label={{
                    value: "Execution Count",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#ffffff",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="tasks"
                  name="Executions"
                  stroke="#18b4eb"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#18b4eb",
                    stroke: "#ffffff",
                    strokeWidth: 2,
                  }}
                  activeDot={{ r: 9 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="task11-activity-card">
          <div className="task11-activity-header">
            <div>
              <h2>Live Field Operations</h2>
              <p>Current field deployment and execution status</p>
            </div>
            {/* <span className="task11-live-badge">LIVE</span> */}
          </div>

          <div className="task11-operation-list">
            <div className="task11-operation-row">
              <div className="task11-operation-icon critical">!</div>
              <div className="task11-operation-info">
                <h3>South Mumbai Flood Response</h3>
                <p>Emergency response team deployed</p>
              </div>
              <span className="task11-operation-status critical-status">CRITICAL</span>
            </div>

            <div className="task11-operation-row">
              <div className="task11-operation-icon high">!</div>
              <div className="task11-operation-info">
                <h3>Thane West Water Supply</h3>
                <p>Field team executing restoration</p>
              </div>
              <span className="task11-operation-status high-status">ACTIVE</span>
            </div>

            <div className="task11-operation-row">
              <div className="task11-operation-icon medium">!</div>
              <div className="task11-operation-info">
                <h3>Andheri Traffic Control</h3>
                <p>Traffic personnel dispatched</p>
              </div>
              <span className="task11-operation-status medium-status">IN PROGRESS</span>
            </div>

            <div className="task11-operation-row">
              <div className="task11-operation-icon success">✓</div>
              <div className="task11-operation-info">
                <h3>Mumbra Emergency Support</h3>
                <p>Field operation successfully completed</p>
              </div>
              <span className="task11-operation-status resolved-status">COMPLETED</span>
            </div>
          </div>
        </div>
      </div>
    );
  };


  /* =======================================================
     REPLAY VIEW
  ======================================================= */

  const renderReplay = () => {
    const replayTrendData = [
      { time: "10:00", risk: 28, confidence: 82 },
      { time: "10:15", risk: 36, confidence: 84 },
      { time: "10:30", risk: 52, confidence: 87 },
      { time: "10:45", risk: 71, confidence: 91 },
      { time: "11:00", risk: 86, confidence: 94 },
      { time: "11:15", risk: 63, confidence: 92 },
      { time: "11:30", risk: 42, confidence: 96 },
    ];

    const replayStateData = [
      { name: "LOW", value: 3 },
      { name: "MEDIUM", value: 4 },
      { name: "HIGH", value: 2 },
    ];

    const replayZoneData = [
      { zone: "South Mumbai", snapshots: 14 },
      { zone: "Andheri", snapshots: 9 },
      { zone: "Thane West", snapshots: 17 },
      { zone: "Kalwa", snapshots: 7 },
      { zone: "Mumbra", snapshots: 12 },
    ];

    const replayColors = ["#22c55e", "#f59e0b", "#ef4444"];

    return (
      <div className="replay-dashboard">
        <div className="replay-header">
          <div>
            <h1>Replay View</h1>
            <p>UCCIS State Reconstruction & Historical Intelligence Replay</p>
          </div>

          <div className="replay-status">
            {/* <span></span>
            REPLAY ENGINE READY */}
          </div>
        </div>

        <div className="replay-kpi-grid">
          <div className="replay-kpi-card">
            <div className="kpi-title">TOTAL SNAPSHOTS</div>
            <div className="kpi-value">09</div>
            <div className="kpi-subtitle">Historical states captured</div>
          </div>

          <div className="replay-kpi-card replay-high-card">
            <div className="kpi-title">PEAK RISK</div>
            <div className="kpi-value">86</div>
            <div className="kpi-subtitle">Highest reconstructed risk</div>
          </div>

          <div className="replay-kpi-card replay-confidence-card">
            <div className="kpi-title">CONFIDENCE</div>
            <div className="kpi-value">96%</div>
            <div className="kpi-subtitle">Replay confidence score</div>
          </div>

          <div className="replay-kpi-card replay-resolved-card">
            <div className="kpi-title">FINAL STATE</div>
            <div className="kpi-value">LOW</div>
            <div className="kpi-subtitle">System stabilized</div>
          </div>
        </div>

        <div className="replay-chart-grid">
          <div className="replay-chart-card">
            <h2>Risk & Confidence Replay</h2>

            <div className="replay-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={replayTrendData}
                  margin={{ top: 15, right: 25, left: 10, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                  <XAxis
                    dataKey="time"
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    axisLine={{ stroke: "#475569" }}
                    tickLine={false}
                    label={{
                      value: "Replay Time",
                      position: "insideBottom",
                      offset: -15,
                      fill: "#ffffff",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  />

                  <YAxis
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    axisLine={{ stroke: "#475569" }}
                    tickLine={false}
                    label={{
                      value: "Score",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#ffffff",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#111827",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#ffffff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="risk"
                    name="Risk Score"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />

                  <Line
                    type="monotone"
                    dataKey="confidence"
                    name="Confidence"
                    stroke="#18b4eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="replay-chart-card">
            <h2>Reconstructed State Distribution</h2>

            <div className="replay-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={replayStateData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="48%"
                    innerRadius={65}
                    outerRadius={115}
                    paddingAngle={4}
                    label
                  >
                    {replayStateData.map((entry, index) => (
                      <Cell
                        key={`replay-state-${index}`}
                        fill={replayColors[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background: "#111827",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#ffffff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="replay-legend">
              <span><i style={{ background: "#22c55e" }}></i>LOW</span>
              <span><i style={{ background: "#f59e0b" }}></i>MEDIUM</span>
              <span><i style={{ background: "#ef4444" }}></i>HIGH</span>
            </div>
          </div>
        </div>

        <div className="replay-chart-card replay-full-width">
          <h2>Replay Snapshots by Zone</h2>

          <div className="replay-zone-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={replayZoneData}
                margin={{ top: 15, right: 20, left: 10, bottom: 75 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                <XAxis
                  dataKey="zone"
                  interval={0}
                  height={80}
                  tickLine={false}
                  axisLine={{ stroke: "#475569" }}
                  tick={({ x, y, payload }) => (
                    <text
                      x={x}
                      y={y + 14}
                      textAnchor="middle"
                      fill="#cbd5e1"
                      fontSize={11}
                    >
                      {payload.value === "South Mumbai" ? (
                        <>
                          <tspan x={x} dy="0">South</tspan>
                          <tspan x={x} dy="15">Mumbai</tspan>
                        </>
                      ) : payload.value === "Thane West" ? (
                        <>
                          <tspan x={x} dy="0">Thane</tspan>
                          <tspan x={x} dy="15">West</tspan>
                        </>
                      ) : (
                        <tspan x={x}>{payload.value}</tspan>
                      )}
                    </text>
                  )}
                  label={{
                    value: "Zone",
                    position: "insideBottom",
                    offset: -8,
                    fill: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                />

                <YAxis
                  domain={[0, 10]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  axisLine={{ stroke: "#475569" }}
                  tickLine={false}
                  label={{
                    value: "Snapshot Count",
                    angle: -90,
                    position: "outsideLeft",
                    fill: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                />

                <Bar
                  dataKey="snapshots"
                  name="Snapshots"
                  fill="#18b4eb"
                  radius={[8, 8, 0, 0]}
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="replay-timeline-card">
          <div className="replay-activity-header">
            <div>
              <h2>Replay Timeline</h2>
              <p>Chronological reconstruction of the operational state</p>
            </div>

            {/* <span className="replay-live-badge">RECONSTRUCTED</span> */}
          </div>

          <div className="replay-timeline">
            <div className="replay-timeline-item">
              <div className="replay-time">10:00</div>
              <div className="replay-marker low"></div>
              <div className="replay-event">
                <h3>Baseline State Captured</h3>
                <p>Risk 28 · Confidence 82% · LOW</p>
              </div>
            </div>

            <div className="replay-timeline-item">
              <div className="replay-time">10:30</div>
              <div className="replay-marker medium"></div>
              <div className="replay-event">
                <h3>Risk State Increased</h3>
                <p>Risk 52 · Confidence 87% · MEDIUM</p>
              </div>
            </div>

            <div className="replay-timeline-item">
              <div className="replay-time">11:00</div>
              <div className="replay-marker high"></div>
              <div className="replay-event">
                <h3>Critical State Reconstructed</h3>
                <p>Risk 86 · Confidence 94% · HIGH</p>
              </div>
            </div>

            <div className="replay-timeline-item">
              <div className="replay-time">11:30</div>
              <div className="replay-marker low"></div>
              <div className="replay-event">
                <h3>System Stabilized</h3>
                <p>Risk 42 · Confidence 96% · LOW transition initiated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  /* =======================================================
     NORMAL GOVERNANCE DASHBOARD
  ======================================================= */

  const renderDashboard = () => {

    return (
      <>

        {/* TOPBAR */}

        <div className="topbar">

          <div>

            <h1>
              UCCIS Governance Dashboard
            </h1>

            <p
              style={{
                color: "#9ca3af",
                marginTop: "5px",
              }}
            >
              Mumbai-Thane Ministerial Intelligence System
            </p>

          </div>


          <button
            onClick={runSimulation}
          >
            Run Ministerial Simulation
          </button>

        </div>


        {/* KPI CARDS */}

        <div className="grid-cards">

          <div className="card">

            <h3>
              Total Incidents
            </h3>

            <h2>
              148
            </h2>

          </div>


          <div className="card">

            <h3>
              Flood Alerts
            </h3>

            <h2>
              28
            </h2>

          </div>


          <div className="card">

            <h3>
              Traffic Violations
            </h3>

            <h2>
              52
            </h2>

          </div>


          <div className="card">

            <h3>
              Water Shortages
            </h3>

            <h2>
              14
            </h2>

          </div>

        </div>


        {/* SIMULATION FEED */}

        {simulation && (

          <div className="feed">

            <h2
              style={{
                marginBottom: "20px",
                color: "cyan",
              }}
            >
              Live Ministerial Simulation
            </h2>


            {logs.map(
              (log, index) => (

                <div
                  key={index}
                  className="feed-item"
                >
                  {log}
                </div>

              )
            )}

          </div>

        )}


        {/* EXISTING CHARTS */}

        <div className="chart-grid">


          {/* INCIDENT TREND */}

          <div
            style={{
              width: "100%",
              height: "500px",
              background: "#111827",
              borderRadius: "18px",
              padding:
                "25px 25px 25px 10px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "25px",
                marginLeft: "15px",
              }}
            >
              Incident Trend Analysis
            </h2>


            <div style={chartFillStyle}>

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart
                  data={lineData}
                  margin={{
                    top: 10,
                    right: 20,
                    left: -20,
                    bottom: 20,
                  }}
                >

                  <XAxis
                    dataKey="day"
                    label={{
                      value: "Time",
                      position:
                        "insideBottom",
                      offset: -10,
                      fill: "#ffffff",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                    tick={{
                      fill: "#cbd5e1",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                    axisLine={{
                      stroke: "#475569",
                    }}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 32]}
                    label={{
                      value: "Incident Count",
                      angle: -90,
                      position:
                        "insideLeft",
                      fill: "#ffffff",
                      fontSize: 18,
                      fontWeight: "bold",
                      dx: -10,
                    }}
                    tick={{
                      fill: "#cbd5e1",
                      fontSize: 18,
                    }}
                    axisLine={{
                      stroke: "#475569",
                    }}
                    tickLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#1e293b",
                      border: "none",
                      borderRadius: "10px",
                      color: "#fff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="incidents"
                    stroke="#00BFFF"
                    strokeWidth={5}
                    dot={{
                      r: 7,
                      fill: "#00BFFF",
                      stroke: "#ffffff",
                      strokeWidth: 3,
                    }}
                    activeDot={{
                      r: 10,
                      fill: "#00BFFF",
                      stroke: "#ffffff",
                      strokeWidth: 3,
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* SEVERITY */}

          <div
            style={{
              width: "100%",
              height: "500px",
              background: "#111827",
              borderRadius: "18px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Severity Distribution
            </h2>


            <div style={chartFillStyle}>

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={90}
                    paddingAngle={0}
                    labelLine={true}
                    label={({ value }) =>
                      value
                    }
                  >

                    {pieData.map(
                      (entry, index) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[index]
                          }
                          stroke="#ffffff"
                          strokeWidth={2}
                        />

                      )
                    )}

                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background:
                        "#1a1a2e",
                      border:
                        "1px solid #2b2b3d",
                      borderRadius:
                        "8px",
                    }}
                    labelStyle={{
                      color: "#ffffff",
                    }}
                    itemStyle={{
                      color: "#ffffff",
                    }}
                  />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* ZONE COMPARISON */}

          <div
            style={{
              width: "100%",
              height: "500px",
              background: "#111827",
              borderRadius: "18px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Zone Comparison
            </h2>


            <div style={chartFillStyle}>

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={barData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 100,
                  }}
                  barCategoryGap="15%"
                >

                  <XAxis
                    dataKey="zone"
                    label={{
                      value: "Zones",
                      position:
                        "insideBottom",
                      offset: -15,
                      fill: "#ffffff",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                    tick={{
                      fill: "#94a3b8",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                    tickLine={false}
                    axisLine={{
                      stroke: "#475569",
                    }}
                    angle={-45}
                    textAnchor="end"
                    height={120}
                    interval={0}
                  />

                  <YAxis
                    domain={[0, 60]}
                    ticks={[
                      0,
                      15,
                      30,
                      45,
                      60,
                    ]}
                    label={{
                      value:
                        "Performance Score",
                      angle: -90,
                      position:
                        "insideLeft",
                      fill: "#ffffff",
                      fontSize: 16,
                      fontWeight: "bold",
                      dx: -10,
                    }}
                    tick={{
                      fill: "#94a3b8",
                      fontSize: 14,
                    }}
                    tickLine={false}
                    axisLine={{
                      stroke: "#475569",
                    }}
                  />

                  <Tooltip
                    cursor={false}
                    contentStyle={{
                      background:
                        "#ffffff",
                      border: "none",
                      borderRadius:
                        "10px",
                      color: "#00BFFF",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    formatter={(value) => [
                      `${value}`,
                      "Value",
                    ]}
                  />

                  <Bar
                    dataKey="value"
                    fill="#18b4eb"
                    radius={[
                      12,
                      12,
                      0,
                      0,
                    ]}
                    barSize={60}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* GOVERNANCE FEED */}

          <div
            className="chart-box"
            style={{
              width: "100%",
              minWidth: 0,
              height: 450,
              background: "#111827",
              borderRadius: "16px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            <h2
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Governance Intelligence Feed
            </h2>


            <div className="feed">

              <div className="feed-item">
                Flood escalation triggered in South Mumbai
              </div>

              <div className="feed-item">
                Water shortage detected in Kalwa-Mumbra
              </div>

              <div className="feed-item">
                Traffic congestion increased near Andheri
              </div>

              <div className="feed-item">
                Emergency response teams activated
              </div>

              <div className="feed-item">
                Ministerial execution request approved
              </div>

            </div>

          </div>

        </div>


        {/* MAP */}

        <div
          className="map-box"
          style={mapBoxStyle}
        >

          <MapContainer
            center={[
              19.076,
              72.8777,
            ]}
            zoom={10}
            style={{
              height: "100%",
              width: "100%",
            }}
          >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <Marker
              position={[
                19.076,
                72.8777,
              ]}
            >
              <Popup>
                South Mumbai Flood Alert
              </Popup>
            </Marker>


            <Marker
              position={[
                19.2183,
                72.9781,
              ]}
            >
              <Popup>
                Thane Governance Alert
              </Popup>
            </Marker>


            <Marker
              position={[
                19.1136,
                72.8697,
              ]}
            >
              <Popup>
                Andheri Traffic Escalation
              </Popup>
            </Marker>


            <Marker
              position={[
                19.1864,
                73.0228,
              ]}
            >
              <Popup>
                Kalwa-Mumbra Water Crisis
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </>
    );
  };


  /* =======================================================
     MAIN RETURN
  ======================================================= */

  return (

    <div className="dashboard-container">


      {/* ===================================================
          SIDEBAR
      =================================================== */}

      <div className="sidebar">

        <h2>
          UCCIS
        </h2>


        <div className="sidebar-menu">


          {/* DASHBOARD */}

          <div
            className={`menu-item ${
              activeMenu === "dashboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveMenu("dashboard")
            }
          >
            Dashboard
          </div>


          {/* ESCALATION */}

          <div
            className={`menu-item ${
              activeMenu === "escalation"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveMenu("escalation")
            }
          >
            Escalation
          </div>


          {/* FIELD EXECUTION */}

          <div
            className="menu-item"
            onClick={() =>
              setActiveMenu("execution")
            }
          >
            Field Execution
          </div>


          {/* REPLAY VIEW */}

          <div
            className="menu-item"
            onClick={() =>
              setActiveMenu("replay")
            }
          >
            Replay View
          </div>

        </div>

      </div>


      {/* ===================================================
          MAIN CONTENT

          IMPORTANT:
          Only ONE page is rendered here at a time.
      =================================================== */}

      <div className="main-content">


        {/* ================================================
            DASHBOARD
        ================================================ */}

        {activeMenu === "dashboard" && (
          renderDashboard()
        )}


        {/* ================================================
            TASK 10 ESCALATION
        ================================================ */}

        {activeMenu === "escalation" && (
          renderTask10()
        )}


        {/* ================================================
            FIELD EXECUTION
        ================================================ */}

        {activeMenu === "execution" && (
          renderFieldExecution()
        )}


        {/* ================================================
            REPLAY VIEW
        ================================================ */}

        {activeMenu === "replay" && (
          renderReplay()
        )}

      </div>

    </div>
  );
}

export default GovernanceDashboard;