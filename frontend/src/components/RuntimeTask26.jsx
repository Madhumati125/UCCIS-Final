import { useEffect, useState } from "react";
import API from "../api";

import RuntimeLogs from "../components/RuntimeLogs";
import RuntimeChart from "../components/RuntimeChart";
import StatCardTask26 from "../components/StatCardTask26";

export default function RuntimeTask26() {
  const [logs, setLogs] = useState([]);
  const [backendResponse, setBackendResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRuntime = async () => {
      try {
        const res = await API.get("/runtime");

        console.log("Runtime Response:", res.data);

        // Save the raw backend response
        setBackendResponse(res.data);

        // Normalize for the UI
        if (Array.isArray(res.data)) {
          setLogs(res.data);
        } else if (Array.isArray(res.data.logs)) {
          setLogs(res.data.logs);
        } else if (Array.isArray(res.data.data)) {
          setLogs(res.data.data);
        } else {
          setLogs([]);
        }
      } catch (err) {
        console.error(err);
        setError("Unable to fetch runtime logs.");
      } finally {
        setLoading(false);
      }
    };

    fetchRuntime();
  }, []);

  if (loading) return <h2>Loading Runtime...</h2>;
  if (error) return <h2>{error}</h2>;

  const total = logs.length;

  const errors = logs.filter(
    (l) => l.level?.toUpperCase() === "ERROR"
  ).length;

  const warnings = logs.filter(
    (l) => l.level?.toUpperCase() === "WARN"
  ).length;

  const info = logs.filter(
    (l) => l.level?.toUpperCase() === "INFO"
  ).length;

  const chartData = Object.values(
    logs.reduce((acc, log) => {
      const moduleName = log.module || "Unknown";

      if (!acc[moduleName]) {
        acc[moduleName] = {
          module: moduleName,
          count: 0,
        };
      }

      acc[moduleName].count++;

      return acc;
    }, {})
  );

  return (
    <div className="page">
      <h1>🧾 Runtime Phase</h1>

      {/* <div className="grid">
        <StatCardTask26 title="Total Logs" value={total} />
        <StatCardTask26 title="Errors" value={errors} />
        <StatCardTask26 title="Warnings" value={warnings} />
        <StatCardTask26 title="Info" value={info} /> */}
      {/* </div> */}

      <RuntimeChart data={chartData} />

      <RuntimeLogs data={logs} />

      {/* <div className="card">
        <h3>📄 Backend Response</h3>

        <pre
          style={{
            background: "#0b0f1a",
            color: "#9ca3af",
            padding: "15px",
            borderRadius: "8px",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(backendResponse, null, 2)}
        </pre>
      </div> */}
    </div>
  );
}