import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

export default function Telemetry() {

  const telemetry = [
    { time: "10:00", cpu: 40 },
    { time: "10:05", cpu: 65 },
    { time: "10:10", cpu: 48 },
    { time: "10:15", cpu: 88 },
    { time: "10:20", cpu: 55 }
  ];

  return (

    <div className="page">

      <h1>Telemetry Monitoring Center</h1>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">CPU Load</p>
          <h1>72%</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Operators</p>
          <h1>12</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Telemetry Status</p>
          <h1 className="green-text">ACTIVE</h1>
        </div>

      </div>

      <div className="panel">

        <h2>Live Telemetry</h2>

        <ResponsiveContainer width="100%" height={300}>

          <AreaChart data={telemetry}>

            <CartesianGrid stroke="#1e293b" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Area
              dataKey="cpu"
              stroke="#00ff90"
              fill="#00331f"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="panel">

        <h2>Backend Telemetry Response</h2>

        <div className="terminal-box">

<pre>
{`{
  "telemetryStreaming": true,
  "operatorsConnected": 12,
  "cpuUsage": "72%"
}`}
</pre>

        </div>

      </div>

    </div>

  );

}