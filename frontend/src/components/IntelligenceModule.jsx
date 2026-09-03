import React, { useState } from "react";
import "./intelligence.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import TelemetryChartTask24 from "../components/TelemetryChartTask24";
import RuntimeMonitor from "../components/RuntimeMonitor";
import EscalationMatrix from "../components/EscalationMatrix";
import OperationalChain from "../components/OperationalChain";


export default function IntelligenceModule() {

  const [activeTab, setActiveTab] = useState("dashboard");


  /* =========================================================
     SUBJECT CHART DATA
  ========================================================= */

  const subjectTrendData = [
    {
      month: "January",
      subjects: 92,
    },
    {
      month: "February",
      subjects: 118,
    },
    {
      month: "March",
      subjects: 135,
    },
    {
      month: "April",
      subjects: 148,
    },
    {
      month: "May",
      subjects: 165,
    },
    {
      month: "June",
      subjects: 178,
    },
  ];


  const subjectDomainData = [
    {
      domain: "Traffic",
      subjects: 42,
    },
    {
      domain: "Water",
      subjects: 36,
    },
    {
      domain: "Waste",
      subjects: 31,
    },
    {
      domain: "Safety",
      subjects: 48,
    },
    {
      domain: "Environment",
      subjects: 29,
    },
    {
      domain: "Governance",
      subjects: 62,
    },
  ];


  /* =========================================================
     SUBJECT DOMAINS
  ========================================================= */

  const subjectDomains = [
    {
      icon: "🚦",
      name: "Traffic Intelligence",
      description:
        "Traffic flow and congestion monitoring",
      count: 42,
      className: "subject-traffic",
    },

    {
      icon: "💧",
      name: "Water Intelligence",
      description:
        "Water supply and infrastructure monitoring",
      count: 36,
      className: "subject-water",
    },

    {
      icon: "♻️",
      name: "Waste Intelligence",
      description:
        "Waste collection and sanitation monitoring",
      count: 31,
      className: "subject-waste",
    },

    {
      icon: "🛡️",
      name: "Public Safety",
      description:
        "Public safety and incident intelligence",
      count: 48,
      className: "subject-public",
    },

    {
      icon: "🌱",
      name: "Environment",
      description:
        "Environmental condition monitoring",
      count: 29,
      className: "subject-environment",
    },

    {
      icon: "🏛️",
      name: "Governance",
      description:
        "Governance and administrative intelligence",
      count: 62,
      className: "subject-governance",
    },
  ];


  /* =========================================================
     DASHBOARD
  ========================================================= */

  const renderDashboard = () => (

    <div className="grid">

      {/* TELEMETRY */}

      <div className="card chart-card">

        <h2 className="large-title">
          Telemetry Trend
        </h2>

        <div className="chart-box">

          <TelemetryChartTask24 />

        </div>

      </div>


      {/* RUNTIME */}

      <div className="card chart-card">

        <h2 className="large-title">
          Runtime Monitor
        </h2>

        <div className="chart-box">

          <RuntimeMonitor />

        </div>

      </div>


      {/* ESCALATION */}

      <div className="card">

        <h3>
          Escalation Matrix
        </h3>

        <EscalationMatrix />

      </div>


      {/* OPERATIONAL CHAIN */}

      <div className="card">

        <h3>
          Operational Chain
        </h3>

        <OperationalChain />

      </div>

    </div>

  );


  /* =========================================================
     TELEMETRY
  ========================================================= */

  const renderTelemetry = () => (

    <div className="telemetry-wrapper">

      {/* HEADER */}

      <div className="card">

        <h2>
          Telemetry Intelligence Module
        </h2>

        <p className="subtext">
          Signal ingestion, stream processing and
          system health monitoring
        </p>

      </div>


      {/* KPI */}

      <div className="grid">

        <div className="card">

          <h3>
            Total Signals
          </h3>

          <h2>
            128
          </h2>

        </div>


        <div className="card">

          <h3>
            Active Streams
          </h3>

          <h2>
            12
          </h2>

        </div>


        <div className="card">

          <h3>
            Data Rate
          </h3>

          <h2>
            4.2 MB/s
          </h2>

        </div>


        <div className="card">

          <h3>
            Anomalies
          </h3>

          <h2 className="danger">
            3
          </h2>

        </div>

      </div>


      {/* TELEMETRY CHART */}

      <div className="card chart-card">

        <h2 className="large-title">
          Telemetry Trend
        </h2>

        <div className="chart-box">

          <TelemetryChartTask24 />

        </div>

      </div>


      {/* INSIGHTS */}

      <div className="card">

        <h3>
          Telemetry Insights
        </h3>

        <ul className="insights">

          <li>
            Signal received from Node A12
          </li>

          <li>
            System stability at 92%
          </li>

          <li>
            Minor latency spike in cluster 3
          </li>

          <li>
            No critical failures detected
          </li>

        </ul>

      </div>

    </div>

  );


  /* =========================================================
     SUBJECTS
  ========================================================= */

  const renderSubjects = () => (

    <div className="subjects-module">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="subjects-header">

        <div>

          <span className="subjects-label">
            INTELLIGENCE MODULE
          </span>

          <h1>
            Subjects
          </h1>

          <p>
            Classification and analysis of operational
            intelligence subjects.
          </p>

        </div>

      </div>


      {/* =====================================================
          SUMMARY CARDS
      ===================================================== */}

      <div className="subjects-summary">


        <div className="subject-summary-card">

          <span>
            TOTAL SUBJECTS
          </span>

          <h2>
            248
          </h2>

          <p>
            Registered subjects
          </p>

        </div>


        <div className="subject-summary-card">

          <span>
            ACTIVE SUBJECTS
          </span>

          <h2>
            178
          </h2>

          <p>
            Currently active
          </p>

        </div>


        <div className="subject-summary-card">

          <span>
            DOMAINS
          </span>

          <h2>
            06
          </h2>

          <p>
            Operational domains
          </p>

        </div>


        <div className="subject-summary-card">

          <span>
            HIGH PRIORITY
          </span>

          <h2>
            14
          </h2>

          <p>
            Requires attention
          </p>

        </div>

      </div>


      {/* =====================================================
          SUBJECT DOMAINS
      ===================================================== */}

      <div className="subjects-section">

        <div className="section-heading">

          <div>

            <span>
              SUBJECT REGISTRY
            </span>

            <h2>
              Operational Domains
            </h2>

          </div>

        </div>


        <div className="subject-domain-grid">

          {subjectDomains.map(
            (subject, index) => (

              <div
                className={`subject-domain-card ${subject.className}`}
                key={index}
              >

                <div className="subject-icon">
                  {subject.icon}
                </div>


                <div className="subject-domain-content">

                  <h3>
                    {subject.name}
                  </h3>

                  <p>
                    {subject.description}
                  </p>

                  <span className="subject-status">
                    Active
                  </span>

                </div>


                <strong className="subject-count">
                  {subject.count}
                </strong>

              </div>

            )
          )}

        </div>

      </div>


      {/* =====================================================
          NORMAL CHARTS
      ===================================================== */}

      <div className="subjects-chart-grid">


        {/* ===================================================
            LINE CHART
        =================================================== */}

        <div className="subjects-chart-card">

          <h3>
            Subject Trend
          </h3>

          <p className="chart-description">
            Number of registered subjects by month
          </p>


          <div className="normal-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={subjectTrendData}
                margin={{
                  top: 20,
                  right: 25,
                  left: 20,
                  bottom: 55,
                }}
              >

                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="3 3"
                />


                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 11,
                  }}
                  label={{
                    value: "Month",
                    position: "insideBottom",
                    offset: -35,
                    fill: "#cbd5e1",
                    fontSize: 12,
                  }}
                />


                <YAxis
                  stroke="#94a3b8"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 11,
                  }}
                  domain={[
                    0,
                    200,
                  ]}
                  label={{
                    value: "Number of Subjects",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#cbd5e1",
                    fontSize: 12,
                  }}
                />


                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border:
                      "1px solid #334155",
                    borderRadius: "6px",
                    color: "#ffffff",
                  }}
                />


                <Line
                  type="monotone"
                  dataKey="subjects"
                  name="Subjects"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  dot={{
                    r: 4,
                    fill: "#38bdf8",
                  }}
                  activeDot={{
                    r: 5,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* ===================================================
            BAR CHART
        =================================================== */}

        <div className="subjects-chart-card">

          <h3>
            Subject Distribution
          </h3>

          <p className="chart-description">
            Number of subjects across operational domains
          </p>


          <div className="normal-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={subjectDomainData}
                margin={{
                  top: 20,
                  right: 25,
                  left: 20,
                  bottom: 60,
                }}
              >

                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="3 3"
                />


                <XAxis
                  dataKey="domain"
                  stroke="#94a3b8"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 10,
                  }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  label={{
                    value: "Domain",
                    position: "insideBottom",
                    offset: -45,
                    fill: "#cbd5e1",
                    fontSize: 12,
                  }}
                />


                <YAxis
                  stroke="#94a3b8"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 11,
                  }}
                  domain={[
                    0,
                    70,
                  ]}
                  label={{
                    value: "Number of Subjects",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#cbd5e1",
                    fontSize: 12,
                  }}
                />


                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border:
                      "1px solid #334155",
                    borderRadius: "6px",
                    color: "#ffffff",
                  }}
                />


                <Bar
                  dataKey="subjects"
                  name="Subjects"
                  fill="#38bdf8"
                  radius={[
                    4,
                    4,
                    0,
                    0,
                  ]}
                  maxBarSize={45}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* =====================================================
          SUBJECT ACTIVITY
      ===================================================== */}

      <div className="subjects-section">

        <div className="section-heading">

          <div>

            <span>
              ACTIVITY SUMMARY
            </span>

            <h2>
              Recent Subject Activity
            </h2>

          </div>

        </div>


        <div className="subject-activity">


          <div className="activity-row">

            <span className="activity-dot green"></span>

            <div>

              <strong>
                Traffic Intelligence
              </strong>

              <p>
                Subject classification updated
              </p>

            </div>

            <span className="activity-status">
              Completed
            </span>

          </div>


          <div className="activity-row">

            <span className="activity-dot blue"></span>

            <div>

              <strong>
                Water Intelligence
              </strong>

              <p>
                Infrastructure subject added
              </p>

            </div>

            <span className="activity-status">
              Updated
            </span>

          </div>


          <div className="activity-row">

            <span className="activity-dot yellow"></span>

            <div>

              <strong>
                Public Safety
              </strong>

              <p>
                Priority classification changed
              </p>

            </div>

            <span className="activity-status">
              Review
            </span>

          </div>


          <div className="activity-row">

            <span className="activity-dot green"></span>

            <div>

              <strong>
                Governance
              </strong>

              <p>
                Subject registry synchronized
              </p>

            </div>

            <span className="activity-status">
              Completed
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          PRIORITY
      ===================================================== */}

      <div className="subjects-section">

        <div className="section-heading">

          <div>

            <span>
              PRIORITY CLASSIFICATION
            </span>

            <h2>
              Subject Priority
            </h2>

          </div>

        </div>


        <div className="priority-grid">


          <div className="priority-card low">

            <span>
              LOW
            </span>

            <h2>
              116
            </h2>

            <p>
              Stable subjects
            </p>

          </div>


          <div className="priority-card medium">

            <span>
              MEDIUM
            </span>

            <h2>
              87
            </h2>

            <p>
              Monitoring required
            </p>

          </div>


          <div className="priority-card high">

            <span>
              HIGH
            </span>

            <h2>
              31
            </h2>

            <p>
              Attention required
            </p>

          </div>


          <div className="priority-card critical">

            <span>
              CRITICAL
            </span>

            <h2>
              14
            </h2>

            <p>
              Immediate attention
            </p>

          </div>

        </div>

      </div>

    </div>

  );


  /* =========================================================
     RUNTIME
  ========================================================= */

  const renderRuntime = () => (

    <div className="card chart-card">

      <h2 className="large-title">
        Runtime Monitor
      </h2>

      <div className="chart-box">

        <RuntimeMonitor />

      </div>

    </div>

  );


  /* =========================================================
     CHATBOT
  ========================================================= */

  const renderChatbot = () => (

    <div className="card">

      <h2>
        Chatbot Module
      </h2>

      <p className="subtext">
        UCCIS intelligence assistant.
      </p>


      <div className="chatbot-panel">

        <div className="chat-message">

          <strong>
            UCCIS Assistant
          </strong>

          <p>
            Intelligence assistant is ready.
            Select an operational area to continue.
          </p>

        </div>


        <div className="chat-options">

          <button
            onClick={() =>
              alert(
                "Telemetry stability is currently 92%."
              )
            }
          >
            Check Telemetry
          </button>


          <button
            onClick={() =>
              alert(
                "Runtime system is operating normally."
              )
            }
          >
            Runtime Status
          </button>


          <button
            onClick={() =>
              alert(
                "3 operational items require attention."
              )
            }
          >
            View Alerts
          </button>

        </div>

      </div>

    </div>

  );


  /* =========================================================
     TEST
  ========================================================= */

  const renderTest = () => (

    <div className="card">

      <h2>
        Test Engine Module
      </h2>

      <p className="subtext">
        Intelligence component validation.
      </p>


      <div className="test-grid">

        <div className="test-item">

          <span>
            Telemetry Engine
          </span>

          <strong className="positive">
            PASS
          </strong>

        </div>


        <div className="test-item">

          <span>
            Runtime Monitor
          </span>

          <strong className="positive">
            PASS
          </strong>

        </div>


        <div className="test-item">

          <span>
            Subject Registry
          </span>

          <strong className="positive">
            PASS
          </strong>

        </div>


        <div className="test-item">

          <span>
            Operational Chain
          </span>

          <strong className="positive">
            PASS
          </strong>

        </div>

      </div>


      <button
        className="run-test-button"
        onClick={() =>
          alert(
            "All intelligence tests completed successfully."
          )
        }
      >
        Run Full Test
      </button>

    </div>

  );


  /* =========================================================
     FLASHCARDS
  ========================================================= */

  const renderFlashcards = () => (

    <div className="card">

      <h2>
        Flashcards Module
      </h2>

      <p className="subtext">
        Quick reference for UCCIS intelligence concepts.
      </p>


      <div className="flashcard-grid">

        <div className="flashcard">

          <span>
            TELEMETRY
          </span>

          <h3>
            What is telemetry?
          </h3>

          <p>
            Operational data collected from connected
            infrastructure and systems.
          </p>

        </div>


        <div className="flashcard">

          <span>
            SUBJECTS
          </span>

          <h3>
            What is a subject?
          </h3>

          <p>
            An operational entity classified and analyzed
            by the intelligence system.
          </p>

        </div>


        <div className="flashcard">

          <span>
            RUNTIME
          </span>

          <h3>
            What is runtime health?
          </h3>

          <p>
            A representation of system processing and
            operational stability.
          </p>

        </div>


        <div className="flashcard">

          <span>
            ESCALATION
          </span>

          <h3>
            What is escalation?
          </h3>

          <p>
            A response process initiated when an operational
            threshold requires attention.
          </p>

        </div>

      </div>

    </div>

  );


  /* =========================================================
     ROUTING
  ========================================================= */

  const renderContent = () => {

    switch (activeTab) {

      case "dashboard":
        return renderDashboard();

      case "telemetry":
        return renderTelemetry();

      case "runtime":
        return renderRuntime();

      case "subjects":
        return renderSubjects();

      case "chatbot":
        return renderChatbot();

      case "test":
        return renderTest();

      case "flashcards":
        return renderFlashcards();

      default:
        return renderDashboard();

    }

  };


  /* =========================================================
     MAIN
  ========================================================= */

  return (

    <div className="uccis-app">


      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>
          UCCIS
        </h2>


        <div
          className={
            activeTab === "dashboard"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("dashboard")
          }
        >
          Dashboard
        </div>


        <div
          className={
            activeTab === "telemetry"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("telemetry")
          }
        >
          Telemetry
        </div>


        <div
          className={
            activeTab === "runtime"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("runtime")
          }
        >
          Runtime
        </div>


        <div
          className={
            activeTab === "subjects"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("subjects")
          }
        >
          Subjects
        </div>


        <div
          className={
            activeTab === "chatbot"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("chatbot")
          }
        >
          Chatbot
        </div>


        <div
          className={
            activeTab === "test"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("test")
          }
        >
          Test
        </div>


        <div
          className={
            activeTab === "flashcards"
              ? "nav active"
              : "nav"
          }
          onClick={() =>
            setActiveTab("flashcards")
          }
        >
          Flashcards
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="main">

        <div className="header">

          <h1>
            UCCIS Ecosystem Integration
          </h1>

        </div>


        {renderContent()}

      </div>

    </div>

  );
}