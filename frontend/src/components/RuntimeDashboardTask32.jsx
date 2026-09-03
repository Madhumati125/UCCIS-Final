import React, { useEffect, useState } from "react";

import SidebarTask32 from "../components/SidebarTask32";
import StatCardTask32 from "../components/StatCardTask32";
import IncidentChartTask32 from "../components/IncidentChartTask32";

import { getDashboard, executeSignal } from "../services/api";

const RuntimeDashboardTask32 = () => {
  const [dashboard, setDashboard] = useState(null);

  const [activePanel, setActivePanel] = useState("dashboard");

  const loadDashboard = async () => {
    try {
      const response = await getDashboard();
      setDashboard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleExecuteSignal = async () => {
    try {
      await executeSignal({
        signal_id: `SIG-${Date.now()}`,
        signal_type: "Flood",
      });

      loadDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) return <h2>Loading...</h2>;

  const cards = dashboard.cards || {};
  const analytics = dashboard.analytics || {};

  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      <SidebarTask32
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />

      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1>
            {activePanel === "dashboard" && "Dashboard Runtime State"}
            {activePanel === "signals" && "Signal Layer Analytics"}
            {activePanel === "runtime" && "System Runtime Health"}
            {/* {activePanel === "replay" && "Replay View"}
            {activePanel === "logs" && "Runtime Logs"} */}
          </h1>

          {/* <button onClick={handleExecuteSignal}>
            Execute Signal
          </button> */}
        </div>

        {/* ========================= */}
        {/* DASHBOARD VIEW */}
        {/* ========================= */}

        {activePanel === "dashboard" && (
          <>
            <div
              className="runtime-entry"
              onClick={() => setActivePanel("runtime")}
            >
              <h3>System Runtime Health</h3>
              {/* <p>Click to open complete runtime analytics</p> */}
            </div>

            <div className="cards">
  <StatCardTask32 title="Signals" value={10} />
  <StatCardTask32 title="Telemetry" value={42} />
  <StatCardTask32 title="Incidents" value={21} />
  <StatCardTask32 title="Escalations" value={32} />
</div>

            <div className="chart-section">
              <h3>Signal Overview</h3>

              <IncidentChartTask32
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>
          </>
        )}

        {/* ========================= */}
        {/* SIGNAL LAYER VIEW */}
        {/* ========================= */}

        {activePanel === "signals" && (
          <div className="drilldown-panel">

            <h2>Signal Layer - Deep Analytics</h2>

            <div className="cards">
  <StatCardTask32 title="Signals" value={10} />
  <StatCardTask32 title="Telemetry" value={42} />
  <StatCardTask32 title="Incidents" value={21} />
  <StatCardTask32 title="Escalations" value={32} />
</div>

            <div className="chart-section">
              <IncidentChartTask32
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>

            {/* <div className="backend-response">
              <h3>Backend Response</h3>
              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div> */}

          </div>
        )}

        {/* ========================= */}
        {/* RUNTIME HEALTH VIEW */}
        {/* ========================= */}

        {activePanel === "runtime" && (
          <div className="drilldown-panel">

            <h2>System Runtime Health - Full Analytics</h2>

            {/* METRICS */}
            <div className="cards">
              <StatCardTask32 title="Status" value="Healthy" />
              <StatCardTask32 title="CPU Usage" value={analytics.cpu || 45} />
              <StatCardTask32 title="Memory Usage" value={analytics.memory || 30} />
              <StatCardTask32 title="Latency" value={`${analytics.latency || 120} ms`} />
              <StatCardTask32 title="Error Rate" value={analytics.errorRate || "0.02%"} />
              <StatCardTask32 title="Uptime" value={dashboard.summary?.uptime || "99.99%"} />
            </div>

            {/* CHART 1 */}
            <div className="chart-section">
              <h3>Runtime Performance Trend</h3>

              <IncidentChartTask32
                signals={analytics.signals || 0}
                incidents={analytics.incidents || 0}
                escalations={analytics.escalations || 0}
              />
            </div>

            {/* ========================= */}
            {/* SYSTEM LOAD PIE CHART */}
            {/* ========================= */}

            <div className="chart-section">
              <h3>System Load Distribution</h3>

              <svg width="220" height="220" viewBox="0 0 36 36">

                {/* CPU */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#ff4d4f"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.cpu || 40} ${100 - (analytics.cpu || 40)}`}
                  strokeDashoffset="25"
                />

                {/* MEMORY */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#1890ff"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.memory || 30} ${100 - (analytics.memory || 30)}`}
                  strokeDashoffset="50"
                />

                {/* NETWORK */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#52c41a"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.network || 20} ${100 - (analytics.network || 20)}`}
                  strokeDashoffset="75"
                />

                {/* DISK */}
                <circle
                  r="15.915"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  stroke="#faad14"
                  strokeWidth="3.5"
                  strokeDasharray={`${analytics.disk || 10} ${100 - (analytics.disk || 10)}`}
                  strokeDashoffset="90"
                />

              </svg>

              {/* LEGEND */}
              <div style={{ marginTop: 10 }}>
                <p>🔴 CPU: {analytics.cpu || 40}%</p>
                <p>🔵 Memory: {analytics.memory || 30}%</p>
                <p>🟢 Network: {analytics.network || 20}%</p>
                <p>🟡 Disk: {analytics.disk || 10}%</p>
              </div>
            </div>

            {/* BACKEND RESPONSE */}
            {/* <div className="backend-response">
              <h3>Runtime Backend Response</h3>
              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div> */}

          </div>
        )}

        {/* ========================= */}
        {/* REPLAY VIEW */}
        {/* ========================= */}

        {/* {activePanel === "replay" && (
          <div className="drilldown-panel">

            <h2>Replay View</h2>

            <div className="cards">
              <StatCardTask32 title="Replay Sessions" value={cards.replaySessions || 0} />
              <StatCardTask32 title="Signals" value={cards.signals || 130} />
              <StatCardTask32 title="Incidents" value={cards.incidents || 75} />
              <StatCardTask32 title="Escalations" value={cards.escalations || 42} />
            </div>

            <div className="backend-response">
              <h3>Replay Backend Response</h3>

              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div>

          </div>
        )} */}

        {/* ========================= */}
        {/* RUNTIME LOGS VIEW */}
        {/* ========================= */}

        {/* {activePanel === "logs" && (
          <div className="drilldown-panel">

            <h2>Runtime Logs</h2>

            <table className="runtime-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Module</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {(dashboard.logs || []).length > 0 ? (
                  dashboard.logs.map((log, index) => (
                    <tr key={index}>
                      <td>{log.timestamp || "-"}</td>
                      <td>{log.module || "-"}</td>
                      <td>{log.status || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">
                      No Runtime Logs Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="backend-response">
              <h3>Runtime Backend Response</h3>

              <pre>{JSON.stringify(dashboard, null, 2)}</pre>
            </div>

          </div> */}
        {/* )} */}

      </div>
    </div>
  );
};

export default RuntimeDashboardTask32;
