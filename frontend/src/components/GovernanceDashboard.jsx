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

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

const COLORS = ["#ff0000", "#ff8800", "#00bfff", "#00ff88"];

const chartBoxStyle = {
  width: "100%",
  minWidth: 0,
  height: 450,
  background: "#111827",
  borderRadius: "16px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
};

// Shared title style so every chart header matches
// "Incident Trend Analysis" exactly.
const chartTitleStyle = {
  color: "#fff",
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "15px",
};

const mapBoxStyle = {
  width: "100%",
  height: 420,
};

function GovernanceDashboard() {
  const [simulation, setSimulation] = useState(false);
  const [logs, setLogs] = useState([]);

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
        setLogs((prev) => [...prev, event]);
      }, index * 1500);
    });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}

      <div className="sidebar">
        <h2>UCCIS</h2>

        <div className="sidebar-menu">
          <div className="menu-item">Dashboard</div>
          <div className="menu-item">Escalation</div>
          <div className="menu-item">Field Execution</div>
          <div className="menu-item">Replay View</div>
        </div>
      </div>

      {/* Main Content */}

      <div className="main-content">
        <div className="topbar">
          <div>
            <h1>UCCIS Governance Dashboard</h1>

            <p style={{ color: "#9ca3af", marginTop: "5px" }}>
              Mumbai-Thane Ministerial Intelligence System
            </p>
          </div>

          <button onClick={runSimulation}>
            Run Ministerial Simulation
          </button>
        </div>

        {/* KPI Cards */}

        <div className="grid-cards">
          <div className="card">
            <h3>Total Incidents</h3>
            <h2>148</h2>
          </div>

          <div className="card">
            <h3>Flood Alerts</h3>
            <h2>28</h2>
          </div>

          <div className="card">
            <h3>Traffic Violations</h3>
            <h2>52</h2>
          </div>

          <div className="card">
            <h3>Water Shortages</h3>
            <h2>14</h2>
          </div>
        </div>

        {/* Simulation Feed */}

        {simulation && (
          <div className="feed">
            <h2 style={{ marginBottom: "20px", color: "cyan" }}>
              Live Ministerial Simulation
            </h2>

            {logs.map((log, index) => (
              <div key={index} className="feed-item">
                {log}
              </div>
            ))}
          </div>
        )}

        {/* Charts */}

        <div className="chart-grid">
          {/* Incident Trend Analysis */}

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
    Incident Trend Analysis
  </h2>

  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={lineData}
      margin={{
        top: 10,
        right: 20,
        left: 10,
        bottom: 20,
      }}
    >
      <XAxis
        dataKey="day"
        tick={{
          fill: "#cbd5e1",
          fontSize: 18,
          fontWeight: 600,
        }}
        axisLine={{ stroke: "#475569" }}
        tickLine={false}
      />

      <YAxis
        domain={[0, 32]}
        tick={{
          fill: "#cbd5e1",
          fontSize: 18,
        }}
        axisLine={{ stroke: "#475569" }}
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

          {/* Severity Distribution */}

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

  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={pieData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={150}
        paddingAngle={0}
        labelLine={true}
        label={({ value }) => value}
      >
        {pieData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
            stroke="#ffffff"
            strokeWidth={2}
          />
        ))}
      </Pie>

      <Tooltip
        contentStyle={{
          background: "#1a1a2e",
          border: "1px solid #2b2b3d",
          borderRadius: "8px",
        }}
        labelStyle={{ color: "#ffffff" }}
        itemStyle={{ color: "#ffffff" }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

         {/* Zone Comparison */}

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

  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={barData}
      margin={{
        top: 10,
        right: 20,
        left: 10,
        bottom: 20,
      }}
      barCategoryGap="25%"
    >
      <XAxis
        dataKey="zone"
        tick={{
          fill: "#94a3b8",
          fontSize: 18,
          fontWeight: 500,
        }}
        tickLine={false}
        axisLine={{ stroke: "#475569" }}
      />

      <YAxis
        domain={[0, 60]}
        ticks={[0, 15, 30, 45, 60]}
        tick={{
          fill: "#94a3b8",
          fontSize: 18,
        }}
        tickLine={false}
        axisLine={{ stroke: "#475569" }}
      />

      <Tooltip
        cursor={false}
        contentStyle={{
          background: "#ffffff",
          border: "none",
          borderRadius: "10px",
          color: "#00BFFF",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        formatter={(value) => [`${value}`, "Value"]}
      />

      <Bar
        dataKey="value"
        fill="#18b4eb"
        radius={[12, 12, 0, 0]}
        barSize={120}
      />
    </BarChart>
  </ResponsiveContainer>
</div>

          {/* Governance Intelligence Feed */}
          <div className="chart-box" style={chartBoxStyle}>
            <h2 style={chartTitleStyle}>Governance Intelligence Feed</h2>

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

        {/* Map */}

        <div className="map-box" style={mapBoxStyle}>
          <MapContainer
            center={[19.076, 72.8777]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[19.076, 72.8777]}>
              <Popup>South Mumbai Flood Alert</Popup>
            </Marker>

            <Marker position={[19.2183, 72.9781]}>
              <Popup>Thane Governance Alert</Popup>
            </Marker>

            <Marker position={[19.1136, 72.8697]}>
              <Popup>Andheri Traffic Escalation</Popup>
            </Marker>

            <Marker position={[19.1864, 73.0228]}>
              <Popup>Kalwa-Mumbra Water Crisis</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default GovernanceDashboard;