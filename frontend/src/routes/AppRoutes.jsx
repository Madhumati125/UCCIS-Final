import { Routes, Route } from "react-router-dom";

import DashboardView from "../layout/Dashboard/DashboardView";
import SignalsView from "../layout/Signals/SignalsView";
import IncidentsView from "../layout/Incidents/IncidentsView";
import EscalationsView from "../layout/Escalations/EscalationsView";
import ReplayView from "../layout/Replay/ReplayView";
import EvidenceView from "../layout/Evidence/EvidenceView";
import AnalyticsView from "../layout/Analytics/AnalyticsView";
import HistoricalOpsView from "../layout/HistoricalOps/HistoricalOpsView";
import DomainsView from "../layout/Domains/DomainsView";
import RuntimeView from "../layout/Runtime/RuntimeView";
import SettingsView from "../layout/Settings/SettingsView";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<DashboardView />}
      />

      <Route
        path="/signals"
        element={<SignalsView />}
      />

      <Route
        path="/incidents"
        element={<IncidentsView />}
      />

      <Route
        path="/escalations"
        element={<EscalationsView />}
      />

      <Route
        path="/replay"
        element={<ReplayView />}
      />

      <Route
        path="/evidence"
        element={<EvidenceView />}
      />

      <Route
        path="/analytics"
        element={<AnalyticsView />}
      />

      <Route
        path="/historical-ops"
        element={<HistoricalOpsView />}
      />

      <Route
        path="/domains"
        element={<DomainsView />}
      />

      <Route
        path="/runtime"
        element={<RuntimeView />}
      />

      <Route
        path="/settings"
        element={<SettingsView />}
      />

      <Route
        path="*"
        element={
          <div
            style={{
              padding: "40px",
              textAlign: "center"
            }}
          >
            <h1>404 - Page Not Found</h1>
            <p>
              Route does not exist.
            </p>
          </div>
        }
      />

    </Routes>
  );
}