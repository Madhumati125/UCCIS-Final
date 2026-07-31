import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatusCards from "../components/StatusCards";
import ReplayCharts from "../components/ReplayCharts";
import ReplayGraphs from "../components/ReplayGraphs";
import ReplayPieChart from "../components/ReplayPieChart";
import ReplayTimeline from "../components/ReplayTimeline";
import GovernancePanel from "../components/GovernancePanel";
import BackendResponsePanel from "../components/BackendResponsePanel";

export default function UnifiedDashboard() {

  const { phaseName } = useParams();

  const phase = phaseName || "final";

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    loadPhase();

  }, [phase]);

  const loadPhase = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/${phase}`
      );

      setData(res.data);

    } catch (err) {

      console.log(err);

      setData({
        success: false,
        message: "Backend response unavailable"
      });

    } finally {

      setLoading(false);

    }

  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial"
      }}
    >

      <Sidebar phase={phase} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto"
        }}
      >

        <Topbar phase={phase} />

        <StatusCards phase={phase} />

        <ReplayCharts phase={phase} />

        <ReplayGraphs phase={phase} />

        <ReplayPieChart phase={phase} />

        <ReplayTimeline phase={phase} />

        <GovernancePanel />

        <BackendResponsePanel
          data={data}
          loading={loading}
          phase={phase}
        />

      </div>

    </div>
  );
}