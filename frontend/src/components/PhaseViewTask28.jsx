import { phaseData } from "../data/phaseData";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie
} from "recharts";

export default function PhaseViewTask28({ phase }) {

  const data = phaseData[phase];

  if (!data) return null;

  return (
    <div>

      <h1>{data.title}</h1>

      {/* KPI CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        {Object.entries(data.cards).map(
          ([key, value]) => (
            <div
              key={key}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <h3>{key}</h3>
              <h1>{value}</h1>
            </div>
          )
        )}
      </div>

      {/* CHARTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h2>Bar Chart</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={data.barData}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h2>Pie Chart</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={data.pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BACKEND RESPONSE */}

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>Backend Response</h2>

        <pre>
          {JSON.stringify(
            data.backend,
            null,
            2
          )}
        </pre>
      </div>

    </div>
  );
}