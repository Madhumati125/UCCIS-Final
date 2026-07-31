import React, { useState } from "react";
import "./intelligence.css";

import TelemetryChartTask24 from "../components/TelemetryChartTask24";
import RuntimeMonitor from "../components/RuntimeMonitor";
import EscalationMatrix from "../components/EscalationMatrix";
import OperationalChain from "../components/OperationalChain";

export default function IntelligenceModule() {
  const [activeTab, setActiveTab] = useState("dashboard");

  /* =========================
     DASHBOARD
  ========================= */

  const renderDashboard = () => (
    <div className="grid">

      {/* TELEMETRY TREND */}

      <div className="card chart-card">

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Telemetry Trend
        </h2>

        <div
          className="chart-box"
          style={{
            width: "100%",
            height: "380px",
          }}
        >
          <TelemetryChartTask24 />
        </div>

      </div>

      {/* RUNTIME */}

      <div className="card chart-card">

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Runtime Monitor
        </h2>

        <div
          className="chart-box"
          style={{
            width: "100%",
            height: "380px",
          }}
        >
          <RuntimeMonitor />
        </div>

      </div>

      {/* ESCALATION */}

      <div className="card">
        <h3>Escalation Matrix</h3>
        <EscalationMatrix />
      </div>

      {/* OPERATIONAL CHAIN */}

      <div className="card">
        <h3>Operational Chain</h3>
        <OperationalChain />
      </div>

    </div>
  );

  /* =========================
     TELEMETRY PAGE
  ========================= */

  const renderTelemetry = () => (
    <div className="telemetry-wrapper">

      {/* HEADER */}

      <div className="card">

        <h2>📡 Telemetry Intelligence Module</h2>

        <p className="subtext">
          Live signal ingestion • Stream processing • System health monitoring
        </p>

        <div className="telemetry-live-indicator">
          <span className="live-dot"></span>
          <span className="live-text">
            LIVE TELEMETRY STREAM
          </span>
        </div>

        <div className="pulse-bar"></div>

      </div>

      {/* KPI */}

      <div className="grid">

        <div className="card">
          <h3>Total Signals</h3>
          <h2>128</h2>
        </div>

        <div className="card">
          <h3>Active Streams</h3>
          <h2>12</h2>
        </div>

        <div className="card">
          <h3>Data Rate</h3>
          <h2>4.2 MB/s</h2>
        </div>

        <div className="card">
          <h3>Anomalies</h3>
          <h2 className="danger">3</h2>
        </div>

      </div>

      {/* TELEMETRY TREND */}

      <div className="card chart-card">

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Telemetry Trend
        </h2>

        <div
          className="chart-box"
          style={{
            width: "100%",
            height: "380px",
          }}
        >
          <TelemetryChartTask24 />
        </div>

      </div>

      {/* INSIGHTS */}

      <div className="card">

        <h3>Telemetry Insights</h3>

        <ul className="insights">
          <li>✔ Signal received from Node A12</li>
          <li>✔ System stability at 92%</li>
          <li>⚠ Minor latency spike in cluster 3</li>
          <li>✔ No critical failures detected</li>
        </ul>

      </div>

    </div>
  );

  /* =========================
     ROUTING
  ========================= */

  const renderContent = () => {

    switch (activeTab) {

      case "dashboard":
        return renderDashboard();

      case "telemetry":
        return renderTelemetry();

      case "runtime":
        return (
          <div className="card chart-card">

            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Runtime Monitor
            </h2>

            <div
              className="chart-box"
              style={{
                width: "100%",
                height: "380px",
              }}
            >
              <RuntimeMonitor />
            </div>

          </div>
        );

      case "subjects":
        return <div className="card">Subjects Module</div>;

      case "chatbot":
        return <div className="card">Chatbot Module</div>;

      case "test":
        return <div className="card">Test Engine Module</div>;

      case "flashcards":
        return <div className="card">Flashcards Module</div>;

      default:
        return renderDashboard();
    }
  };

  return (

    <div className="uccis-app">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>UCCIS</h2>

        <div
          className="nav"
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("telemetry")}
        >
          Telemetry
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("runtime")}
        >
          Runtime
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("subjects")}
        >
          Subjects
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("chatbot")}
        >
          Chatbot
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("test")}
        >
          Test
        </div>

        <div
          className="nav"
          onClick={() => setActiveTab("flashcards")}
        >
          Flashcards
        </div>

      </div>

      {/* MAIN */}

      <div className="main">

        <div className="header">

          <h1>UCCIS Ecosystem Integration</h1>

          <p>
            Master DB • Runtime • Telemetry • Demo Ready System
          </p>

        </div>

        {renderContent()}

      </div>

    </div>

  );
}