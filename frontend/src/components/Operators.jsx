import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function Operators() {

  const operatorData = [
    { name: "ACK", value: 18 },
    { name: "Replay", value: 12 },
    { name: "Audit", value: 8 },
    { name: "Recovery", value: 16 }
  ];

  return (

    <div className="page">

      <h1>Operator Activity Center</h1>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Operators Online</p>
          <h1>12</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Concurrency</p>
          <h1 className="green-text">STABLE</h1>
        </div>

      </div>

      <div className="panel">

        <h2>Operator Actions</h2>

        <ResponsiveContainer width="100%" height={280}>

          <BarChart data={operatorData}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#00ff90"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="panel">

        <h2>Backend Operator Response</h2>

        <div className="terminal-box">

<pre>
{`{
  "operatorsActive": 12,
  "concurrency": "STABLE",
  "acknowledgements": 184
}`}
</pre>

        </div>

      </div>

    </div>

  );

}