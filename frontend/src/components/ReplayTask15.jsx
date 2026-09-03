import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

export default function ReplayTask15() {

  const replayData = [
    { phase: "Signal", value: 20 },
    { phase: "Escalation", value: 18 },
    { phase: "Recovery", value: 14 },
    { phase: "Validation", value: 30 }
  ];

  const continuity = [
    { time: "10:00", replay: 45 },
    { time: "10:05", replay: 62 },
    { time: "10:10", replay: 78 },
    { time: "10:15", replay: 90 }
  ];

  return (

    <div className="page">

      <h1>Replay Reconstruction Center</h1>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Replay Confidence</p>
          <h1 className="green-text">98%</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Recovery Status</p>
          <h1>STABLE</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Replay Events</p>
          <h1>184</h1>
        </div>

      </div>

      <div className="chart-grid">

        <div className="panel">

          <h2>Replay Reconstruction</h2>

          <ResponsiveContainer width="100%" height={250}>

            <BarChart data={replayData}>

              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="phase" 
                label={{
    value: "Replay Phases",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 14,
  }}
              />

              <YAxis
              label={{
    value: "Replay Count",
    angle: -90,
    position: "insideLeft",
    fill: "#d6dde5",
    fontSize: 14,
  }}
/>

              <Tooltip />

              <Bar dataKey="value" fill="#00ff90" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="panel">

          <h2>Replay Continuity</h2>

          <ResponsiveContainer width="100%" height={250}>

            <LineChart data={continuity}>

              <CartesianGrid stroke="#1e293b" />

              <XAxis dataKey="time"
              label={{
    value: "Timeline",
    position: "insideBottom",
    offset: -5,
    fill: "#d6dde5",
    fontSize: 14,
  }}
   />
   <YAxis
  label={{
    value: "Continuity Score",
    angle: -90,
    position: "outsideLeft",
    fill: "#d6dde5",
    fontSize: 14,
  }}
/>

              <Tooltip />

              <Line
                dataKey="replay"
                stroke="#00ff90"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* <div className="panel">

        <h2>Backend Replay Response</h2>

        <div className="terminal-box">

<pre>
{`{
  "replaySafe": true,
  "continuity": "VERIFIED",
  "reconstruction": "DETERMINISTIC",
  "lineage": "PRESERVED"
}`}
</pre>

        </div>

      </div> */}

    </div>

  );

}