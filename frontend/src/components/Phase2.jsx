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

const replayData = [

  {
    replay: "R1",
    confidence: 82
  },

  {
    replay: "R2",
    confidence: 61
  },

  {
    replay: "R3",
    confidence: 47
  },

  {
    replay: "R4",
    confidence: 91
  },

  {
    replay: "R5",
    confidence: 58
  }

];

/* BACKEND RESPONSE */

const backendResponse = {

  replayLineage:
    "Unified Replay Continuity Active",

  divergenceTracking:
    "Replay Divergence Visible",

  staleReplay:
    "Stale Replay States Detected",

  corruptionIsolation:
    "Replay Corruption Isolation Active",

  delayedRecovery:
    "Recovery Sequencing Enabled",

  replayUncertainty:
    "Operational Replay Uncertainty Active",

  replayConfidence:
    "Dynamic Replay Confidence Enabled",

  appendOnly:
    true

};

function Phase2() {

  return (

    <div style={container}>

      <h1>
        PHASE 2 — Replay Lineage Unification
      </h1>

      {/* CARDS */}

      <div style={grid}>

        <div style={card}>
          Replay Continuity: ACTIVE
        </div>

        <div style={card}>
          Divergence Tracking: ACTIVE
        </div>

        <div style={card}>
          Corruption Isolation: VERIFIED
        </div>

        <div style={card}>
          Replay Confidence: DYNAMIC
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
    Replay Confidence Variability
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
      data={replayData}
      margin={{
        top: 10,
        right: 30,
        left: 10,
        bottom: 10
      }}
    >

      <CartesianGrid
        stroke="#8b98aa"
        strokeDasharray="4 4"
      />

      <XAxis
        dataKey="replay"
        tick={{
          fill: "#7f8ea3",
          fontSize: 18,
          fontWeight: 600
        }}
        axisLine={{
          stroke: "#8b98aa"
        }}
        tickLine={false}
      />

      <YAxis
        domain={[0, 100]}
        ticks={[0, 25, 50, 75, 100]}
        tick={{
          fill: "#7f8ea3",
          fontSize: 18
        }}
        axisLine={{
          stroke: "#8b98aa"
        }}
        tickLine={false}
      />

      <Tooltip
        contentStyle={{
          background: "#102030",
          border: "1px solid #334155",
          borderRadius: "10px",
          color: "#ffffff"
        }}
        labelStyle={{
          color: "#3b82f6"
        }}
      />

      <Bar
        dataKey="confidence"
        fill="#3b82f6"
        radius={[0, 0, 0, 0]}
        barSize={180}
      />

    </BarChart>

  </div>

</div>

      {/* INFORMATION */}

      <div style={panel}>

        <h2>
          Replay Lineage Information
        </h2>

        <div style={infoLine}>
          Replay reconstruction logic
          is unified into one canonical
          replay infrastructure layer.
        </div>

        <div style={infoLine}>
          Replay continuity now follows
          append-only operational
          sequencing.
        </div>

        <div style={infoLine}>
          Divergence visibility exposes
          replay inconsistencies across
          operational timelines.
        </div>

        <div style={infoLine}>
          Replay uncertainty markers
          identify degraded replay
          reconstruction confidence.
        </div>

        <div style={infoLine}>
          Corruption isolation prevents
          replay contamination from
          propagating across lineage.
        </div>

        <div style={infoLine}>
          Delayed recovery states expose
          replay reconstruction latency
          under entropy-aware conditions.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      <div style={panel}>

        <h2>
          Backend Replay Response
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

export default Phase2;