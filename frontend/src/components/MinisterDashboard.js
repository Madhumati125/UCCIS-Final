import React,
{
  useState
} from "react";

import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

import StatCard from "../components/Cards/StatCard";

import EscalationChart from "../components/Charts/EscalationChart";
import DomainPieChart from "../components/Charts/DomainPieChart";

import ZoneHeatmap from "../components/Map/ZoneHeatmap";

import IntelligenceTable from "../components/Tables/IntelligenceTable";
import GovernanceTable from "../components/Tables/GovernanceTable";

import ReplayControls from "../components/Replay/ReplayControls";

import API from "../services/api";

function MinisterDashboard() {

  /*
    STATES
  */

  const [simulation,
    setSimulation] =
    useState(null);

  const [loading,
    setLoading] =
    useState(false);

  const [lastUpdated,
    setLastUpdated] =
    useState("");

  const [phaseData,
    setPhaseData] =
    useState(null);

  const [selectedPhase,
    setSelectedPhase] =
    useState("");

  /*
    RUN MINISTERIAL SIMULATION
  */

  const runSimulation =
    async () => {

    try {

      setLoading(true);

      const response =
        await API.get(
          "/run-simulation"
        );

      console.log(
        response.data
      );

      setSimulation(
        response.data.data
      );

      setPhaseData(
        response.data
      );

      setSelectedPhase(
        "PHASE 10 — Simulation"
      );

      setLastUpdated(
        new Date()
        .toLocaleTimeString()
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  /*
    REFRESH DASHBOARD
  */

  const refreshDashboard =
    async () => {

    try {

      setLoading(true);

      const response =
        await API.get(
          "/run-simulation"
        );

      console.log(
        "Dashboard Refreshed",
        response.data
      );

      setSimulation(
        response.data.data
      );

      setPhaseData(
        response.data
      );

      setSelectedPhase(
        "Dashboard Refresh"
      );

      setLastUpdated(
        new Date()
        .toLocaleTimeString()
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  /*
    LOAD PHASE API
  */

  const loadPhase =
    async (phaseId) => {

    try {

      setLoading(true);

      let endpoint = "";

      /*
        MAP PHASE TO API
      */

      switch (phaseId) {

        case 1:
          endpoint =
            "/ingestion";
          break;

        case 2:
          endpoint =
            "/intelligence";
          break;

        case 3:
          endpoint =
            "/intelligence";
          break;

        case 4:
          endpoint =
            "/governance";
          break;

        case 5:
          endpoint =
            "/lifecycle";
          break;

        case 6:
          endpoint =
            "/dashboard";
          break;

        case 7:
          endpoint =
            "/replay";
          break;

        case 8:
          endpoint =
            "/failure";
          break;

        case 9:
          endpoint =
            "/tantra-flow";
          break;

        case 10:
          endpoint =
            "/run-simulation";
          break;

        default:
          endpoint =
            "/run-simulation";
      }

      const response =
        await API.get(
          endpoint
        );

      console.log(
        response.data
      );

      setPhaseData(
        response.data
      );

      setSelectedPhase(
        `PHASE ${phaseId}`
      );

      setLastUpdated(
        new Date()
        .toLocaleTimeString()
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  return (

    <div className="dashboard">

      <Sidebar

        refreshDashboard={
          refreshDashboard
        }

        loadPhase={
          loadPhase
        }

      />

      <div className="main-content">

        <Header
          runSimulation={
            runSimulation
          }
        />

        {
          loading && (

            <div className="loading-box">

              Running Ministerial Simulation...

            </div>
          )
        }

        {
          lastUpdated && (

            <div className="loading-box">

              Last Updated:
              {" "}
              {lastUpdated}

            </div>
          )
        }

        <div className="stats-grid">

          <StatCard
            title="Active Zones"
            value="6"
            subtitle="Live Monitoring"
          />

          <StatCard
            title="Escalations"
            value={
              simulation
              ? "1"
              : "0"
            }
            subtitle="Critical Visibility"
          />

          <StatCard
            title="Governance"
            value={
              simulation
              ? "APPROVED"
              : "PENDING"
            }
            subtitle="Execution State"
          />

          <StatCard
            title="Replay Snapshots"
            value={
              simulation
              ? "ACTIVE"
              : "0"
            }
            subtitle="Replay Enabled"
          />

        </div>

        {
          phaseData && (

            <div className="phase-output-box">

              <h2>

                {
                  selectedPhase
                }

                {" "}
                API Result

              </h2>

              <pre>

                {
                  JSON.stringify(
                    phaseData,
                    null,
                    2
                  )
                }

              </pre>

            </div>
          )
        }

        <div className="grid-two">

          <ZoneHeatmap />

          <EscalationChart />

        </div>

        <div className="grid-two">

          <IntelligenceTable />

          <DomainPieChart />

        </div>

        <div className="grid-two">

          <GovernanceTable />

          <ReplayControls />

        </div>

        {
          simulation && (

            <div className="execution-box">

              <h2>
                Ministerial Execution Result
              </h2>

              <div className="execution-grid">

                <div className="execution-card">

                  <h3>
                    Signal Ingestion
                  </h3>

                  <p>
                    COMPLETED
                  </p>

                </div>

                <div className="execution-card">

                  <h3>
                    Intelligence
                  </h3>

                  <p>
                    GENERATED
                  </p>

                </div>

                <div className="execution-card">

                  <h3>
                    Governance
                  </h3>

                  <p>
                    APPROVED
                  </p>

                </div>

                <div className="execution-card">

                  <h3>
                    Enforcement
                  </h3>

                  <p>
                    DEPLOYED
                  </p>

                </div>

                <div className="execution-card">

                  <h3>
                    Replay Engine
                  </h3>

                  <p>
                    ACTIVE
                  </p>

                </div>

                <div className="execution-card">

                  <h3>
                    Audit History
                  </h3>

                  <p>
                    GENERATED
                  </p>

                </div>

              </div>

              <div className="timeline-box">

                <h2>
                  Execution Timeline
                </h2>

                <div className="timeline-step">
                  Signal Received
                </div>

                <div className="timeline-step">
                  Intelligence Processed
                </div>

                <div className="timeline-step">
                  Governance Approved
                </div>

                <div className="timeline-step">
                  Enforcement Triggered
                </div>

                <div className="timeline-step">
                  Replay Snapshot Stored
                </div>

                <div className="timeline-step">
                  Dashboard Updated
                </div>

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default MinisterDashboard;