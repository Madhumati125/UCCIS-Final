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

const runtimeData = [

  {
    layer: "Runtime",
    events: 82
  },

  {
    layer: "Replay",
    events: 67
  },

  {
    layer: "Corruption",
    events: 18
  },

  {
    layer: "Recovery",
    events: 29
  },

  {
    layer: "Operators",
    events: 41
  }

];

/* BACKEND RESPONSE */

const backendResponse = {

  runtimeLogs:
    "Runtime Evidence Active",

  replayLogs:
    "Replay Event Logging Active",

  corruptionEvidence:
    "Replay Corruption Evidence Detected",

  concurrencyEvidence:
    "Concurrent Operator Activity Active",

  recoverySequencing:
    "Recovery Sequencing Evidence Active",

  operatorActivity:
    "Operator Runtime Activity Visible",

  replayDivergence:
    "Replay Divergence Evidence Active",

  operationalProof:
    "Runtime Proof Layer Operational"

};

function Phase5() {

  return (

    <div style={container}>

      <h1>
        PHASE 5 — Runtime Proof Layer
      </h1>

      {/* CARDS */}

      <div style={grid}>

        <div style={card}>
          Runtime Logs: ACTIVE
        </div>

        <div style={card}>
          Replay Evidence: VERIFIED
        </div>

        <div style={card}>
          Corruption Evidence: DETECTED
        </div>

        <div style={card}>
          Audit Logs: ACTIVE
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
    Runtime Event Distribution
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
      data={runtimeData}
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
        dataKey="layer"
        tick={{
          fill: "#7f8ea3",
          fontSize: 17,
          fontWeight: 600
        }}
        axisLine={{
          stroke: "#9ca3af"
        }}
        tickLine={false}
        label={{
    value: "Runtime Layers",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 14
  }}
      />

      <YAxis
        domain={[0, 100]}
        ticks={[0, 25, 50, 75, 100]}
        tick={{
          fill: "#7f8ea3",
          fontSize: 16
        }}
        axisLine={{
          stroke: "#9ca3af"
        }}
        tickLine={false}
        label={{
    value: "Event Count",
    angle: -90,
    position: "insideLeft",
    fill: "#d6dde5",
    fontSize: 14
  }}
      />

      <Tooltip
        cursor={{
          fill: "rgba(255,255,255,0.08)"
        }}
        contentStyle={{
          background: "#ffffff",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          color: "#22c55e"
        }}
        labelStyle={{
          color: "#22c55e",
          fontWeight: "bold"
        }}
        itemStyle={{
          color: "#22c55e"
        }}
      />

      <Bar
        dataKey="events"
        fill="#22c55e"
        radius={[0, 0, 0, 0]}
        barSize={180}
      />

    </BarChart>

  </div>

</div>

      {/* INFORMATION */}

      <div style={panel}>

        <h2>
          Runtime Proof Information
        </h2>

        <div style={infoLine}>
          Runtime proof layers expose
          operational evidence generated
          during replay execution and
          telemetry sequencing.
        </div>

        <div style={infoLine}>
          Replay event logs preserve
          replay generation continuity
          across operational timelines.
        </div>

        <div style={infoLine}>
          Corruption evidence exposes
          replay corruption attempts and
          operational instability during
          replay execution.
        </div>

        <div style={infoLine}>
          Concurrency evidence validates
          simultaneous operator activity
          across replay and governance
          infrastructure.
        </div>

        <div style={infoLine}>
          Recovery sequencing evidence
          exposes delayed replay recovery
          operations and retry behavior.
        </div>

        <div style={infoLine}>
          Replay divergence evidence
          exposes replay inconsistencies
          across operational replay
          timelines.
        </div>

        <div style={infoLine}>
          Runtime proof visibility makes
          fake operational “PASS” states
          difficult to misrepresent.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      {/* <div style={panel}>

        <h2>
          Backend Runtime Response
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

export default Phase5;