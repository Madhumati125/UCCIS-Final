import React, { useState } from "react";

import SidebarTask25 from "../components/SidebarTask25";
import TopbarTask25 from "../components/TopbarTask25";

import TelemetryPage from "../phases/TelemetryPage";
import IncidentPage from "../phases/IncidentPage";
import EscalationPage from "../phases/EscalationPage";
import ReplayPage from "../phases/ReplayPage";
import GISPage from "../phases/GISPage";
import DecisionPage from "../phases/DecisionPage";
import OperatorPage from "../phases/OperatorPage";
import AnalyticsPage from "../phases/AnalyticsPage";
import RuntimeLogsPage from "../phases/RuntimeLogsPage";
import SystemHealthPage from "../phases/SystemHealthPage";
import DashboardHome from "../phases/DashboardHome";

import "./Run.css";

function RuntimeCommand() {
  const [activePhase, setActivePhase] =
    useState("Dashboard");

  const renderPage = () => {
    switch (activePhase) {
      case "Telemetry":
        return <TelemetryPage />;

      case "Incidents":
        return <IncidentPage />;

      case "Escalations":
        return <EscalationPage />;

      case "Replay":
        return <ReplayPage />;

      case "GIS":
        return <GISPage />;

      case "Decisions":
        return <DecisionPage />;

      case "Operators":
        return <OperatorPage />;

      case "Analytics":
        return <AnalyticsPage />;

      case "Logs":
        return <RuntimeLogsPage />;

      case "System":
        return <SystemHealthPage />;

      default:
        return <TelemetryPage />;
    }
  };

  return (
    <div className="layout">
      <SidebarTask25
        activePhase={activePhase}
        setActivePhase={setActivePhase}
      />

      <div className="main">
        <TopbarTask25 />

        <div className="page-header">
          <h1>UCCIS Runtime Command Center</h1>
          <p>
            Unified Civic Command &
            Intelligence System
          </p>
        </div>

        {renderPage()}
      </div>
    </div>
  );
}

export default RuntimeCommand;