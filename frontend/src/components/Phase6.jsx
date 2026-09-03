import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

/* CHART DATA */

const validationData = [

  {
    name: "Replay Drift",
    value: 22
  },

  {
    name: "Failed Reconstruction",
    value: 14
  },

  {
    name: "Corrupted Segments",
    value: 18
  },

  {
    name: "Recovery Retries",
    value: 46
  }

];

/* COLORS */

const COLORS = [

  "#3b82f6",

  "#ef4444",

  "#22c55e",

  "#f59e0b"

];

/* BACKEND RESPONSE */

const backendResponse = {

  runtimeTimestamps:
    "Runtime Timestamp Validation Active",

  replayDrift:
    "Replay Drift Visibility Enabled",

  failedReconstruction:
    "Failed Replay Reconstruction Tracking Active",

  staleOperators:
    "Stale Operator State Visibility Enabled",

  corruptedReplay:
    "Corrupted Replay Segment Detection Active",

  recoveryRetries:
    "Recovery Retry Sequencing Active",

  antiMisrepresentation:
    "Operational Misrepresentation Prevention Enabled"

};

function Phase6() {

  return (

    <div style={container}>

      <h1>
        PHASE 6 — Anti Misrepresentation Validation
      </h1>

      {/* CARDS */}

      <div style={grid}>

        <div style={card}>
          Replay Drift: EXPOSED
        </div>

        <div style={card}>
          Failed Reconstructions: TRACKED
        </div>

        <div style={card}>
          Corrupted Segments: DETECTED
        </div>

        <div style={card}>
          Recovery Retries: ACTIVE
        </div>

      </div>

      {/* PIE CHART */}

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
    Validation Distribution
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
        data={validationData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="45%"
        outerRadius={100}
        labelLine
        label={({ value }) => value}
      >

        {validationData.map((entry, index) => (

          <Cell
            key={index}
            fill={COLORS[index]}
            stroke="#ffffff"
            strokeWidth={2}
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
          fontSize: "18px",
          paddingTop: "25px"
        }}
      />

    </PieChart>

  </div>

</div>

      {/* INFORMATION */}

      <div style={panel}>

        <h2>
          Validation Information
        </h2>

        <div style={infoLine}>
          Anti-misrepresentation
          validation exposes operational
          inconsistencies that would
          otherwise remain hidden.
        </div>

        <div style={infoLine}>
          Replay drift visibility exposes
          replay timing inconsistencies
          across operational timelines.
        </div>

        <div style={infoLine}>
          Failed replay reconstruction
          attempts are preserved as
          operational validation evidence.
        </div>

        <div style={infoLine}>
          Corrupted replay segment
          detection exposes replay
          instability and operational
          degradation.
        </div>

        <div style={infoLine}>
          Recovery retry visibility
          exposes repeated operational
          recovery attempts under replay
          instability conditions.
        </div>

        <div style={infoLine}>
          Runtime timestamps prevent
          operational exaggeration by
          exposing actual replay timing
          behavior.
        </div>

        <div style={infoLine}>
          Validation surfaces make false
          operational “PASS” reporting
          significantly more difficult.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      {/* <div style={panel}>

        <h2>
          Backend Validation Response
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

export default Phase6;