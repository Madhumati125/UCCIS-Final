import { Routes, Route } from "react-router-dom";

import OperationalDashboard from "../dashboards/OperationalDashboard";
import MinisterLayer from "../dashboards/MinisterLayer";
import PSLayer from "../dashboards/PSLayer";
import OSDLayer from "../dashboards/OSDLayer";
import FieldLayer from "../dashboards/FieldLayer";

export default function RoutesConfig() {

  return (
    <Routes>

      <Route
        path="/"
        element={<OperationalDashboard />}
      />

      <Route
        path="/minister"
        element={<MinisterLayer />}
      />

      <Route
        path="/ps"
        element={<PSLayer />}
      />

      <Route
        path="/osd"
        element={<OSDLayer />}
      />

      <Route
        path="/field"
        element={<FieldLayer />}
      />

    </Routes>
  );
}