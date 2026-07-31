import React, { useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  CircleMarker,
} from "react-leaflet";
import {
  Line,
  Bar,
  Pie,
  Doughnut,
} from "react-chartjs-2";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

/*
=========================================================
MOCK INTELLIGENCE OUTPUT
=========================================================
Used as a fallback whenever the real backend
(http://localhost:5000/api/intelligence/run) is
unavailable or returns an error, so clicking
"Run Intelligence" always produces a full result to
inspect and demo against. Structure matches exactly
what the live endpoint is expected to return, so the
same parsing logic in runIntelligence() works for both.
=========================================================
*/
const MOCK_INTELLIGENCE_OUTPUT = {
  success: true,
  convergence: {
    tantra_convergence: true,
    trace_continuity: "TRACE-1778139637014",
    deterministic: true,
    governance_safe: true,
    replayable: true,
    reconstructable: true,
    anomaly_visible: true,
    flow: {
      real_signal: {
        pipeline_status: "SUCCESS",
        raw_data: {
          weather: {
            source: "weather_api",
            rainfall_mm: 140,
            storm_probability: 88,
            timestamp: 1778139637014,
          },
          flooding: {
            source: "flooding_feed",
            flood_risk: 95,
            water_level: "CRITICAL",
            timestamp: 1778139637014,
          },
          traffic: {
            source: "traffic_api",
            congestion_index: 82,
            accident_reports: 14,
            timestamp: 1778139637014,
          },
          complaints: {
            source: "civic_dataset",
            complaint_volume: 420,
            emergency_complaints: 120,
            timestamp: 1778139637014,
          },
        },
        tantra_signals: {
          traffic: { score: 82, level: "HIGH" },
          flooding: { score: 95, level: "HIGH" },
          complaints: { score: 120, level: "HIGH" },
          weather_signal: { rainfall_mm: 140, storm_probability: 88 },
        },
        ingested_at: 1778139637014,
      },
      intelligence: {
        current_state: {
          trace_id: "TRACE-1778139637014",
          zone_id: 4,
          dominant_domain: "complaints",
          final_score: 120,
          final_level: "HIGH",
          trend: "STABLE",
          behavior: "STABLE",
          reason: "complaints override activated",
          governance_request: {
            governance_id: "GOV-1778139637014",
            dominant_domain: "complaints",
            final_score: 120,
            final_level: "HIGH",
            requested_action: "EMERGENCY_RESPONSE",
            created_at: 1778139637014,
          },
          governance_response: {
            lifecycle_state: "ESCALATED",
            lifecycle_reason: "Critical urban condition",
          },
          retry_data: {},
          timestamp: 1778139637014,
          duration_in_state_ms: 0,
          influenced_domains: {
            traffic: { score: 102, level: "HIGH", influenced_by: "flooding" },
            flooding: { score: 95, level: "HIGH" },
            water_shortage: { score: 70, level: "MEDIUM" },
            waste_overload: { score: 40, level: "LOW" },
            complaints: { score: 120, level: "HIGH" },
          },
          anomalies: [],
          cluster_intelligence: {
            propagated_zones: [
              { influenced_zone: 2, propagated_risk: 20, propagation_reason: "Zone 4 influenced neighboring zone 2" },
              { influenced_zone: 3, propagated_risk: 20, propagation_reason: "Zone 4 influenced neighboring zone 3" },
              { influenced_zone: 5, propagated_risk: 20, propagation_reason: "Zone 4 influenced neighboring zone 5" },
              { influenced_zone: 6, propagated_risk: 20, propagation_reason: "Zone 4 influenced neighboring zone 6" },
            ],
            cluster_score: 40,
            cluster_state: "STABLE_CLUSTER",
          },
          confidence: {
            confidence_score: 90,
            confidence_reasoning: ["High multi-domain conflict severity"],
          },
        },
        history: [],
      },
      governance: {
        lifecycle_state: "ESCALATED",
        lifecycle_reason: "Critical urban condition",
      },
      enforcement: {
        enforcement_id: "ENF-1778139637016",
        action: "DEPLOY_RESPONSE_UNITS",
        governance_state: "ESCALATED",
        approved: false,
      },
      resolution: {
        resolution_status: "PENDING_GOVERNANCE",
        feedback_timestamp: 1778139637016,
      },
      bucket_snapshot: [],
      replay: [],
      ui_evolution: {
        ui_state: "HIGH",
        cluster_state: "STABLE_CLUSTER",
        anomaly_visibility: [],
      },
    },
  },
};

export default function UrbanIntelligence() {
  const [intelligence, setIntelligence] = useState({
    traceId: "TRACE-1778139637014",
    zoneId: 4,
    dominantDomain: "complaints",
    finalScore: 120,
    finalLevel: "HIGH",
    trend: "STABLE",
    behavior: "STABLE",
    reason: "complaints override activated",
    rainfall: 140,
    stormProbability: 88,
    floodRisk: 95,
    congestion: 82,
    complaints: 120,
  });

  const [intelligenceOutput, setIntelligenceOutput] = useState(null);
  const [intelligenceSource, setIntelligenceSource] = useState(null); // "live" | "mock"
  const [isRunning, setIsRunning] = useState(false);
  const [showRawJson, setShowRawJson] = useState(false);

  const applyIntelligenceData = (data) => {
    setIntelligence((prev) => ({
      ...prev,
      traceId:
        data?.convergence?.trace_continuity ||
        `TRACE-${Date.now()}`,
      zoneId:
        data?.convergence?.flow?.intelligence?.current_state?.zone_id ??
        prev.zoneId,
      dominantDomain:
        data?.convergence?.flow?.intelligence?.current_state?.dominant_domain ||
        prev.dominantDomain,
      finalScore:
        data?.convergence?.flow?.intelligence?.current_state?.final_score ||
        prev.finalScore,
      finalLevel:
        data?.convergence?.flow?.intelligence?.current_state?.final_level ||
        prev.finalLevel,
      trend:
        data?.convergence?.flow?.intelligence?.current_state?.trend ||
        prev.trend,
      behavior:
        data?.convergence?.flow?.intelligence?.current_state?.behavior ||
        prev.behavior,
      reason:
        data?.convergence?.flow?.intelligence?.current_state?.reason ||
        prev.reason,
      rainfall:
        data?.convergence?.flow?.real_signal?.raw_data?.weather?.rainfall_mm ??
        prev.rainfall,
      stormProbability:
        data?.convergence?.flow?.real_signal?.raw_data?.weather?.storm_probability ??
        prev.stormProbability,
      floodRisk:
        data?.convergence?.flow?.real_signal?.raw_data?.flooding?.flood_risk ??
        prev.floodRisk,
      congestion:
        data?.convergence?.flow?.real_signal?.raw_data?.traffic?.congestion_index ??
        prev.congestion,
      complaints:
        data?.convergence?.flow?.real_signal?.raw_data?.complaints?.emergency_complaints ??
        prev.complaints,
    }));

    setIntelligenceOutput(data);
  };

  const runIntelligence = async () => {
    setIsRunning(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/intelligence/run"
      );

      if (!response.ok) {
        throw new Error(`Backend responded with ${response.status}`);
      }

      const data = await response.json();

      applyIntelligenceData(data);
      setIntelligenceSource("live");
    } catch (err) {
      console.error("Live intelligence run failed, using mock output:", err);

      applyIntelligenceData(MOCK_INTELLIGENCE_OUTPUT);
      setIntelligenceSource("mock");
    } finally {
      setIsRunning(false);
    }
  };

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#00f59b",
            font: { size: 13 },
          },
        },
        tooltip: {
          backgroundColor: "#101010",
          titleColor: "#00ff9c",
          bodyColor: "#ffffff",
          borderColor: "#00ff9c",
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" } },
          grid: { color: "rgba(255,255,255,0.02)" },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" } },
          grid: { color: "rgba(255,255,255,0.02)" },
        },
      },
    }),
    []
  );

  const lineData = {
    labels: ["10:00", "10:05", "10:10", "10:15", "10:20"],
    datasets: [
      {
        label: "Zone 4 Risk",
        data: [30, 50, 70, 85, 95],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.45)",
        pointBackgroundColor: "#3498db",
        pointBorderColor: "#3498db",
        pointRadius: 5,
        borderWidth: 3,
        tension: 0.25,
      },
    ],
  };

  const barData = {
    labels: ["Flooding", "Traffic", "Water", "Waste", "Complaints"],
    datasets: [
      {
        label: "Domain Scores",
        data: [95, 82, 70, 45, 55],
        backgroundColor: "rgba(52, 152, 219, 0.65)",
        borderColor: "#2573a7",
        borderWidth: 2,
      },
    ],
  };

  const governanceData = {
    labels: ["APPROVED", "HOLD", "RETRY", "REJECTED"],
    datasets: [
      {
        data: [70, 10, 15, 5],
        backgroundColor: ["#3ca4e8", "#ff5a83", "#ff9f3b", "#ffcc58"],
        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  };

  const confidenceData = {
    labels: ["Confidence", "Uncertainty"],
    datasets: [
      {
        data: [88, 12],
        backgroundColor: ["#3ca4e8", "#ff5a83"],
        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#666",
          font: { size: 16 },
        },
      },
    },
  };

  const [eventStream, setEventStream] = useState([
    "[10:00] Flood escalation detected",
    "[10:01] Governance approved",
    "[10:02] Enforcement activated",
    "[10:03] Cluster propagation executed",
    "[10:04] Snapshot persisted",
    "[10:05] Replay reconstruction completed",
  ]);

  const puneCenter = [18.5204, 73.8567];

  const riskPoints = [
    { position: [18.5204, 73.8567], color: "orange", label: "Zone 4 - Complaint escalation" },
    { position: [18.552, 73.86], color: "green", label: "Stable civic response" },
    { position: [18.565, 73.915], color: "red", label: "Critical flood signal" },
    { position: [18.525, 73.895], color: "orange", label: "Traffic congestion" },
  ];

  /* =====================================================
     DERIVED VALUES FOR THE INTELLIGENCE OUTPUT PANEL
     Pulled straight out of intelligenceOutput so the panel
     always reflects whatever the last run produced (live
     or mock), rather than duplicating the parsing logic.
  ===================================================== */

  const currentState =
    intelligenceOutput?.convergence?.flow?.intelligence?.current_state || null;
  const governanceInfo = intelligenceOutput?.convergence?.flow?.governance || null;
  const enforcementInfo = intelligenceOutput?.convergence?.flow?.enforcement || null;
  const resolutionInfo = intelligenceOutput?.convergence?.flow?.resolution || null;
  const clusterInfo = currentState?.cluster_intelligence || null;
  const confidenceInfo = currentState?.confidence || null;

  return (
    <div className="uccis-page">
      <header className="uccis-header">
        <h1>UCCIS — Urban Intelligence Command Center</h1>
        <button onClick={runIntelligence} disabled={isRunning}>
          {isRunning ? "Running..." : "Run Intelligence"}
        </button>
      </header>

      <section className="panel map-panel">
        <h2>Live City Risk Map</h2>

        <MapContainer
          center={puneCenter}
          zoom={11}
          scrollWheelZoom
          className="risk-map"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={puneCenter} icon={markerIcon}>
            <Popup>
              Trace: {intelligence.traceId}
              <br />
              Final Level: {intelligence.finalLevel}
            </Popup>
          </Marker>

          {riskPoints.map((point, index) => (
            <CircleMarker
              key={index}
              center={point.position}
              radius={16}
              pathOptions={{
                color: point.color,
                fillColor: point.color,
                fillOpacity: 0.72,
                weight: 3,
              }}
            >
              <Popup>{point.label}</Popup>
            </CircleMarker>
          ))}

          <Polyline
            positions={[
              [18.5204, 73.8567],
              [18.565, 73.915],
            ]}
            pathOptions={{ color: "red", weight: 5 }}
          />
        </MapContainer>
      </section>

      <section className="chart-grid">
        <div className="panel chart-panel">
          <h2>Temporal Risk Timeline</h2>
          <div className="chart-box">
            <Line data={lineData} options={chartOptions} />
          </div>
        </div>

        <div className="panel chart-panel">
          <h2>Domain Influence Chart</h2>
          <div className="chart-box">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
      </section>

      <section className="pie-grid">
        <div className="panel pie-panel">
          <h2>Governance Lifecycle</h2>
          <div className="pie-box">
            <Pie data={governanceData} options={pieOptions} />
          </div>
        </div>

        <div className="panel pie-panel">
          <h2>Confidence Engine</h2>
          <div className="pie-box">
            <Doughnut data={confidenceData} options={pieOptions} />
          </div>
        </div>
      </section>

      <section className="panel event-panel">
        <h2>Live Event Stream</h2>
        <div className="events">
          {eventStream.map((event, index) => (
            <div className="event-row" key={index}>
              {event}
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          INTELLIGENCE OUTPUT PANEL
          Renders the result of the last "Run Intelligence"
          click (live backend response, or the mock fallback
          if the backend was unreachable).
      ================================================= */}

      {intelligenceOutput && (
        <section className="panel output-panel">
          <div className="output-panel-header">
            <h2>Intelligence Output</h2>

            <span
              className={`source-badge ${
                intelligenceSource === "live" ? "source-live" : "source-mock"
              }`}
            >
              {intelligenceSource === "live" ? "LIVE BACKEND" : "MOCK FALLBACK"}
            </span>
          </div>

          <div className="output-grid">
            <div className="output-card">
              <span className="output-label">Trace ID</span>
              <span className="output-value">{currentState?.trace_id || "—"}</span>
            </div>

            <div className="output-card">
              <span className="output-label">Zone</span>
              <span className="output-value">{currentState?.zone_id ?? "—"}</span>
            </div>

            <div className="output-card">
              <span className="output-label">Dominant Domain</span>
              <span className="output-value">
                {currentState?.dominant_domain || "—"}
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Final Score / Level</span>
              <span className="output-value">
                {currentState?.final_score ?? "—"} / {currentState?.final_level || "—"}
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Reason</span>
              <span className="output-value">{currentState?.reason || "—"}</span>
            </div>

            <div className="output-card">
              <span className="output-label">Governance</span>
              <span className="output-value">
                {governanceInfo?.lifecycle_state || "—"}
              </span>
              <span className="output-sub">
                {governanceInfo?.lifecycle_reason || ""}
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Enforcement Action</span>
              <span className="output-value">{enforcementInfo?.action || "—"}</span>
              <span className="output-sub">
                {enforcementInfo?.approved ? "Approved" : "Awaiting approval"}
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Resolution</span>
              <span className="output-value">
                {resolutionInfo?.resolution_status || "—"}
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Cluster</span>
              <span className="output-value">
                {clusterInfo?.cluster_score ?? "—"} ({clusterInfo?.cluster_state || "—"})
              </span>
            </div>

            <div className="output-card">
              <span className="output-label">Confidence</span>
              <span className="output-value">
                {confidenceInfo?.confidence_score ?? "—"}%
              </span>
              <span className="output-sub">
                {(confidenceInfo?.confidence_reasoning || []).join(", ")}
              </span>
            </div>
          </div>

          {clusterInfo?.propagated_zones?.length > 0 && (
            <div className="propagated-zones">
              <h3>Propagated Zones</h3>
              <div className="events">
                {clusterInfo.propagated_zones.map((zone, index) => (
                  <div className="event-row" key={index}>
                    Zone {zone.influenced_zone} — risk {zone.propagated_risk} (
                    {zone.propagation_reason})
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            className="raw-json-toggle"
            onClick={() => setShowRawJson((prev) => !prev)}
          >
            {showRawJson ? "Hide raw JSON" : "Show raw JSON"}
          </button>

          {showRawJson && (
            <pre className="raw-json">
              {JSON.stringify(intelligenceOutput, null, 2)}
            </pre>
          )}
        </section>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #020403;
          font-family: Arial, Helvetica, sans-serif;
        }

        .uccis-page {
          min-height: 100vh;
          background: #020403;
          color: #00ff9c;
          padding-bottom: 18px;
        }

        .uccis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0 38px 22px;
          background: #020403;
        }

        .uccis-header h1 {
          margin: 0;
          font-size: 46px;
          line-height: 1.2;
          font-weight: 800;
          color: #00ff9c;
        }

        .uccis-header button {
          border: none;
          background: #00ef94;
          color: #00140c;
          font-size: 20px;
          font-weight: 800;
          padding: 20px 32px;
          min-width: 214px;
          cursor: pointer;
        }

        .uccis-header button:disabled {
          background: #0a7a54;
          color: #063325;
          cursor: not-allowed;
        }

        .panel {
          background: #101010;
          border: 1px solid rgba(0, 255, 156, 0.5);
          box-shadow: 0 0 22px rgba(0, 255, 156, 0.45);
          border-radius: 12px;
        }

        .panel h2 {
          color: #00ff9c;
          font-size: 30px;
          margin: 0 0 22px;
          font-weight: 800;
        }

        .map-panel {
          margin: 0 20px 0;
          padding: 43px 21px 22px;
        }

        .risk-map {
          width: 100%;
          height: 528px;
          border-radius: 10px;
          overflow: hidden;
        }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 0 0 12px;
        }

        .chart-panel {
          height: 485px;
          padding: 43px 42px 22px;
        }

        .chart-box {
          height: 370px;
        }

        .pie-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          margin: 10px 0 16px;
        }

        .pie-panel {
          height: 424px;
          padding: 50px 42px 20px;
          text-align: center;
        }

        .pie-panel h2 {
          font-size: 34px;
          margin-bottom: 22px;
        }

        .pie-box {
          height: 285px;
        }

        .output-panel {
          margin: 0 20px 20px;
          padding: 34px 32px;
        }

        .output-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .output-panel-header h2 {
          margin: 0;
        }

        .source-badge {
          font-size: 13px;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .source-live {
          background: rgba(0, 255, 156, 0.18);
          color: #00ff9c;
          border: 1px solid #00ff9c;
        }

        .source-mock {
          background: rgba(255, 159, 59, 0.18);
          color: #ff9f3b;
          border: 1px solid #ff9f3b;
        }

        .output-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 22px;
        }

        .output-card {
          background: #181818;
          border: 1px solid rgba(0, 255, 156, 0.25);
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .output-label {
          font-size: 13px;
          color: #7fffce;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .output-value {
          font-size: 20px;
          font-weight: 700;
          color: #00ff9c;
        }

        .output-sub {
          font-size: 13px;
          color: #6fd9ae;
        }

        .propagated-zones h3 {
          color: #00ff9c;
          font-size: 20px;
          margin: 0 0 12px;
        }

        .raw-json-toggle {
          margin-top: 18px;
          border: 1px solid #00ff9c;
          background: transparent;
          color: #00ff9c;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .raw-json {
          margin-top: 16px;
          background: #060606;
          border: 1px solid rgba(0, 255, 156, 0.3);
          border-radius: 8px;
          padding: 16px;
          max-height: 420px;
          overflow: auto;
          font-size: 13px;
          line-height: 1.5;
          color: #9ef5cf;
        }

        .event-panel {
          margin: 0 0 0;
          padding: 44px 26px 26px;
          border-radius: 8px;
        }

        .events {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .event-row {
          background: #232323;
          color: #00ff9c;
          border-left: 5px solid #00ff9c;
          min-height: 44px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          font-size: 19px;
          font-weight: 500;
        }

        .leaflet-container {
          font-family: Arial, Helvetica, sans-serif;
        }

        @media (max-width: 900px) {
          .uccis-header {
            align-items: stretch;
            gap: 16px;
            flex-direction: column;
            padding: 18px;
          }

          .uccis-header h1 {
            font-size: 34px;
          }

          .uccis-header button {
            width: 100%;
          }

          .chart-grid,
          .pie-grid {
            grid-template-columns: 1fr;
          }

          .risk-map {
            height: 380px;
          }

          .chart-panel,
          .pie-panel {
            height: auto;
          }

          .chart-box,
          .pie-box {
            height: 320px;
          }

          .output-panel {
            margin: 0 12px 16px;
            padding: 24px 18px;
          }
        }
      `}</style>
    </div>
  );
}