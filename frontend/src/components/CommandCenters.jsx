import { useEffect, useState } from "react";
import SidebarTask28 from "../components/SidebarTask28";
import PhaseViewTask28 from "../components/PhaseViewTask28";
import API from "../services/api";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function CommandCenters() {
  const [active, setActive] = useState("CommandCenters");

  const [summary, setSummary] = useState({
    signals: 0,
    telemetry: 0,
    incidents: 0,
    runtimeLogs: 0
  });

  const [chain, setChain] = useState([]);

  useEffect(() => {
    API.get("/api/runtime/summary")
      .then((res) => setSummary(res.data))
      .catch(console.error);

    API.get("/api/runtime/chain")
      .then((res) => setChain(res.data))
      .catch(console.error);
  }, []);

  const runtimeActivity = [
    { day: "Mon", signals: 2 },
    { day: "Tue", signals: 4 },
    { day: "Wed", signals: 6 },
    { day: "Thu", signals: 9 },
    { day: "Fri", signals: 13 }
  ];

  const incidentData = [
    { name: "Flood", value: 5 },
    { name: "Traffic", value: 4 },
    { name: "Medical", value: 3 },
    { name: "Power", value: 2 },
    { name: "Cyber", value: 1 }
  ];

  const entityData = [
    { entity: "Signals", count: summary.signals || 13 },
    { entity: "Telemetry", count: summary.telemetry || 13 },
    { entity: "Incidents", count: summary.incidents || 11 },
    { entity: "Logs", count: summary.runtimeLogs || 22 }
  ];

  const performanceData = [
    { week: "W1", throughput: 20 },
    { week: "W2", throughput: 35 },
    { week: "W3", throughput: 42 },
    { week: "W4", throughput: 58 }
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white"
      }}
    >
      <SidebarTask28 active={active} setActive={setActive} />

      <div
        style={{
          flex: 1,
          padding: "25px"
        }}
      >
        {active === "Dashboard" ? (
          <>
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "25px"
              }}
            >
              UCCIS Command Center
            </h1>

            {/* KPI CARDS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
                marginBottom: "25px"
              }}
            >
              <div className="cardBox">
                <h3>Signals</h3>
                <h1>{summary.signals}</h1>
              </div>

              <div className="cardBox">
                <h3>Telemetry</h3>
                <h1>{summary.telemetry || 13}</h1>
              </div>

              <div className="cardBox">
                <h3>Incidents</h3>
                <h1>{summary.incidents}</h1>
              </div>

              <div className="cardBox">
                <h3>Runtime Logs</h3>
                <h1>{summary.runtimeLogs}</h1>
              </div>
            </div>

            {/* CHARTS ROW 1 */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "25px"
              }}
            >
              <div className="panel">
                <h2>Runtime Activity</h2>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={runtimeActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="signals" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="panel">
                <h2>Incident Distribution</h2>

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={incidentData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* CHARTS ROW 2 */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "25px"
              }}
            >
              <div className="panel">
                <h2>Database Entity Analytics</h2>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={entityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="entity" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="panel">
                <h2>Runtime Performance</h2>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="throughput"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* BACKEND RESPONSE */}

            <div className="panel">
              <h2>Backend Response</h2>

              <pre>
                {JSON.stringify(summary, null, 2)}
              </pre>
            </div>

            {/* RUNTIME CHAIN */}

            <div
              className="panel"
              style={{ marginTop: "20px" }}
            >
              <h2>Runtime Chain Evidence</h2>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse"
                }}
              >
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Event</th>
                    <th>Incident</th>
                  </tr>
                </thead>

                <tbody>
                  {chain.map((row, index) => (
                    <tr key={index}>
                      <td>{row.signal_id}</td>
                      <td>{row.event_id}</td>
                      <td>{row.incident_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <PhaseViewTask28 phase={active} />
        )}
      </div>

      <style>{`
        .cardBox{
          background:#1e293b;
          padding:20px;
          border-radius:12px;
          text-align:center;
        }

        .panel{
          background:#1e293b;
          padding:20px;
          border-radius:12px;
        }

        table th,
        table td{
          border:1px solid #334155;
          padding:10px;
          text-align:center;
        }

        table th{
          background:#334155;
        }
      `}</style>
    </div>
  );
}