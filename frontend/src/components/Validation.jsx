import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Validation() {

  const validationData = [
    { name: "PASS", value: 92 },
    { name: "FAIL", value: 8 }
  ];

  return (

    <div className="page">

      <h1>Validation Control Center</h1>

      <div className="stats-grid">

        <div className="stat-card">
          <p className="stat-title">Validation</p>
          <h1 className="green-text">PASS</h1>
        </div>

        <div className="stat-card">
          <p className="stat-title">Integrity</p>
          <h1>ACTIVE</h1>
        </div>

      </div>

      <div className="panel">

        <h2>Validation Results</h2>

        <ResponsiveContainer width="100%" height={280}>

          <PieChart>

            <Pie
              data={validationData}
              dataKey="value"
              outerRadius={100}
            >

              <Cell fill="#00ff90" />

              <Cell fill="#ff4444" />

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="panel">

        <h2>Backend Validation Response</h2>

        <div className="terminal-box">

<pre>
{`{
  "validation": "PASS",
  "antiMisrepresentation": true,
  "testingEvidence": "ATTACHED"
}`}
</pre>

        </div>

      </div>

    </div>

  );

}