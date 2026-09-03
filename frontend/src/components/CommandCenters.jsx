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
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";


export default function CommandCenters() {

  const [active, setActive] = useState("CommandCenters");

  const [summary, setSummary] = useState({
    signals: 0,
    telemetry: 0,
    incidents: 0,
    runtimeLogs: 0,
  });

  const [chain, setChain] = useState([]);


  /* =====================================================
     API DATA
  ===================================================== */

  useEffect(() => {

    API.get("/api/runtime/summary")
      .then((res) => setSummary(res.data))
      .catch(console.error);


    API.get("/api/runtime/chain")
      .then((res) => setChain(res.data))
      .catch(console.error);

  }, []);


  /* =====================================================
     RUNTIME ACTIVITY
  ===================================================== */

  const runtimeActivity = [
    { day: "Mon", signals: 2 },
    { day: "Tue", signals: 4 },
    { day: "Wed", signals: 6 },
    { day: "Thu", signals: 9 },
    { day: "Fri", signals: 13 },
  ];


  /* =====================================================
     INCIDENT DISTRIBUTION
  ===================================================== */

  const incidentData = [
    { name: "Flood", value: 5 },
    { name: "Traffic", value: 4 },
    { name: "Medical", value: 3 },
    { name: "Power", value: 2 },
    { name: "Cyber", value: 1 },
  ];


  /* =====================================================
     INCIDENT COLORS
  ===================================================== */

  const INCIDENT_COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#f59e0b",
    "#9333ea",
  ];


  /* =====================================================
     DATABASE ENTITY DATA
  ===================================================== */

  const entityData = [
    {
      entity: "Signals",
      count: summary.signals || 13,
    },
    {
      entity: "Telemetry",
      count: summary.telemetry || 13,
    },
    {
      entity: "Incidents",
      count: summary.incidents || 11,
    },
    {
      entity: "Logs",
      count: summary.runtimeLogs || 22,
    },
  ];


  /* =====================================================
     PERFORMANCE DATA
  ===================================================== */

  const performanceData = [
    {
      week: "W1",
      throughput: 20,
    },
    {
      week: "W2",
      throughput: 35,
    },
    {
      week: "W3",
      throughput: 42,
    },
    {
      week: "W4",
      throughput: 58,
    },
  ];


  /* =====================================================
     UI
  ===================================================== */

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <SidebarTask28
        active={active}
        setActive={setActive}
      />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        style={{
          flex: 1,
          padding: "25px",
        }}
      >

        {active === "Dashboard" ? (

          <>

            {/* =================================================
                PAGE TITLE
            ================================================= */}

            <h1
              style={{
                fontSize: "42px",
                marginBottom: "25px",
              }}
            >
              UCCIS Command Center
            </h1>


            {/* =================================================
                KPI CARDS
            ================================================= */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
                marginBottom: "25px",
              }}
            >

              <div className="cardBox">

                <h3>
                  Signals
                </h3>

                <h1>
                  {summary.signals}
                </h1>

              </div>


              <div className="cardBox">

                <h3>
                  Telemetry
                </h3>

                <h1>
                  {summary.telemetry || 13}
                </h1>

              </div>


              <div className="cardBox">

                <h3>
                  Incidents
                </h3>

                <h1>
                  {summary.incidents}
                </h1>

              </div>


              <div className="cardBox">

                <h3>
                  Runtime Logs
                </h3>

                <h1>
                  {summary.runtimeLogs}
                </h1>

              </div>

            </div>


            {/* =================================================
                CHARTS ROW 1
            ================================================= */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "25px",
              }}
            >

              {/* =================================================
                  RUNTIME ACTIVITY
              ================================================= */}

              <div className="panel">

                <h2>
                  Runtime Activity
                </h2>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <BarChart
                    data={runtimeActivity}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 30,
                    }}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />


                    <XAxis
                      dataKey="day"
                      stroke="#cbd5e1"
                      label={{
                        value: "Day",
                        position: "insideBottom",
                        offset: -15,
                        fill: "#cbd5e1",
                      }}
                    />


                    <YAxis
                      stroke="#cbd5e1"
                      label={{
                        value: "Activity Count",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#cbd5e1",
                      }}
                    />


                    <Tooltip />


                    <Bar
                      dataKey="signals"
                      name="Signals"
                      fill="#2563eb"
                      radius={[5, 5, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>


              {/* =================================================
                  INCIDENT DISTRIBUTION
              ================================================= */}

              <div className="panel">

                <h2>
                  Incident Distribution
                </h2>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <PieChart>

                    <Pie
                      data={incidentData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="45%"
                      outerRadius={100}
                      label={({ name, value }) =>
                        `${name}: ${value}`
                      }
                      labelLine={true}
                    >

                      {incidentData.map(
                        (entry, index) => (

                          <Cell
                            key={`cell-${index}`}
                            fill={
                              INCIDENT_COLORS[
                                index %
                                  INCIDENT_COLORS.length
                              ]
                            }
                          />

                        )
                      )}

                    </Pie>


                    <Tooltip />


                    <Legend
                      verticalAlign="bottom"
                      align="center"
                      layout="horizontal"
                    />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>


            {/* =================================================
                CHARTS ROW 2
            ================================================= */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "25px",
              }}
            >

              {/* =================================================
                  DATABASE ENTITY ANALYTICS
              ================================================= */}

              <div className="panel">

                <h2>
                  Database Entity Analytics
                </h2>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <BarChart
                    data={entityData}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 20,
                    }}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />


                    <XAxis
                      dataKey="entity"
                      stroke="#cbd5e1"
                      label={{
    value: "Entity",
    position: "insideBottom",
    offset: -5,
    fill: "#cbd5e1",
  }}
                    />


                    <YAxis
                      stroke="#cbd5e1"
                      label={{
    value: "Entity Count",
    angle: -90,
    position: "insideLeft",
    fill: "#cbd5e1",
  }}
                    />


                    <Tooltip />


                    <Bar
                      dataKey="count"
                      name="Count"
                      fill="#16a34a"
                      radius={[5, 5, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>


              {/* =================================================
                  RUNTIME PERFORMANCE
              ================================================= */}

              <div className="panel">

                <h2>
                  Runtime Performance
                </h2>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <LineChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 20,
                    }}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />


                    <XAxis
                      dataKey="week"
                      stroke="#cbd5e1"
                      label={{
    value: "Week",
    position: "insideBottom",
    offset: -5,
    fill: "#cbd5e1",
  }}
                    />


                    <YAxis
                      stroke="#cbd5e1"
                      label={{
    value: "Throughput",
    angle: -90,
    position: "insideLeft",
    fill: "#cbd5e1",
  }}
                    />


                    <Tooltip />


                    <Line
                      type="monotone"
                      dataKey="throughput"
                      name="Throughput"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{
                        r: 5,
                      }}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </div>


            {/* =================================================
                BACKEND RESPONSE
            ================================================= */}

            {/* <div className="panel">

              <h2>
                Backend Response
              </h2>


              <pre>
                {JSON.stringify(
                  summary,
                  null,
                  2
                )}
              </pre>

            </div> */}


            {/* =================================================
                RUNTIME CHAIN
            ================================================= */}

            {/* <div
              className="panel"
              style={{
                marginTop: "20px",
              }}
            > */}

              {/* <h2>
                Runtime Chain Evidence
              </h2>


              <table
                style={{
                  width: "100%",
                  borderCollapse:
                    "collapse",
                }}
              >

                <thead>

                  <tr>

                    <th>
                      Signal
                    </th>

                    <th>
                      Event
                    </th>

                    <th>
                      Incident
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {chain.map(
                    (row, index) => (

                      <tr key={index}>

                        <td>
                          {row.signal_id}
                        </td>

                        <td>
                          {row.event_id}
                        </td>

                        <td>
                          {row.incident_id}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table> */}

            {/* </div> */}

          </>

        ) : (

          <PhaseViewTask28
            phase={active}
          />

        )}

      </div>


      {/* =====================================================
          PAGE STYLES
      ===================================================== */}

      <style>{`

        .cardBox {
          background: #1e293b;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #334155;
        }


        .cardBox h3 {
          color: #cbd5e1;
          margin-bottom: 10px;
        }


        .cardBox h1 {
          color: #ffffff;
          font-size: 36px;
        }


        .panel {
          background: #1e293b;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #334155;
        }


        .panel h2 {
          margin-bottom: 15px;
          color: #ffffff;
        }


        .panel pre {
          background: #0f172a;
          color: #22c55e;
          padding: 15px;
          border-radius: 8px;
          overflow-x: auto;
        }


        table th,
        table td {
          border: 1px solid #334155;
          padding: 10px;
          text-align: center;
        }


        table th {
          background: #334155;
        }


        table td {
          color: #cbd5e1;
        }

      `}</style>

    </div>
  );
}