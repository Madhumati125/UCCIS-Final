import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from "recharts";

export default function TraceLineage() {
  const data = [
    {
      stage: "Signal-A",
      count: 24
    },
    {
      stage: "Telemetry-B",
      count: 20
    },
    {
      stage: "Incident-C",
      count: 8
    },
    {
      stage: "Escalation-D",
      count: 3
    },
    {
      stage: "Replay-E",
      count: 14
    }
  ];

  const COLORS = [
    "#2563EB",
    "#14B8A6",
    "#F59E0B",
    "#DC2626",
    "#8B5CF6"
  ];

  return (
    <div className="panel">
      <h2>Trace Lineage Viewer</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 20
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="stage"
          />

          <Tooltip />

          <Bar dataKey="count">
            {data.map(
              (entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div
        style={{
          marginTop: "20px"
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Count</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Signal-A</td>
              <td>24</td>
              <td>ACTIVE</td>
            </tr>

            <tr>
              <td>Telemetry-B</td>
              <td>20</td>
              <td>ACTIVE</td>
            </tr>

            <tr>
              <td>Incident-C</td>
              <td>8</td>
              <td>ACTIVE</td>
            </tr>

            <tr>
              <td>Escalation-D</td>
              <td>3</td>
              <td>CRITICAL</td>
            </tr>

            <tr>
              <td>Replay-E</td>
              <td>14</td>
              <td>REPLAYING</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}