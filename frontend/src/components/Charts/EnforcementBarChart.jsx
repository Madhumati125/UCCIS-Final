import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

export default function
EnforcementBarChart() {

  const data = [
    {
      stage: "Signal",
      value: 100
    },

    {
      stage: "Governance",
      value: 92
    },

    {
      stage: "Request",
      value: 85
    },

    {
      stage: "Acknowledged",
      value: 78
    },

    {
      stage: "Replay",
      value: 95
    }
  ];

  const colors = [
    "#38bdf8",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#a855f7"
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={230}
    >
      <BarChart data={data}>

        <XAxis dataKey="stage" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="value">

          {
            data.map((entry, index) => (

              <Cell
                key={index}
                fill={
                  colors[index]
                }
              />

            ))
          }

        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
}