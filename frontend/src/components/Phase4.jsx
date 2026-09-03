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

const uxData = [

  {
    module: "Replay",
    cognition: 82
  },

  {
    module: "Telemetry",
    cognition: 91
  },

  {
    module: "Governance",
    cognition: 74
  },

  {
    module: "Audit",
    cognition: 88
  },

  {
    module: "Recovery",
    cognition: 69
  }

];

/* BACKEND RESPONSE */

const backendResponse = {

  executiveReadability:
    "Operational Readability Optimized",

  replayVisibility:
    "Replay-First Visibility Active",

  operationalDensity:
    "Low Scroll Operational Density Enabled",

  interconnectedSurfaces:
    "Operational Surfaces Unified",

  hierarchySpacing:
    "Hierarchy-Aware Layout Active",

  operationalRhythm:
    "Operational Rhythm Stabilized",

  cognitionLayer:
    "Executive Cognition Layer Active",

  unifiedExperience:
    "One Operational Nervous System Active"

};

function Phase4() {

  return (

    <div style={container}>

      <h1>
        PHASE 4 — Executive UX Hardening
      </h1>

      {/* CARDS */}

      <div style={grid}>

        <div style={card}>
          Operational Density: HIGH
        </div>

        <div style={card}>
          Replay Visibility: ACTIVE
        </div>

        <div style={card}>
          Executive Cognition: VERIFIED
        </div>

        <div style={card}>
          Interconnected Surfaces: ACTIVE
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
    Executive Cognition Analysis
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
      data={uxData}
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
        dataKey="module"
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
    value: "Operational Modules",
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
    value: "Cognition Score (%)",
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
          color: "#3b82f6"
        }}
        labelStyle={{
          color: "#3b82f6",
          fontWeight: "bold"
        }}
        itemStyle={{
          color: "#3b82f6"
        }}
      />

      <Bar
        dataKey="cognition"
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
          Executive UX Information
        </h2>

        <div style={infoLine}>
          Executive UX hardening
          improves operational cognition
          across replay, telemetry,
          governance, and audit layers.
        </div>

        <div style={infoLine}>
          Replay-first visibility keeps
          replay reconstruction and
          divergence information visible
          at all times.
        </div>

        <div style={infoLine}>
          Low-scroll operational density
          improves institutional command
          center readability.
        </div>

        <div style={infoLine}>
          Interconnected operational
          surfaces prevent isolated
          dashboards from appearing
          disconnected.
        </div>

        <div style={infoLine}>
          Hierarchy-aware spacing creates
          operational rhythm and improves
          executive readability.
        </div>

        <div style={infoLine}>
          Unified operational surfaces
          behave as one operational
          nervous system rather than
          stitched independent widgets.
        </div>

      </div>

      {/* BACKEND RESPONSE */}

      {/* <div style={panel}>

        <h2>
          Backend UX Response
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

export default Phase4;