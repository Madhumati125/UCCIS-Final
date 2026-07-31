import { useEffect, useState } from "react";
import API from "../api";

import StatCardTask26 from "../components/StatCardTask26.jsx";
import TelemetryChartTask26 from "../components/TelemetryChartTask26.jsx";

export default function TelemetryTask26() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/telemetry").then(res => setData(res.data));
  }, []);

  return (
    <div className="page">
      <h1>📡 Telemetry Phase</h1>

      <div className="grid">
        <StatCardTask26 title="Total Signals" value={data.length} />
        <StatCardTask26 title="Active Systems" value={3} />
        <StatCardTask26 title="Status" value="LIVE" />
      </div>

      <TelemetryChartTask26 data={data} />

      <div className="card">
        <h3>Raw Backend Response</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}