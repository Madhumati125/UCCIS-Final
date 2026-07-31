import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function FailurePieChart() {

  const data = [
    {
      name: "Recovered",
      value: 80
    },

    {
      name: "Pending",
      value: 20
    }
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={200}
    >
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          outerRadius={70}
        >
          {
            data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index]
                }
              />
            ))
          }
        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}