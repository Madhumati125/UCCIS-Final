import React from "react";

import { useNavigate } from "react-router-dom";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function UCCISUnifiedDashboard() {

  const navigate = useNavigate();

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#9333ea",
    "#f59e0b"
  ];

  const phases = [

    {
      name: "Phase 1 - Governance UX",
      route: "/dashboard"
    },

    {
      name: "Phase 2 - Minister Layer",
      route: "/minister"
    },

    {
      name: "Phase 3 - Secretary Layer",
      route: "/secretary"
    },

    {
      name: "Phase 4 - OSD + Field",
      route: "/osd"
    },

    {
      name: "Phase 5 - Replay Story",
      route: "/replay-story"
    },

    {
      name: "Phase 6 - Replay Validation",
      route: "/replay-validation"
    },

    {
      name: "Phase 7 - Live Operations",
      route: "/live"
    },

    {
      name: "Phase 8 - Technical Isolation",
      route: "/technical-inspection"
    },

    {
      name: "Phase 9 - Reliability",
      route: "/reliability"
    },

    {
      name: "Phase 10 - Pilot Proof",
      route: "/pilot-proof"
    }

  ];

  const graphData = [

    {
      name: "Mon",
      escalations: 12,
      resolved: 20,
      teams: 14,
      health: 80
    },

    {
      name: "Tue",
      escalations: 18,
      resolved: 28,
      teams: 19,
      health: 85
    },

    {
      name: "Wed",
      escalations: 22,
      resolved: 35,
      teams: 25,
      health: 88
    },

    {
      name: "Thu",
      escalations: 28,
      resolved: 40,
      teams: 30,
      health: 90
    },

    {
      name: "Fri",
      escalations: 16,
      resolved: 48,
      teams: 34,
      health: 92
    }

  ];

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}

      <div className="w-80 bg-black text-white p-6 overflow-y-auto">

        <h1 className="text-4xl font-bold mb-10">
          UCCIS
        </h1>

        <div className="space-y-4">

          {phases.map((phase, index) => (

            <button
              key={index}
              onClick={() => navigate(phase.route)}
              className="
                w-full
                text-left
                p-5
                rounded-2xl
                bg-gray-900
                hover:bg-blue-600
                transition-all
              "
            >

              <h2 className="text-lg font-bold">
                {phase.name}
              </h2>

            </button>

          ))}

        </div>

      </div>

      {/* MAIN */}

      <div className="flex-1 p-8 overflow-y-auto">

        {/* TOP */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              Unified Governance Dashboard
            </h1>

            <p className="text-gray-600 mt-4">
              Operational governance visibility across all phases
            </p>

          </div>

          <div className="
            bg-green-100
            text-green-700
            px-6
            py-3
            rounded-2xl
            font-bold
          ">

            SYSTEM STABLE

          </div>

        </div>

        {/* CARDS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-10
        ">

          {/* CARD 1 */}

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="
              w-4
              h-4
              rounded-full
              bg-red-500
              mb-4
            " />

            <p className="text-gray-500">
              Active Escalations
            </p>

            <h2 className="text-5xl font-bold mt-3">
              28
            </h2>

          </div>

          {/* CARD 2 */}

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="
              w-4
              h-4
              rounded-full
              bg-green-500
              mb-4
            " />

            <p className="text-gray-500">
              Resolved Incidents
            </p>

            <h2 className="text-5xl font-bold mt-3">
              142
            </h2>

          </div>

          {/* CARD 3 */}

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="
              w-4
              h-4
              rounded-full
              bg-blue-500
              mb-4
            " />

            <p className="text-gray-500">
              Field Operations Overview
            </p>

            <h2 className="text-5xl font-bold mt-3">
              63
            </h2>

          </div>

          {/* CARD 4 */}

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="
              w-4
              h-4
              rounded-full
              bg-purple-500
              mb-4
            " />

            <p className="text-gray-500">
              Operational Health
            </p>

            <h2 className="text-5xl font-bold mt-3">
              92%
            </h2>

          </div>

        </div>

        {/* CHARTS */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
        ">

          {/* BAR CHART */}

          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-lg
          ">

            <h2 className="text-2xl font-bold mb-6">
              Active Escalations
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart data={graphData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="escalations"
                  fill="#dc2626"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* LINE CHART */}

          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-lg
          ">

            <h2 className="text-2xl font-bold mb-6">
              Resolved Incidents
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <LineChart data={graphData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#16a34a"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* FIELD TEAMS BAR CHART */}

          <div className="
            bg-white
            p-8
            rounded-2xl
            shadow-lg
          ">

            <h2 className="text-2xl font-bold mb-6">
              Field Teams
            </h2>

            <ResponsiveContainer
              width="100%"
              height={350}
            >

              <BarChart data={graphData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="teams"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}

          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-lg
          ">

            <h2 className="text-2xl font-bold mb-6">
              Operational Health
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={graphData}
                  dataKey="health"
                  nameKey="name"
                  outerRadius={100}
                  label
                >

                  {graphData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );

}