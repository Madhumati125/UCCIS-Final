import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import CommandInterface from "../components/CommandInterface";
import TrafficDashboard from "../components/TrafficDashboard";
import IntelligenceDashboard from "../components/IntelligenceDashboard";
import ZoneIntelligenceDashboard from "../ZoneIntelligenceDashboard";
import UCCISIntelligenceDashboard from "../components/UCCISIntelligenceDashboard";
import ReplayDashboard from "../components/ReplayDashboard";
import UrbanIntelligence from "../components/UrbanIntelligence";
import IntelligenceEngine from "../components/IntelligenceEngine";
import MinisterDashboard from "../components/MinisterDashboard";
import GovernanceDashboard from "../components/GovernanceDashboard";
import ObservabilityDashboard from "../components/ObservabilityDashboard";
import UCCISUnifiedDashboard from "../components/UCCISUnifiedDashboard";

/*
=========================================================
TASK 13
Replay Reconstruction Platform
=========================================================
*/
import HomeDashboard from "../components/HomeDashboard";

/*
=========================================================
TASK 14
UCCIS COMMAND CENTER
=========================================================
IMPORTANT:
Change these paths if your Task 14 pages folder
is located somewhere else.
=========================================================
*/
import Operations from "../components/Operations";
import Replay from "../components/Replay";
import Observability from "../components/Observability";
import Governance from "../components/Governance";

/*
=========================================================
TASK 15
STATE-DRIVEN COMMAND CENTER
(no routing — mirrors the Task 14 pattern)
=========================================================
IMPORTANT:
Governance and Replay reuse the same files as Task 14,
so they're imported again here under aliases to avoid
a duplicate-identifier error.
=========================================================
*/
import GovernanceTask15 from "../components/GovernanceTask15";
import ReplayTask15 from "../components/ReplayTask15";
import Telemetry from "../components/Telemetry";
import Validation from "../components/Validation";
import Operators from "../components/Operators";
import Testing from "../components/Testing";

import ExecutiveDashboard from "../components/ExecutiveDashboard";
import Phase1 from "../components/Phase1";
import Phase2 from "../components/Phase2";
import Phase3 from "../components/Phase3";
import Phase4 from "../components/Phase4";
import Phase5 from "../components/Phase5";
import Phase6 from "../components/Phase6";
import Phase7 from "../components/Phase7";

import SidebarTask17 from "../components/SidebarTask17";
import ExecutiveOverview from "../components/ExecutiveOverview";
import ReplayReconstruction from "../components/ReplayReconstruction";
import OperationalStress from "../components/OperationalStress";
import EntropyFailure from "../components/EntropyFailure";
import EscalationVisibility from "../components/EscalationVisibility";
import FieldContinuity from "../components/FieldContinuity";

import GovernanceCommandCenter from "../components/GovernanceCommandCenter";

import OperationalLayer from "../components/OperationalLayer";

import ControlIntelligenceSystem from "../dashboard/ControlIntelligenceSystem";

import SystemOperational from "../dashboard/SystemOperational";

import CivicIntelligenceSystem from "../components/CivicIntelligenceSystem";

import OperationalSystem from "../components/OperationalSystem";

import IntelligenceModule from "../components/IntelligenceModule";

import Home from "../components/Home";

import TelemetryTask26 from "../components/TelemetryTask26";
import RuntimeTask26 from "../components/RuntimeTask26";
import ReplayTask26 from "../components/ReplayTask26";

import Navbar from "../components/Navbar";

import RuntimeDashboard from "../components/RuntimeDashboard";
import Runtime from "../components/Runtime";
import SignalsTask27 from "../components/SignalsTask27";

import CommandCenters from "../components/CommandCenters";

import SidebarTask29 from "../components/SidebarTask29";
import HeaderTask29 from "../components/HeaderTask29";
import Demonstration from "../components/Demonstration";
import SignalsTask29 from "../components/SignalsTask29";
import TelemetryTask29 from "../components/TelemetryTask29";
import IncidentsTask29 from "../components/IncidentsTask29";
import Escalations from "../components/Escalations";
import Decisions from "../components/Decisions";
import ReplaySessions from "../components/ReplaySessions";
import RuntimeLogsTasks29 from "../components/RuntimeLogsTasks29";
import Analytics from "../components/Analytics";

import MainLayout from "../layout/MainLayout";
import EDODemonstration from "../dashboard/EDODemonstration";
import Signals from "../dashboard/Signals";
import TelemetryTask30 from "../dashboard/Telemetry";
import Incidents from "../dashboard/Incidents";
import EscalationsTask30 from "../dashboard/Escalations";
import DecisionsTask30 from "../dashboard/Decisions";
import ReplayTask30 from "../dashboard/Replay";
import RuntimeLogs from "../dashboard/RuntimeLogs";

import Operational from "../components/Operational";

import RuntimeDashboardTask32 from "../components/RuntimeDashboardTask32";
import ReplayViewTask32 from "../components/ReplayViewTask32";
import RuntimeLogsTask32 from "../components/RuntimeLogsTask32";

import CommandCenter from "../dashboard/CommandCenter";

import CanonicalPlatform from "../layout/CanonicalPlatform";
import SignalsTask34 from "../layout/Signals";
import TelemetryTask34 from "../layout/Telemetry";
import IncidentsTask34 from "../layout/Incidents";
import EscalationsTask34 from "../layout/Escalations";
import ReplayTask34 from "../layout/Replay";
import Evidence from "../layout/Evidence";
import ObservabilityTask34 from "../layout/Observability";
import ReviewPackets from "../layout/ReviewPackets";

import SidebarTask35 from "../components/SidebarTask35";
import DashboardHeaderTask35 from "../components/DashboardHeaderTask35";
import SummaryCardsTask35 from "../components/SummaryCardsTask35";
import RuntimeMetricsChartTask35 from "../components/RuntimeMetricsChartTask35";
import ActiveOperations from "../components/ActiveOperations";
import RuntimeHealthTask35 from "../components/RuntimeHealthTask35";
import TimelineReconstruction from "../components/TimelineReconstruction";
import HistoricalOperations from "../components/HistoricalOperations";
import MultiDomainPanel from "../components/MultiDomainPanel";
import ReplayMetrics from "../components/ReplayMetrics";
import EvidencePanelTask35 from "../components/EvidencePanelTask35";
import PlatformReadiness from "../components/PlatformReadiness";
import ModuleDrilldown from "../components/ModuleDrilldown";
import GlobalSearch from "../components/GlobalSearch";
import RuntimeKPIs from "../components/RuntimeKPIs";
import LiveRuntimeFeed from "../components/LiveRuntimeFeed";
import IncidentSeverity from "../components/IncidentSeverity";
import DomainHealth from "../components/DomainHealth";
import TraceLineage from "../components/TraceLineage";
import EvidenceChain from "../components/EvidenceChain";
import DeploymentHealth from "../components/DeploymentHealth";
import OperatorActivityTask35 from "../components/OperatorActivityTask35";
import ReplayReconstructionTask35 from "../components/ReplayReconstructionTask35";
import api from "../api";
import "../styles/Task35.css";

import RuntimeEngine from "../dashboard/RuntimeEngine";
// import "../Task36.css";

import AppRoutes from "../routes/AppRoutes";

import AppRoutesTask38 from "../routes/AppRoutesTask38";
import Sidebar from "../components/Layout/Sidebar.jsx";
import Header from "../components/Layout/Header.jsx";
import "../Task38.css";

/*
=========================================================
TASK 39
UCCIS RUNTIME (SIDEBAR + ROUTER SUB-APP)
=========================================================
IMPORTANT:
Task 39 brings its own page set (Dashboard, Incidents,
Escalations, Replay, Evidence, Runtime) living under
"../pages/...". Several of these names collide with
identifiers already imported above for earlier tasks
(Incidents, Escalations, Replay, Evidence, Runtime), so
they are imported here under a "Task39" suffix to avoid
duplicate-identifier errors. Also note this file (Dashboard.jsx)
is itself the default export used elsewhere, so the Task 39
page named "Dashboard" is aliased to DashboardTask39.
=========================================================
*/
import DashboardTask39 from "../dashboard/Dashboard.jsx";
import IncidentsTask39 from "../dashboard/Incidents";
import EscalationsTask39 from "../dashboard/Escalations";
import ReplayTask39 from "../dashboard/Replay";
import EvidenceTask39 from "../dashboard/Evidence";
import RuntimeTask39 from "../dashboard/Runtime";

import "./Dashboard.css";

/* =====================================================
   TASK 30 — SELF-CONTAINED ROUTER SUB-APP
   Mirrors the App.jsx you supplied, renamed to avoid
   clashing with this file's own default export (also
   called "Dashboard").
===================================================== */
function Task30App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<EDODemonstration />} />

          <Route path="signals" element={<Signals />} />

          <Route path="telemetry" element={<TelemetryTask30 />} />

          <Route path="incidents" element={<Incidents />} />

          <Route path="escalations" element={<EscalationsTask30 />} />

          <Route path="decisions" element={<DecisionsTask30 />} />

          <Route path="replay" element={<ReplayTask30 />} />

          <Route path="runtime" element={<RuntimeLogs />} />
        </Route>
      </Routes>
  );
}

/* =====================================================
   TASK 32 — SELF-CONTAINED ROUTER SUB-APP
   Mirrors the new App.jsx you supplied:
     "/"       -> RuntimeDashboard
     "/replay" -> ReplayView
     "/logs"   -> RuntimeLogs
   Mounted wholesale via Task32App, exactly like Task 30
   is mounted via Task30App.
===================================================== */
/* =====================================================
   TASK 32 — ROUTER SUB-APP
===================================================== */

function Task32App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<RuntimeDashboardTask32 />}
      />

      <Route
        path="replay"
        element={<ReplayViewTask32 />}
      />

      <Route
        path="logs"
        element={<RuntimeLogsTask32 />}
      />
    </Routes>
  );
}

function Task34App() {
  return (
      <Routes>
        <Route path="/" element={<CanonicalPlatform />}>
          <Route index element={<CanonicalPlatform />} />

          <Route path="signals" element={<Signals />} />

          <Route path="telemetry" element={<Telemetry />} />

          <Route path="incidents" element={<Incidents />} />

          <Route path="escalations" element={<Escalations />} />

          <Route path="replay" element={<Replay />} />

          <Route path="evidence" element={<Evidence />} />

          <Route path="observability" element={<Observability />} />

          <Route path="review-packets" element={<ReviewPackets />} />
        </Route>
      </Routes>
  );
}

/* =====================================================
   TASK 39 — SELF-CONTAINED ROUTER SUB-APP
   Mirrors the App.jsx you supplied for Task 39: a sidebar
   layout with links to Dashboard / Incidents / Escalations /
   Replay / Evidence / Runtime, each mounted at an absolute
   path ("/dashboard", "/incidents", etc.), exactly the same
   mounting convention used by Task30App / Task32App / Task34App
   above. Mounted wholesale via Task39App rather than switched
   internally, since it brings its own routes and its own
   sidebar/link-based navigation (not the top-nav button strip
   used by Tasks 14/15/16/17/26/27).
===================================================== */
function Task39App() {
  const task39LinkStyle = {
    color: "#e5e7eb",
    textDecoration: "none",
    display: "block",
    padding: "12px",
    borderRadius: "8px",
    background: "#1f2937"
  };

  return (
    <div className="task39-layout" style={{ display: "flex" }}>
      {/* Sidebar */}

      <aside
        style={{
          width: "260px",
          minHeight: "100vh",
          background: "#111827",
          borderRight: "1px solid #1f2937",
          padding: "20px"
        }}
      >
        <h2
          style={{
            color: "#38bdf8",
            marginBottom: "30px"
          }}
        >
          UCCIS Runtime
        </h2>

        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <li>
              <Link to="/dashboard" style={task39LinkStyle}>
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/incidents" style={task39LinkStyle}>
                Incidents
              </Link>
            </li>

            <li>
              <Link to="/escalations" style={task39LinkStyle}>
                Escalations
              </Link>
            </li>

            <li>
              <Link to="/replay" style={task39LinkStyle}>
                Replay
              </Link>
            </li>

            <li>
              <Link to="/evidence" style={task39LinkStyle}>
                Evidence
              </Link>
            </li>

            <li>
              <Link to="/runtime" style={task39LinkStyle}>
                Runtime
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}

      <main
        style={{
          flex: 1,
          padding: "25px",
          overflowY: "auto"
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={<DashboardTask39 />} />

          <Route path="/incidents" element={<IncidentsTask39 />} />

          <Route path="/escalations" element={<EscalationsTask39 />} />

          <Route path="/replay" element={<ReplayTask39 />} />

          <Route path="/evidence" element={<EvidenceTask39 />} />

          <Route path="/runtime" element={<RuntimeTask39 />} />

          <Route
            path="*"
            element={
              <div>
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

const Dashboard = () => {
  /* =====================================================
     ACTIVE MAIN PAGE (internal, state-driven tasks)
  ===================================================== */

  const [activePage, setActivePage] =
    useState("task1");

  /* =====================================================
     TASK 14 ACTIVE PAGE
  ===================================================== */

  const [task14Page, setTask14Page] =
    useState("operations");

  /* =====================================================
     TASK 15 ACTIVE PAGE
     State-driven, same pattern as Task 14 — no router,
     no URL changes. Just an internal switch.
  ===================================================== */

  const [task15Page, setTask15Page] =
    useState("governance");

  const task15Pages = [
    { id: "governance", label: "Governance" },
    { id: "replay", label: "Replay" },
    { id: "telemetry", label: "Telemetry" },
    { id: "validation", label: "Validation" },
    { id: "operators", label: "Operators" },
    { id: "testing", label: "Testing" },
  ];

  /* =====================================================
     DASHBOARD MENU (internal tasks)
  ===================================================== */

  const menus = [
    {
      id: "task1",
      label: "Command Interface",
    },
    {
      id: "task2",
      label: "Traffic Dashboard",
    },
    {
      id: "task3",
      label: "Intelligence Dashboard",
    },
    {
      id: "task4",
      label: "Zone Intelligence Dashboard",
    },
    {
      id: "task5",
      label: "UCCIS Intelligence Dashboard",
    },
    {
      id: "task6",
      label: "Replay Dashboard",
    },
    {
      id: "task7",
      label: "Urban Intelligence Dashboard",
    },
    {
      id: "task8",
      label: "Run Intelligence Engine",
    },
    {
      id: "task9",
      label: "Mumbai Command Center",
    },
    {
      id: "task10",
      label: "Mumbai-Thane Ministerial",
    },
    {
      id: "task11",
      label: "Operational Observability",
    },
    {
      id: "task12",
      label: "Unified Governance",
    },
    {
      id: "task13",
      label: "Replay Reconstruction Platform",
    },
    {
      id: "task14",
      label: "UCCIS Command Center",
    },
    {
      id: "task15",
      label: "Routed Platform",
    },
    {
      id: "task16",
      label: "Executive Platform",
    },
    {
      id: "task17",
      label: "Executive Overview",
    },
    {
      id: "task18",
      label: "Governance Command",
    },
    {
      id: "task19",
      label: "Operational Platform",
    },
    {
      id: "task20",
      label: "Intelligence System",
    },
    {
      id: "task21",
      label: "System Operational",
    },
    {
      id: "task22",
      label: "Civic System",
    },
    {
      id: "task23",
      label: "Operational System",
    },
    {
      id: "task24",
      label: "Intelligence Module",
    },
    {
      id: "task25",
      label: "Runtime Command",
    },
    {
      id: "task26",
      label: "Operational Console",
    },
    {
      id: "task27",
      label: "Runtime Dashboard",
    },
    {
      id: "task28",
      label: "Command Centers",
    },
    {
      id: "task29",
      label: "Command Suite",
    },
    {
      id: "task30",
      label: "Router Command Center",
    },
    {
      id: "task31",
      label: "Operational",
    },
    {
      id: "task32",
      label: "Runtime Command Router",
    },
    {
      id: "task33",
      label: "Runtime Platform"
    },
    {
      id: "task34",
      label: "Critical Governance",
    },
    {
      id: "task35",
      label: "Runtime Operations Console",
    },
    {
      id: "task36",
      label: "Engine Sprint",
    },
    {
      id: "task37",
      label: "Production Sprint",
    },
    {
      id: "task38",
      label: "Convergence Platform",
    },
    {
      id: "task39",
      label: "UCCIS Runtime",
    },
  ];

  /* =====================================================
     NAV CLICK HANDLERS
  ===================================================== */

  const handleTaskClick = (taskId) => {
    setActivePage(taskId);
  };

  /* =====================================================
     TASK 14 PAGE RENDERER
  ===================================================== */

  const renderTask14Page = () => {
    switch (task14Page) {
      case "operations":
        return <Operations />;

      case "replay":
        return <Replay />;

      case "observability":
        return <Observability />;

      case "governance":
        return <Governance />;

      default:
        return <Operations />;
    }
  };

  /* =====================================================
     TASK 14 COMMAND CENTER
  ===================================================== */

  const renderTask14 = () => {
    return (
      <div className="task14-wrapper">
        {/* ===============================================
            TASK 14 SUB-NAVIGATION
            (Operations / Replay / Observability / Governance)
        =============================================== */}

        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            UCCIS COMMAND CENTER
          </div>

          {/* NAVIGATION */}

          <div className="nav-links">
            <button
              type="button"
              className={
                task14Page === "operations"
                  ? "task14-nav-active"
                  : ""
              }
              onClick={() =>
                setTask14Page("operations")
              }
            >
              Operations
            </button>

            <button
              type="button"
              className={
                task14Page === "replay"
                  ? "task14-nav-active"
                  : ""
              }
              onClick={() =>
                setTask14Page("replay")
              }
            >
              Replay
            </button>

            <button
              type="button"
              className={
                task14Page === "observability"
                  ? "task14-nav-active"
                  : ""
              }
              onClick={() =>
                setTask14Page("observability")
              }
            >
              Observability
            </button>

            <button
              type="button"
              className={
                task14Page === "governance"
                  ? "task14-nav-active"
                  : ""
              }
              onClick={() =>
                setTask14Page("governance")
              }
            >
              Governance
            </button>
          </div>

          {/* LIVE STATUS */}

          <div className="live-status">
            ● LIVE
          </div>
        </div>

        {/* ===============================================
            TASK 14 PAGE CONTENT
        =============================================== */}

        <div className="task14-content">
          {renderTask14Page()}
        </div>
      </div>
    );
  };

  /* =====================================================
     TASK 15 PAGE RENDERER
  ===================================================== */

  const renderTask15Page = () => {
    switch (task15Page) {
      case "governance":
        return <GovernanceTask15 />;

      case "replay":
        return <ReplayTask15 />;

      case "telemetry":
        return <Telemetry />;

      case "validation":
        return <Validation />;

      case "operators":
        return <Operators />;

      case "testing":
        return <Testing />;

      default:
        return <GovernanceTask15 />;
    }
  };

  /* =====================================================
     TASK 15 — STATE-DRIVEN COMMAND CENTER
     Mirrors the Task 14 pattern exactly: internal state,
     no router, no URL changes.
  ===================================================== */

  const renderTask15 = () => {
    return (
      <div className="task15-wrapper">
        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            ROUTED PLATFORM
          </div>

          {/* NAVIGATION */}

          <div className="nav-links task15-nav">
            {task15Pages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  task15Page === item.id
                    ? "task15-active"
                    : ""
                }
                onClick={() => setTask15Page(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* LIVE STATUS */}

          <div className="live-status">
            ● LIVE
          </div>
        </div>

        {/* ===============================================
            TASK 15 PAGE CONTENT
        =============================================== */}

        <div className="task15-content">
          {renderTask15Page()}
        </div>
      </div>
    );
  };

  const [task16Page, setTask16Page] = useState("executiveDashboard");

  const task16Pages = [
    { id: "executive", label: "ExecutiveDashboard"},
    { id: "phase1", label: "Phase 1"},
    { id: "phase2", label: "Phase 2"},
    { id: "phase3", label: "Phase 3"},
    { id: "phase4", label: "Phase 4"},
    { id: "phase5", label: "Phase 5"},
    { id: "phase6", label: "Phase 6"},
    { id: "phase7", label: "Phase 7"},
  ];

    /* =====================================================
     TASK 16 PAGE RENDERER
  ===================================================== */
  const renderTask16Page = () => {
    switch (task16Page) {
      case "executiveDashboard":
        return <ExecutiveDashboard />;

      case "phase1":
        return <Phase1 />;

      case "phase2":
        return <Phase2 />;

      case "phase3":
        return <Phase3 />;

      case "phase4":
        return <Phase4 />;

      case "phase5":
        return <Phase5 />;

      case "phase6":
        return <Phase6 />;

      case "phase7":
        return <Phase7 />;

      default:
        return <ExecutiveDashboard />;
    }
  };

   /* =====================================================
     TASK 16 — STATE-DRIVEN COMMAND CENTER
  ===================================================== */

  const renderTask16 = () => {
    return (
      <div className="task16-wrapper">
        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            Executive Platform
          </div>

          {/* NAVIGATION */}

          <div className="nav-links task16-nav">
            {task16Pages.map((item) => (
              <button
              key={item.id}
              type="button"
              className={
                task16Page === item.id
                ? "task16-active"
                : ""
              }
              onClick={() => setTask16Page(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

           {/* LIVE STATUS */}

          <div className="live-status">
            ● LIVE
          </div>
        </div>
        {/* ===============================================
            TASK 16 PAGE CONTENT
        =============================================== */}

        <div className="task16-content">
          {renderTask16Page()}
        </div>
      </div>
    );
  };

  const [task17Page, setTask17Page] = useState("executiveOverview");

  const task17Pages = [
    { id: "executive", label: "ExecutiveOverview"},
    { id: "replayreconstruct", label: "ReplayReconstruction"},
    { id: "operational", label: "OperationalStress"},
    { id: "entropy", label: "EntropyFailure"},
    { id: "escalationvis", label: "EscalationVisibility"},
    { id: "field", label: "FieldContinuity"},
  ];

  const renderTask17Page = () => {
    switch (task17Page) {
      case "executiveOverview":
        return <ExecutiveOverview />;

      case "replayReconstruction":
        return <ReplayReconstruction />;

      case "operational":
        return <OperationalStress />;

      case "entropy":
        return <EntropyFailure />;

      case "escalationVisibility":
        return <EscalationVisibility />;

      case "field":
        return <FieldContinuity />;

      default:
        return <ExecutiveOverview />;
    }
  };

  const renderTask17 = () => {
    return (
      <div className="task17-wrapper">
        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            EXECUTIVE OVERVIEW
          </div>

          {/* NAVIGATION */}

          <div className="nav-links task17-nav">
            {task17Pages.map((item) => (
              <button
              key={item.id}
              type="button"
              className={
                task17Page === item.id
                ? "task17-active"
                : ""
              }
              onClick={() => setTask17Page(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* LIVE STATUS */}

          {/* <div className="live-status">
            ● LIVE
          </div> */}
        </div>
        {/* ===============================================
            TASK 17 PAGE CONTENT
        =============================================== */}

        <div className="task17-content">
          {renderTask17Page()}
        </div>
      </div>
    );
  };

  /* =====================================================
     TASK 26 ACTIVE PAGE
     State-driven, same pattern as Tasks 14-17 — no router,
     no URL changes, no Sidebar import (see the Task 26
     import note above for why).
  ===================================================== */

  const [task26Page, setTask26Page] = useState("telemetry");

  const task26Pages = [
    { id: "telemetry", label: "Telemetry" },
    { id: "runtime", label: "Runtime" },
    { id: "replay", label: "Replay" },
  ];

  const renderTask26Page = () => {
    switch (task26Page) {
      case "telemetry":
        return <TelemetryTask26 />;

      case "runtime":
        return <RuntimeTask26 />;

      case "replay":
        return <ReplayTask26 />;

      default:
        return <TelemetryTask26 />;
    }
  };

  const renderTask26 = () => {
    return (
      <div className="task26-wrapper">
        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            OPERATIONAL CONSOLE
          </div>

          {/* NAVIGATION */}

          <div className="nav-links task26-nav">
            {task26Pages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  task26Page === item.id
                    ? "task26-active"
                    : ""
                }
                onClick={() => setTask26Page(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* LIVE STATUS */}

          <div className="live-status">
            ● LIVE
          </div>
        </div>

        {/* ===============================================
            TASK 26 PAGE CONTENT
        =============================================== */}

        <div className="task26-content">
          {renderTask26Page()}
        </div>
      </div>
    );
  };

  const [task27Page, setTask27Page] = useState("dashboard");

  const task27Pages = [
    { id: "runtimeDashboard", label: "RuntimeDashboard" },
    { id: "runtime", label: "Runtime" },
    { id: "signals", label: "Signals" },
  ];

  const renderTask27Page = () => {
    switch (task27Page) {
      case "runtimeDashboard":
        return <RuntimeDashboard />;

      case "runtime":
        return <Runtime />;

      case "signals":
        return <SignalsTask27 />;

      default:
        return <RuntimeDashboard/>;
    }
  };

  const renderTask27 = () => {
    return (
      <div className="task27-wrapper">
        <div className="top-nav">
          {/* LOGO */}

          <div className="logo">
            RUNTIME DASHBOARD
          </div>

          {/* NAVIGATION */}

          <div className="nav-links task27-nav">
            {task27Pages.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  task27Page === item.id
                    ? "task27-active"
                    : ""
                }
                onClick={() => setTask27Page(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* LIVE STATUS */}

          <div className="live-status">
            ● LIVE
          </div>
        </div>

        {/* ===============================================
            TASK 27 PAGE CONTENT
        =============================================== */}

        <div className="task27-content">
          {renderTask27Page()}
        </div>
      </div>
    );
  };

  /* =====================================================
     TASK 29 — UCCIS COMMAND SUITE
     State-driven, same pattern as Tasks 14-27. Task 29's own
     App.jsx used a Sidebar + Header layout (rather than the
     top-nav button strip used by Tasks 14/15/16/17/26/27), so
     that layout is preserved here — SidebarTask29 receives the
     internal task29Page state directly, mirroring how it drove
     React Router-free navigation in the original file.
  ===================================================== */

  const [task29Page, setTask29Page] = useState("demonstration");

  const summaryTask29 = {
    signals: 12,
    telemetry: 20,
    incidents: 8,
    runtimeLogs: 50
  };

  const sampleDataTask29 = [
    { id: 1, signal_id: 101, signal_type: "Flood Alert" },
    { id: 2, signal_id: 102, signal_type: "Flood Alert" },
    { id: 3, signal_id: 103, signal_type: "Flood Alert" },
    { id: 4, signal_id: 104, signal_type: "Flood Alert" },
    { id: 5, signal_id: 105, signal_type: "Flood Alert" },

    { id: 6, signal_id: 106, signal_type: "Traffic Incident" },
    { id: 7, signal_id: 107, signal_type: "Traffic Incident" },
    { id: 8, signal_id: 108, signal_type: "Traffic Incident" },

    { id: 9, signal_id: 109, signal_type: "Medical Emergency" },
    { id: 10, signal_id: 110, signal_type: "Medical Emergency" },
    { id: 11, signal_id: 111, signal_type: "Medical Emergency" },
    { id: 12, signal_id: 112, signal_type: "Medical Emergency" },

    { id: 13, signal_id: 113, signal_type: "Power Failure" },
    { id: 14, signal_id: 114, signal_type: "Power Failure" },

    { id: 15, signal_id: 115, signal_type: "Cyber Incident" },
    { id: 16, signal_id: 116, signal_type: "Cyber Incident" },
    { id: 17, signal_id: 117, signal_type: "Cyber Incident" },
    { id: 18, signal_id: 118, signal_type: "Cyber Incident" },
    { id: 19, signal_id: 119, signal_type: "Cyber Incident" },
    { id: 20, signal_id: 120, signal_type: "Cyber Incident" }
  ];

  const renderTask29Page = () => {
    switch (task29Page) {
      case "dashboard":
        return <Demonstration summary={summaryTask29} />;

      case "signals":
        return <SignalsTask29 data={sampleDataTask29} />;

      case "telemetry":
        return <TelemetryTask29 data={sampleDataTask29} />;

      case "incidents":
        return <IncidentsTask29 data={sampleDataTask29} />;

      case "escalations":
        return <Escalations data={sampleDataTask29} />;

      case "decisions":
        return <Decisions data={sampleDataTask29} />;

      case "replaySessions":
        return <ReplaySessions data={sampleDataTask29} />;

      case "runtimeLogs":
        return <RuntimeLogsTasks29 data={sampleDataTask29} />;

      case "analytics":
        return <Analytics />;

      case "systemHealth":
        return (
          <div className="content-card">
            <h2>System Health</h2>

            <p>
              Backend Status :
              <strong> ONLINE</strong>
            </p>

            <p>
              Database Status :
              <strong> CONNECTED</strong>
            </p>

            <p>
              Runtime Engine :
              <strong> ACTIVE</strong>
            </p>
          </div>
        );

      default:
        return <Demonstration summary={summaryTask29} />;
    }
  };

  const renderTask29 = () => {
    return (
      <div
  className="task29-wrapper"
  style={{
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    background: "#070b1d",
  }}
>
  <SidebarTask29
    activePage={task29Page}
    setActivePage={setTask29Page}
  />

  <div
    className="main-content"
    style={{
      flex: 1,
      marginLeft: "280px",
      padding: "24px",
      width: "calc(100% - 280px)",
      overflowX: "hidden",
    }}
  >
    <HeaderTask29 />

    {renderTask29Page()}
  </div>
</div>
    );
  };

  /* =====================================================
     TASK 30 — ROUTER COMMAND CENTER
     Task 30 brings its own React Router tree (BrowserRouter
     + Routes + MainLayout), unlike Tasks 1-29. It is mounted
     wholesale via Task30App (defined above, outside this
     component) rather than switched internally.
  ===================================================== */

  const renderTask30 = () => {
    return (
      <div className="task30-wrapper">
        <Task30App />
      </div>
    );
  };

  /* =====================================================
     TASK 32 — RUNTIME COMMAND ROUTER
     Same pattern as Task 30: this task brings its own
     React Router tree ("/", "/replay", "/logs"), so it is
     mounted wholesale via Task32App (defined above, outside
     this component) rather than switched internally.
  ===================================================== */

  const renderTask32 = () => {
    return (
      <div className="task32-wrapper">
        <Task32App />
      </div>
    );
  };

   const renderTask34 = () => {
    return (
      <div className="task34-wrapper">
        <Task34App />
      </div>
    );
  };

  /* =====================================================
     TASK 35 — RUNTIME OPERATIONS CONSOLE
     Task 35's own App.jsx was a full standalone layout
     (Sidebar + module switch + a live stats fetch), similar
     in spirit to Task 29's Sidebar-driven layout above but
     with its own component set. Its internal `selectedModule`
     state is renamed task35Module below to avoid confusion
     with this file's own top-level `activePage` state, and its
     `stats`/`loadStats` are renamed to match. The Dashboard
     section itself is otherwise reproduced as-is.
  ===================================================== */

  const [task35Module, setTask35Module] = useState("Dashboard");

  const [task35Stats, setTask35Stats] = useState({
    activeSignals: 24,
    incidents: 8,
    escalations: 3,
    traces: 17
  });

  useEffect(() => {
    loadTask35Stats();
  }, []);

  const loadTask35Stats = async () => {
    try {
      const res = await api.get("/analytics/stats");
      setTask35Stats(res.data);
    } catch (err) {
      console.log("Using demo values...");
    }
  };

  const renderTask35 = () => {
    return (
      <div className="layout">
        <SidebarTask35
          selectedModule={task35Module}
          setSelectedModule={setTask35Module}
        />

        <div className="content">
          <DashboardHeaderTask35 />

          {task35Module === "Dashboard" && (
            <>
              {/* Search */}
              <GlobalSearch />

              {/* KPI Cards */}
              <RuntimeKPIs />

              {/* Main Summary */}
              <SummaryCardsTask35 stats={task35Stats} />

              {/* Main Runtime Chart */}
              <RuntimeMetricsChartTask35 stats={task35Stats} />

              {/* Feed + Deployment */}
              <div className="two-column">
                <LiveRuntimeFeed />
                <DeploymentHealth />
              </div>

              {/* Active Ops + Health */}
              <div className="two-column">
                <ActiveOperations />
                <RuntimeHealthTask35 />
              </div>

              {/* Severity + Domain */}
              <div className="two-column">
                <IncidentSeverity />
                <DomainHealth />
              </div>

              {/* Timeline */}
              <TimelineReconstruction />

              {/* Trace Lineage */}
              <TraceLineage />

              {/* Historical */}
              <HistoricalOperations />

              {/* Multi Domain */}
              <MultiDomainPanel />

              {/* Replay Reconstruction (reuses Task 17's import) */}
              <ReplayReconstructionTask35 />

              {/* Replay + Evidence */}
              <div className="two-column">
                <ReplayMetrics />
                <EvidencePanelTask35 />
              </div>

              {/* Evidence Chain */}
              <EvidenceChain />

              {/* Operator Activity */}
              <OperatorActivityTask35 />

              {/* Platform Readiness */}
              <PlatformReadiness />
            </>
          )}

          {task35Module !== "Dashboard" && (
            <ModuleDrilldown selectedModule={task35Module} />
          )}
        </div>
      </div>
    );
  };

  /* =====================================================
     TASK 39 — UCCIS RUNTIME
     Same pattern as Task 30/32/34: this task brings its own
     React Router tree, plus its own Sidebar with Links (rather
     than the top-nav button strip). It is mounted wholesale
     via Task39App (defined above, outside this component)
     rather than switched internally.
  ===================================================== */

  const renderTask39 = () => {
    return (
      <div className="task39-wrapper">
        <Task39App />
      </div>
    );
  };

  /* =====================================================
     RENDER ACTIVE PAGE (internal, state-driven tasks)
  ===================================================== */

  const renderPage = () => {
    switch (activePage) {
      /* =================================================
         TASK 1
      ================================================= */

      case "task1":
        return (
          <>
            <h2 className="section-title">
              Command Interface
            </h2>

            <CommandInterface />
          </>
        );

      /* =================================================
         TASK 2
      ================================================= */

      case "task2":
        return (
          <>
            <h2 className="section-title">
              Traffic Dashboard
            </h2>

            <TrafficDashboard />
          </>
        );

      /* =================================================
         TASK 3
      ================================================= */

      case "task3":
        return (
          <>
            <h2 className="section-title">
              Intelligence Dashboard
            </h2>

            <IntelligenceDashboard />
          </>
        );

      /* =================================================
         TASK 4
      ================================================= */

      case "task4":
        return (
          <>
            <h2 className="section-title">
              Zone Intelligence Dashboard
            </h2>

            <ZoneIntelligenceDashboard />
          </>
        );

      /* =================================================
         TASK 5
      ================================================= */

      case "task5":
        return (
          <>
            <h2 className="section-title">
              UCCIS Intelligence Dashboard
            </h2>

            <UCCISIntelligenceDashboard />
          </>
        );

      /* =================================================
         TASK 6
      ================================================= */

      case "task6":
        return (
          <>
            <h2 className="section-title">
              Replay Dashboard
            </h2>

            <ReplayDashboard />
          </>
        );

      /* =================================================
         TASK 7
      ================================================= */

      case "task7":
        return (
          <>
            <h2 className="section-title">
              Urban Intelligence Dashboard
            </h2>

            <UrbanIntelligence />
          </>
        );

      /* =================================================
         TASK 8
      ================================================= */

      case "task8":
        return (
          <>
            <h2 className="section-title">
              Run Intelligence Engine
            </h2>

            <IntelligenceEngine />
          </>
        );

      /* =================================================
         TASK 9
      ================================================= */

      case "task9":
        return (
          <>
            <h2 className="section-title">
              Mumbai Command Center
            </h2>

            <MinisterDashboard />
          </>
        );

      /* =================================================
         TASK 10
      ================================================= */

      case "task10":
        return (
          <>
            <h2 className="section-title">
              Mumbai-Thane Ministerial
            </h2>

            <GovernanceDashboard />
          </>
        );

      /* =================================================
         TASK 11
      ================================================= */

      case "task11":
        return (
          <>
            <h2 className="section-title">
              Operational Observability
            </h2>

            <ObservabilityDashboard />
          </>
        );

      /* =================================================
         TASK 12
         UNIFIED GOVERNANCE
      ================================================= */

      case "task12":
        return (
          <>
            <h2 className="section-title">
              Unified Governance
            </h2>

            <UCCISUnifiedDashboard />
          </>
        );

      /* =================================================
         TASK 13
         REPLAY RECONSTRUCTION PLATFORM
      ================================================= */

      case "task13":
        return (
          <>
            <h2 className="section-title">
              Replay Reconstruction Platform
            </h2>

            <HomeDashboard />
          </>
        );

      /* =================================================
         TASK 14
         UCCIS COMMAND CENTER
      ================================================= */

      case "task14":
        return (
          <>
            <h2 className="section-title">
              UCCIS Command Center
            </h2>

            {renderTask14()}
          </>
        );

      /* =================================================
         TASK 15
         ROUTED PLATFORM (state-driven)
      ================================================= */

      case "task15":
        return (
          <>
            <h2 className="section-title">
              Routed Platform
            </h2>

            {renderTask15()}
          </>
        );

      /* =================================================
         TASK 16
         EXECUTIVE PLATFORM
      ================================================= */

        case "task16":
        return (
          <>
            <h2 className="section-title">
              Executive Platform
            </h2>

            {renderTask16()}
          </>
        );
      /* =================================================
         TASK 17
         EXECUTIVE OVERVIEW
      ================================================= */

       case "task17":
        return (
          <>
            <h2 className="section-title">
              Executive Overview
            </h2>

            {renderTask17()}
          </>
        );

        /* Task 18 */

        case "task18":
        return (
          <>
            <h2 className="section-title">
              Governance Command Center
            </h2>

            <GovernanceCommandCenter />
          </>
        );

        /* Task 19 */

        case "task19":
          return (
            <>
              <h2 className="section-title">
                Operational Platform
              </h2>

              <OperationalLayer />
            </>
          );

          /* Task 20 */

          case "task20":
            return (
              <>
                <h2 className="section-title">
                  Intelligence System
                </h2>

                <ControlIntelligenceSystem />
              </>
            );

            /* Task 21 */

            case "task21":
              return (
                <>
                  <h2 className="section-title">
                    System Operational
                  </h2>

                  <SystemOperational />
                </>
              );

              /* Task 22 */

              case "task22":
                return (
                  <>
                    <h2 className="section-title">
                      Civic System
                    </h2>

                    <CivicIntelligenceSystem />
                  </>
                );

                /* Task 23 */

                case "task23":
                  return (
                    <>
                      <h2 className="section-title">
                        Operational System
                      </h2>

                      <OperationalSystem />
                    </>
                  );

                  /* Task 24 */

                  case "task24":
                    return (
                      <>
                        <h2 className="section-title">
                          Intelligence Module
                        </h2>

                        <IntelligenceModule />
                      </>
                    );

                    /* Task 25 */

                    case "task25":
                      return (
                        <>
                          <h2 className="section-title">
                            Runtime Command
                          </h2>

                          <Home />
                        </>
                      );

                      /* Task 26 */

                      case "task26":
                        return (
                          <>
                            <h2 className="section-title">
                              Operational Console
                            </h2>

                            {renderTask26()}
                          </>
                        );

                        /* Task 27 */

                      case "task27":
                        return (
                          <>
                            <h2 className="section-title">
                              Runtime Dashboard
                            </h2>

                            {renderTask27()}
                          </>
                        );

                        /* Task 28 */

                        case "task28":
                          return (
                            <>
                              <h2 className="section-title">
                                Command Centers
                              </h2>

                              <CommandCenters />
                            </>
                          );

                          /* Task 29 */

                          case "task29":
                            return (
                              <>
                                <h2 className="section-title">
                                  Command Suite
                                </h2>

                                {renderTask29()}
                              </>
                            );

                          /* Task 30 */

                          case "task30":
                            return (
                              <>
                                <h2 className="section-title">
                                  Router Command Center
                                </h2>

                                {renderTask30()}
                              </>
                            );

                            /* Task 31 */

                            case "task31":
                              return (
                                <>
                                  <h2 className="section-title">
                                    Operational Dashboard
                                  </h2>

                                  <Operational />
                                </>
                              );

                            /* Task 32 */

                            case "task32":
                              return (
                                <>
                                  <h2 className="section-title">
                                    Runtime Command Router
                                  </h2>

                                  {renderTask32()}
                                </>
                              );

                              /* Task 33*/

                              case "task33":
                                return (
                                  <>
                                    <h2 className="section-title">
                                      Runtime Platform
                                    </h2>

                                    <CommandCenter />
                                  </>
                                );

                                /* Task 34 */

                            case "task34":
                              return (
                                <>
                                  <h2 className="section-title">
                                    Critical Governance
                                  </h2>

                                  {renderTask34()}
                                </>
                              );

                              /* Task 35 */

                            case "task35":
                              return (
                                <>
                                  <h2 className="section-title">
                                    Runtime Operations Console
                                  </h2>

                                  {renderTask35()}
                                </>
                              );

                              /* Task 36 */

                              case "task36":
                                return (
                                  <>
                                    <h2 className="section-title">
                                      Engine Sprint
                                    </h2>

                                    <RuntimeEngine />
                                  </>
                                );

                                /* Task 37 */
                                
                                case "task37":
                                  return (
                                    <>
                                      <h2 className="section-title">
                                        Production Sprint
                                      </h2>

                                      <AppRoutes />
                                    </>
                                  );

                                  /* Task 38 */

                                  case "task38":
                                    return (
                                    <div className="task38-layout">
                                    <Sidebar />
                                    <div className="task38-main">
                                    <Header />
                                    <AppRoutesTask38 />
                                    </div>
                                    </div>
                                    );

                                  /* Task 39 */

                                  case "task39":
                                    return (
                                      <>
                                        <h2 className="section-title">
                                          UCCIS Runtime
                                        </h2>

                                        {renderTask39()}
                                      </>
                                    );
      /* =================================================
         DEFAULT
      ================================================= */

      default:
        return (
          <>
            <h2 className="section-title">
              Command Interface
            </h2>

            <CommandInterface />
          </>
        );
    }
  };

  /* =====================================================
     MAIN DASHBOARD JSX
  ===================================================== */

  return (
    <div className="dashboard">
      {/* =================================================
          MAIN HEADER
      ================================================= */}

      <header className="dashboard-header">
        <h1>
          UCCIS Unified Command Center
        </h1>

        <p>
          Integrated City Intelligence Platform
        </p>

        {/* =============================================
            NAVIGATION BUTTONS
        ============================================= */}

        <div className="nav-buttons">
          {menus.map((menu) => (
            <button
              key={menu.id}
              type="button"
              className={
                activePage === menu.id
                  ? "active-btn"
                  : ""
              }
              onClick={() => handleTaskClick(menu.id)}
            >
              {menu.label}
            </button>
          ))}
        </div>
      </header>

      {/* =================================================
          DASHBOARD CONTENT
      ================================================= */}

      <main
        className={`dashboard-section ${
          activePage === "task12"
            ? "unified-governance-section"
            : ""
        } ${
          activePage === "task13"
            ? "replay-reconstruction-section"
            : ""
        } ${
          activePage === "task14"
            ? "task14-command-center-section"
            : ""
        } ${
          activePage === "task15"
            ? "task15-routed-platform-section"
            : ""
        } ${
          activePage === "task26"
            ? "task26-operational-console-section"
            : ""
        } ${
        activePage === "task27"
            ? "task27-runtime-dashboard-section"
            : ""
        } ${
        activePage === "task29"
            ? "task29-command-suite-section"
            : ""
        } ${
        activePage === "task30"
            ? "task30-router-command-center-section"
            : ""
        } ${
        activePage === "task32"
            ? "task32-runtime-command-router-section"
            : ""
        } ${
        activePage === "task35"
            ? "task35-operations-console-section"
            : ""
        } ${
        activePage === "task39"
            ? "task39-uccis-runtime-section"
            : ""
        }`}
      >
        {renderPage()}
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="dashboard-footer">
        <h3>
          UCCIS Runtime
        </h3>

        <p>
          System Status : Active
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;