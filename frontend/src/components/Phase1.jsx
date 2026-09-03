import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

/* PIE CHART DATA */

const repoData = [

  {
    name: "Frontend",
    value: 25
  },

  {
    name: "Backend",
    value: 25
  },

  {
    name: "Replay Engine",
    value: 20
  },

  {
    name: "Telemetry",
    value: 15
  },

  {
    name: "Deployment",
    value: 15
  }

];

/* BACKEND RESPONSE */

// const backendResponse = {

//   repository:
//     "UCCIS Canonical Infrastructure",

//   deployment:
//     "Unified Deployment Active",

//   replayAPI:
//     "Replay APIs Consolidated",

//   observability:
//     "Centralized Observability Active",

//   runtime:
//     "Operational",

//   entryPoint:
//     "/backend/server.js",

//   architecture: [

//     "/frontend",

//     "/backend",

//     "/replay-engine",

//     "/telemetry",

//     "/testing",

//     "/review_packets",

//     "/docs",

//     "/assets",

//     "/runtime_logs",

//     "/deployment"

//   ]

// };

function Phase1() {

  return (

    <div style={container}>

      <h1>
        PHASE 1 — Canonical Repository Consolidation
      </h1>

      {/* STATUS CARDS */}

      <div style={grid}>

        <div style={card}>
          Unified Repo: ACTIVE
        </div>

        <div style={card}>
          Deployment Flow: VERIFIED
        </div>

        <div style={card}>
          Replay APIs: UNIFIED
        </div>

        <div style={card}>
          Observability: ACTIVE
        </div>

      </div>

      {/* PIE CHART */}

<div style={panel}>

  <h2
    style={{
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "40px",
      fontWeight: "700",
      color: "#ffffff"
    }}
  >
    Repository Architecture Distribution
  </h2>

  <div
    style={{
      width: "100%",
      height: "480px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >

    <PieChart
      width={900}
      height={450}
    >

      <Pie
        data={repoData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="45%"
        outerRadius={170}
        labelLine={true}
        label={({ value }) => value}
      >

        {repoData.map((entry, index) => (

          <Cell
            key={index}
            stroke="#ffffff"
            strokeWidth={2}
            fill={[
              "#3b82f6",
              "#22c55e",
              "#ef4444",
              "#f59e0b",
              "#8b5cf6"
            ][index]}
          />

        ))}

      </Pie>

      <Tooltip
        contentStyle={{
          background: "#102030",
          border: "1px solid #334155",
          borderRadius: "8px",
          color: "#ffffff"
        }}
      />

      <Legend
        verticalAlign="bottom"
        iconType="square"
        wrapperStyle={{
          color: "#ffffff",
          fontSize: "22px",
          paddingTop: "25px"
        }}
      />

    </PieChart>

  </div>

</div>
      {/* INFORMATION PANEL */}

      <div style={panel}>

        <h2>
          Canonical Repository Information
        </h2>

        <div style={infoLine}>
          One unified repository now
          manages replay, telemetry,
          runtime proof, validation,
          governance, and deployment
          infrastructure layers.
        </div>

        <div style={infoLine}>
          Replay APIs are consolidated
          into one deterministic replay
          architecture to eliminate
          duplicate replay logic.
        </div>

        <div style={infoLine}>
          Deployment infrastructure now
          operates through one canonical
          operational entry point.
        </div>

        <div style={infoLine}>
          Runtime logs, replay evidence,
          and telemetry sequencing are
          preserved through centralized
          operational proof layers.
        </div>

        <div style={infoLine}>
          Observability systems are now
          directly connected with replay,
          telemetry, and governance
          infrastructure.
        </div>

        <div style={infoLine}>
          Canonical architecture improves
          operational maintainability and
          institutional deployment
          consistency.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      {/* <div style={panel}>

        <h2>
          Backend Operational Response
        </h2>

        <pre style={pre}>
{JSON.stringify(
  backendResponse,
  null,
  2
)}
        </pre>

      </div> */}

    </div>

  );

}

/* STYLES */

const container = {

  background: "#071018",

  minHeight: "100vh",

  color: "white",

  padding: "20px",

  fontFamily: "Arial"
};

const grid = {

  display: "grid",

  gridTemplateColumns:
    "repeat(4,1fr)",

  gap: "20px",

  marginTop: "20px"
};

const card = {

  background: "#102030",

  padding: "20px",

  borderRadius: "12px",

  border:
    "1px solid #1f3b57",

  fontSize: "15px",

  fontWeight: "bold"
};

const panel = {

  background: "#102030",

  padding: "20px",

  borderRadius: "12px",

  border:
    "1px solid #1f3b57",

  marginTop: "30px",
};

const infoLine = {

  marginBottom: "14px",

  color: "#cbd5e1",

  lineHeight: "24px"
};

const pre = {

  color: "#9dc6ef",

  overflowX: "auto",

  fontSize: "14px"
};

export default Phase1;