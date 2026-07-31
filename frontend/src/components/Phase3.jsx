import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

/* CHART DATA */

const entropyData = [

  {
    state: "Telemetry",
    failures: 5
  },

  {
    state: "Replay",
    failures: 8
  },

  {
    state: "Operators",
    failures: 4
  },

  {
    state: "Recovery",
    failures: 6
  },

  {
    state: "Observability",
    failures: 7
  }

];

/* BACKEND RESPONSE */

const backendResponse = {

  staleTelemetry:
    "Detected",

  delayedAcknowledgements:
    "Operational Delay Active",

  replayCorruption:
    "Replay Corruption Simulation Active",

  partialObservability:
    "Operational Visibility Degraded",

  disconnectedOperators:
    "Operator Disconnect Simulation Active",

  replayOrdering:
    "Out-of-Order Replay Arrival Detected",

  degradedConfidence:
    "Replay Confidence Degraded",

  operationalRealism:
    "Entropy-Aware Operational State Active"

};

function Phase3() {

  return (

    <div style={container}>

      <h1>
        PHASE 3 — Entropy Aware Operational Realism
      </h1>

      {/* CARDS */}

      <div style={grid}>

        <div style={card}>
          Stale Telemetry: DETECTED
        </div>

        <div style={card}>
          Replay Corruption: ACTIVE
        </div>

        <div style={card}>
          Operator Failure: ACTIVE
        </div>

        <div style={card}>
          Partial Observability: DEGRADED
        </div>

      </div>

      {/* BAR CHART */}

<div style={panel}>

  <h2
    style={{
      textAlign: "center",
      color: "#ffffff",
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "20px"
    }}
  >
    Operational Entropy Analysis
  </h2>

  <div
    style={{
      width: "100%",
      height: "420px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >

    <BarChart
      width={1200}
      height={360}
      data={entropyData}
      margin={{
        top: 10,
        right: 20,
        left: 20,
        bottom: 10
      }}
    >

      <CartesianGrid
        stroke="#9ca3af"
        strokeDasharray="4 4"
      />

      <XAxis
        dataKey="state"
        tick={{
          fill: "#7f8ea3",
          fontSize: 16,
          fontWeight: 600
        }}
        axisLine={{
          stroke: "#9ca3af"
        }}
        tickLine={false}
      />

      <YAxis
        domain={[0, 8]}
        ticks={[0, 2, 4, 6, 8]}
        tick={{
          fill: "#7f8ea3",
          fontSize: 16
        }}
        axisLine={{
          stroke: "#9ca3af"
        }}
        tickLine={false}
      />

      <Tooltip
        contentStyle={{
          background: "#ffffff",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          color: "#ef4444"
        }}
        labelStyle={{
          color: "#ef4444",
          fontWeight: "bold"
        }}
        itemStyle={{
          color: "#ef4444"
        }}
      />

      <Bar
        dataKey="failures"
        fill="#ef4444"
        radius={[0, 0, 0, 0]}
        barSize={170}
      />

    </BarChart>

  </div>

</div>

      {/* INFORMATION */}

      <div style={panel}>

        <h2>
          Operational Realism Information
        </h2>

        <div style={infoLine}>
          Controlled entropy introduces
          realistic operational
          instability into replay and
          telemetry infrastructure.
        </div>

        <div style={infoLine}>
          Stale telemetry visibility
          exposes delayed operational
          state synchronization.
        </div>

        <div style={infoLine}>
          Replay corruption simulation
          introduces operational replay
          instability and recovery
          complexity.
        </div>

        <div style={infoLine}>
          Partial observability failure
          simulates degraded operational
          visibility under entropy-aware
          conditions.
        </div>

        <div style={infoLine}>
          Disconnected operator states
          simulate institutional operator
          instability across replay
          systems.
        </div>

        <div style={infoLine}>
          Out-of-order replay arrival
          introduces replay continuity
          inconsistency across the
          operational timeline.
        </div>

        <div style={infoLine}>
          Degraded reconstruction
          confidence prevents the system
          from appearing unrealistically
          perfect.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      <div style={panel}>

        <h2>
          Backend Entropy Response
        </h2>

        <pre style={pre}>
{JSON.stringify(
  backendResponse,
  null,
  2
)}
        </pre>

      </div>

    </div>

  );

}

/* STYLES */

const container = {

  background: "#071018",

  minHeight: "100vh",

  color: "white",

  padding: "20px"
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
    "1px solid #1f3b57"
};

const panel = {

  background: "#102030",

  padding: "20px",

  borderRadius: "12px",

  border:
    "1px solid #1f3b57",

  marginTop: "30px"
};

const infoLine = {

  marginBottom: "14px",

  color: "#cbd5e1",

  lineHeight: "24px"
};

const pre = {

  color: "#9dc6ef",

  overflowX: "auto"
};

export default Phase3;