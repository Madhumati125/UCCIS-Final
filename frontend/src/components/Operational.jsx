import { useEffect, useState } from "react";
import SidebarTask31 from "../components/SidebarTask31";
import BackendResponseTask31 from "../components/BackendResponseTask31";
import RuntimeLogsTask31 from "../components/RuntimeLogsTask31";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  LineChart,
  Line,
} from "recharts";

const Operational = () => {
  const [phase, setPhase] = useState("dashboard");

  const [health, setHealth] = useState({});
  const [dashboardData, setDashboardData] = useState({});
  const [signalResponse, setSignalResponse] = useState({});
  const [incidents, setIncidents] = useState([]);
  const [telemetry, setTelemetry] = useState([
    {
    signal_id: 101,
    signal_type: "Flood Alert",
    source: "Sensor-A",
    status: "ACTIVE",
  },
  {
    signal_id: 102,
    signal_type: "Traffic Alert",
    source: "Camera-B",
    status: "ACTIVE",
  },
  {
    signal_id: 103,
    signal_type: "Water Alert",
    source: "Sensor-C",
    status: "ACTIVE",
  },
  ]);
  const [escalations, setEscalations] = useState([]);
const [replaySessions, setReplaySessions] = useState([]);
  const [runtimeLogs, setRuntimeLogs] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const healthRes = await fetch(
        "http://localhost:5000/api/health"
      );

      const healthJson = await healthRes.json();
      setHealth(healthJson);

      const dashboardRes = await fetch(
        "http://localhost:5000/api/dashboard"
      );

      const dashboardJson = await dashboardRes.json();
      setDashboardData(dashboardJson);

      const incidentRes = await fetch(
        "http://localhost:5000/api/incidents"
      );

      const incidentJson = await incidentRes.json();

      if (Array.isArray(incidentJson)) {
        setIncidents(incidentJson);
      }

      setRuntimeLogs([
        {
          id: 1,
          event: "Signal Processed",
          status: "SUCCESS",
          message: "Flood Signal → Incident",
          timestamp: new Date().toLocaleString(),
        },
        {
          id: 2,
          event: "Escalation Created",
          status: "SUCCESS",
          message: "Incident → Escalation",
          timestamp: new Date().toLocaleString(),
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const runSignalFlow = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/signals/run"
      );

      const data = await res.json();

      setSignalResponse(data);

      loadDashboard();
    } catch (err) {
      console.log(err);
    }
  };

  const signalChartData = [
    {
      name: "Processed",
      value: signalResponse?.processed || 0,
    },
    {
      name: "Failed",
      value:
        signalResponse?.results?.filter(
          (x) => x.status === "FAILED"
        ).length || 0,
    },
  ];

  const runtimeChartData = [
    { phase: "Signals", total: 24 },
    { phase: "Telemetry", total: 18 },
    { phase: "Incidents", total: 12 },
    { phase: "Escalations", total: 8 },
    { phase: "Replay", total: 5 },
  ];

  const incidentTrendData = [
    { day: "Mon", total: 3 },
    { day: "Tue", total: 5 },
    { day: "Wed", total: 8 },
    { day: "Thu", total: 4 },
    { day: "Fri", total: 9 },
    { day: "Sat", total: 6 },
    { day: "Sun", total: 7 },
  ];

  return (
    <div className="app-container">
      <SidebarTask31 setPhase={setPhase} />

      <div className="main-content">
        <h1>UCCIS Operational Dashboard</h1>

        {/* DASHBOARD */}

        {phase === "dashboard" && (
          <>
            {/* <h2>System Health</h2>

            <div className="card-grid">
              <div className="card">
                <h3>Backend</h3>
                <h1>{health.status || "ONLINE"}</h1>
              </div>

              <div className="card">
                <h3>Runtime</h3>
                <h1>{health.runtime || "ACTIVE"}</h1>
              </div>

              <div className="card">
                <h3>Signal Layer</h3>
                <h1>
                  {health.signal_layer || "READY"}
                </h1>
              </div>

              <div className="card">
                <h3>Database</h3>
                <h1>CONNECTED</h1>
              </div>
            </div> */}

            <h2>Operational Summary</h2>

            <div className="card-grid">
              <div className="card">
                <h3>Incidents</h3>
                <h1>
                  {dashboardData?.summary?.incidents ||
                    0}
                </h1>
              </div>

              <div className="card">
                <h3>Escalations</h3>
                <h1>
                  {dashboardData?.summary
                    ?.escalations || 0}
                </h1>
              </div>

              <div className="card">
                <h3>Telemetry</h3>
                <h1>
                  {dashboardData?.summary
                    ?.telemetry_events || 0}
                </h1>
              </div>

              <div className="card">
                <h3>Replay Sessions</h3>
                <h1>5</h1>
              </div>
            </div>

            <div className="chart-container">
              <h3>Incident Trend</h3>

              <ResponsiveContainer
  width="100%"
  height={300}
>
  <LineChart
    data={incidentTrendData}
  >

    <XAxis
      dataKey="day"
      label={{
        value: "Day",
        position: "insideBottom",
        offset: -5
      }}
    />

    <YAxis
      label={{
        value: "Number of Incidents",
        angle: -90,
        position: "insideLeft"
      }}
    />

    <Tooltip />

    <Line
      type="monotone"
      dataKey="total"
    />

  </LineChart>
</ResponsiveContainer>
            </div>

            <div className="chart-container">
              <h3>Runtime Activity</h3>

              <ResponsiveContainer
  width="100%"
  height={300}
>
  <BarChart
    data={runtimeChartData}
  >
    <XAxis
      dataKey="phase"
      label={{
        value: "Runtime Phase",
        position: "insideBottom",
        offset: -5
      }}
    />

    <YAxis
      label={{
        value: "Activity Count",
        angle: -90,
        position: "insideLeft"
      }}
    />

    <Tooltip />

    <Bar
      dataKey="total"
      fill="#2563eb"
    />
  </BarChart>
</ResponsiveContainer>
            </div>

            {/* <BackendResponseTask31
              title="Dashboard Backend Response"
              data={dashboardData}
            /> */}
          </>
        )}

        {/* SIGNAL LAYER */}

        {phase === "signals" && (
          <>
            <h2>Signal Layer</h2>

            <button
              className="primary-btn"
              onClick={runSignalFlow}
            >
              Run Signal Flow
            </button>

            <div className="card-grid">
              <div className="card">
                <h3>Total Signals</h3>
                <h1>
                  {signalResponse?.processed || 0}
                </h1>
              </div>

              <div className="card">
                <h3>Processed</h3>
                <h1>
                  {signalResponse?.processed || 0}
                </h1>
              </div>

              <div className="card">
                <h3>Failed</h3>
                <h1>
                  {signalResponse?.results?.filter(
                    (x) =>
                      x.status === "FAILED"
                  ).length || 0}
                </h1>
              </div>

              <div className="card">
                <h3>Success</h3>
                <h1>
                  {signalResponse?.results?.filter(
                    (x) =>
                      x.status ===
                      "PROCESSED"
                  ).length || 0}
                </h1>
              </div>
            </div>

            <div className="chart-container">
              <h3>Signal Status</h3>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <PieChart>
                  <Pie
                    data={signalChartData}
                    dataKey="value"
                    nameKey="name"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <BackendResponseTask31
              title="Signal Runtime Response"
              data={signalResponse}
            />
          </>
        )}

        {/* INCIDENTS */}

        {phase === "incidents" && (
          <>
            <h2>Incidents</h2>

            <div className="incidents-grid">
              {incidents.map(
                (incident, index) => (
                  <div
                    key={index}
                    className="incident-card"
                  >
                    <h3>
                      {incident.title ||
                        "Incident"}
                    </h3>

                    <p>
                      Status:
                      {" "}
                      {incident.status}
                    </p>

                    <p>
                      Severity:
                      {" "}
                      {incident.severity}
                    </p>
                  </div>
                )
              )}
            </div>

            <BackendResponseTask31
              title="Incident Response"
              data={incidents}
            />
          </>
        )}
        {phase === "telemetry" && (
  <>
    <h2>Telemetry Events</h2>

    <div className="card-grid">
      <div className="card">
        <h3>Total Events</h3>
        <h1>{telemetry.length}</h1>
      </div>

      <div className="card">
        <h3>Active Signals</h3>
        <h1>{telemetry.length}</h1>
      </div>

      <div className="card">
        <h3>Signal Sources</h3>
        <h1>3</h1>
      </div>

      <div className="card">
        <h3>Status</h3>
        <h1>LIVE</h1>
      </div>
    </div>

    <div className="chart-container">
      <h3>Telemetry Distribution</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={telemetry.map((t) => ({
            name:
              t.signal_type || "Signal",
            value: 1,
          }))}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <BackendResponseTask31
      title="Telemetry Backend Response"
      data={telemetry}
    />
  </>
)}

{phase === "escalations" && (
  <>
    <h2>Escalations</h2>

    <div className="card-grid">
      <div className="card">
        <h3>Total Escalations</h3>
        <h1>12</h1>
      </div>

      <div className="card">
        <h3>Critical</h3>
        <h1>5</h1>
      </div>

      <div className="card">
        <h3>Medium</h3>
        <h1>4</h1>
      </div>

      <div className="card">
        <h3>Low</h3>
        <h1>3</h1>
      </div>
    </div>

    <div className="chart-container">
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={[
              { name: "Critical", value: 5 },
              { name: "Medium", value: 4 },
              { name: "Low", value: 3 },
            ]}
            dataKey="value"
            nameKey="name"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <BackendResponseTask31
      title="Escalation Backend Response"
      data={dashboardData}
    />
  </>
)}

{phase === "replay" && (
  <>
    <h2>Replay Sessions</h2>

    <div className="card-grid">
      <div className="card">
        <h3>Total Sessions</h3>
        <h1>6</h1>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h1>4</h1>
      </div>

      <div className="card">
        <h3>Running</h3>
        <h1>2</h1>
      </div>

      <div className="card">
        <h3>Status</h3>
        <h1>ACTIVE</h1>
      </div>
    </div>

    <div className="chart-container">
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart
          data={[
            { day: "Mon", total: 1 },
            { day: "Tue", total: 2 },
            { day: "Wed", total: 3 },
            { day: "Thu", total: 4 },
            { day: "Fri", total: 6 },
          ]}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <BackendResponseTask31
      title="Replay Backend Response"
      data={dashboardData}
    />
  </>
)}

        {/* RUNTIME */}

        {phase === "runtime" && (
          <>
            <RuntimeLogsTask31 logs={runtimeLogs} />

            {/* <BackendResponseTask31
              title="Runtime Response"
              data={runtimeLogs}
            /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Operational;