import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function
OperatorConcurrencyChart() {

  const data = [
    {
      operator: "OPERATOR_1",
      acknowledgements: 12,
      escalations: 8
    },

    {
      operator: "OPERATOR_2",
      acknowledgements: 15,
      escalations: 10
    },

    {
      operator: "OPERATOR_3",
      acknowledgements: 9,
      escalations: 6
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={220}
    >
      <BarChart data={data}>

        <XAxis dataKey="operator" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Bar
          dataKey="acknowledgements"
          fill="#38bdf8"
        />

        <Bar
          dataKey="escalations"
          fill="#f59e0b"
        />

      </BarChart>
    </ResponsiveContainer>
  );
}