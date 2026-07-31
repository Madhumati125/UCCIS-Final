import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function
ReplayTimelineChart() {

  const data = [
    {
      time: "10:00",
      events: 12
    },

    {
      time: "10:05",
      events: 22
    },

    {
      time: "10:10",
      events: 30
    },

    {
      time: "10:15",
      events: 40
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={220}
    >
      <AreaChart data={data}>

        <XAxis dataKey="time" />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="events"
          stroke="#38bdf8"
          fill="#38bdf8"
          fillOpacity={0.4}
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}