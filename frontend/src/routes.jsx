import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EscalationView from "./pages/EscalationView";
import FieldExecution from "./pages/FieldExecution";
import ReplayView from "./pages/ReplayView";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/escalation" element={<EscalationView />} />
      <Route path="/execution" element={<FieldExecution />} />
      <Route path="/replay" element={<ReplayView />} />
    </Routes>
  );
}

export default RoutesPage;