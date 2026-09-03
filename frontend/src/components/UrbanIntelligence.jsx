import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
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
          weather: { source: "weather_api", rainfall_mm: 140, storm_probability: 88, timestamp: 1778139637014 },
          flooding: { source: "flooding_feed", flood_risk: 95, water_level: "CRITICAL", timestamp: 1778139637014 },
          traffic: { source: "traffic_api", congestion_index: 82, accident_reports: 14, timestamp: 1778139637014 },
          complaints: { source: "civic_dataset", complaint_volume: 420, emergency_complaints: 120, timestamp: 1778139637014 },
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
          governance_response: { lifecycle_state: "ESCALATED", lifecycle_reason: "Critical urban condition" },
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
          confidence: { confidence_score: 90, confidence_reasoning: ["High multi-domain conflict severity"] },
        },
        history: [],
      },
      governance: { lifecycle_state: "ESCALATED", lifecycle_reason: "Critical urban condition" },
      enforcement: {
        enforcement_id: "ENF-1778139637016",
        action: "DEPLOY_RESPONSE_UNITS",
        governance_state: "ESCALATED",
        approved: false,
      },
      resolution: { resolution_status: "PENDING_GOVERNANCE", feedback_timestamp: 1778139637016 },
      bucket_snapshot: [],
      replay: [],
      ui_evolution: { ui_state: "HIGH", cluster_state: "STABLE_CLUSTER", anomaly_visibility: [] },
    },
  },
};

// Map configuration removed - using new SVG-based geographical map

const COLOR_HEX = { orange: "#ff9f3b", green: "#00ff9c", red: "#ff4d4d" };

function CityRiskMap({ centerLabel, centerLevel, riskPoints, pulse }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [mapType, setMapType] = useState("streets"); // streets or satellite

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        zIndex: 1000,
        background: "rgba(0, 20, 12, 0.95)",
        border: "1px solid rgba(0, 255, 156, 0.3)",
        borderRadius: "6px",
        padding: "8px 12px",
        display: "flex",
        gap: "8px",
      }}>
        <button
          onClick={() => setMapType("streets")}
          style={{
            padding: "6px 12px",
            background: mapType === "streets" ? "#00ff9c" : "transparent",
            color: mapType === "streets" ? "#00140c" : "#00ff9c",
            border: `1px solid ${mapType === "streets" ? "#00ff9c" : "rgba(0, 255, 156, 0.5)"}`,
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "700",
            transition: "all 0.2s ease"
          }}
        >
          Streets
        </button>
        <button
          onClick={() => setMapType("satellite")}
          style={{
            padding: "6px 12px",
            background: mapType === "satellite" ? "#00ff9c" : "transparent",
            color: mapType === "satellite" ? "#00140c" : "#00ff9c",
            border: `1px solid ${mapType === "satellite" ? "#00ff9c" : "rgba(0, 255, 156, 0.5)"}`,
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "700",
            transition: "all 0.2s ease"
          }}
        >
          Satellite
        </button>
      </div>

      <svg 
        viewBox="0 0 1200 700" 
        width="100%" 
        height="100%" 
        style={{ background: "#020403" }}
      >
        <defs>
          <pattern id="streets" patternUnits="userSpaceOnUse" width="60" height="60">
            <rect width="60" height="60" fill="#1a2333" />
            <line x1="0" y1="30" x2="60" y2="30" stroke="#2a3a4a" strokeWidth="0.5" />
            <line x1="30" y1="0" x2="30" y2="60" stroke="#2a3a4a" strokeWidth="0.5" />
          </pattern>
          <pattern id="satellite" patternUnits="userSpaceOnUse" width="40" height="40">
            <rect width="40" height="40" fill="#1a3a1a" />
            <circle cx="10" cy="10" r="2" fill="#2a4a2a" />
            <circle cx="30" cy="25" r="1.5" fill="#2a4a2a" />
            <circle cx="15" cy="35" r="1" fill="#2a4a2a" />
          </pattern>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Map Background */}
        <rect 
          width="1200" 
          height="700" 
          fill={mapType === "streets" ? "url(#streets)" : "url(#satellite)"} 
        />

        {/* Map Border */}
        <rect 
          width="1200" 
          height="700" 
          fill="none" 
          stroke="rgba(0, 255, 156, 0.2)" 
          strokeWidth="2" 
          rx="10"
        />

        {/* Zone Grid Background */}
        {mapType === "streets" && (
          <g opacity="0.1">
            {[...Array(13)].map((_, i) => (
              <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700" stroke="#00ff9c" strokeWidth="1" />
            ))}
            {[...Array(8)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#00ff9c" strokeWidth="1" />
            ))}
          </g>
        )}

        {/* Center Info Box */}
        <g>
          <rect x="20" y="20" width="280" height="60" rx="8" fill="#00140c" fillOpacity="0.9" stroke="#00ff9c" strokeOpacity="0.5" strokeWidth="1" />
          <text x="35" y="40" fontSize="13" fill="#7fffce" fontWeight="700">{centerLabel}</text>
          <text x="35" y="60" fontSize="14" fill="#00ff9c" fontWeight="800">LEVEL: {centerLevel}</text>
        </g>

        {/* Risk Points */}
        {riskPoints.map((point, i) => {
          const x = 150 + (i % 2) * 350 + Math.sin(i) * 100;
          const y = 150 + Math.floor(i / 2) * 250 + Math.cos(i) * 80;
          const color = COLOR_HEX[point.color] || "#00ff9c";
          const isHovered = hoveredPoint === i;
          const isSelected = selectedPoint === i;

          return (
            <g
              key={i}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              onClick={() => setSelectedPoint(isSelected ? null : i)}
              style={{ cursor: "pointer" }}
            >
              {/* Outer Glow */}
              {(isHovered || isSelected || (i === 0 && pulse)) && (
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered || isSelected ? "45" : "35"}
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  opacity="0.4"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <animate
                    attributeName="r"
                    values={isHovered ? "35;55;35" : "25;45;25"}
                    dur={isHovered ? "1.2s" : "2s"}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.1;0.6"
                    dur={isHovered ? "1.2s" : "2s"}
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Main Marker Circle */}
              <circle
                cx={x}
                cy={y}
                r={isHovered || isSelected ? "20" : "15"}
                fill={color}
                fillOpacity="0.9"
                stroke={isSelected ? "#ffff00" : "#ffffff"}
                strokeWidth={isSelected ? "3" : "2"}
                filter="url(#glow)"
                style={{ transition: "all 0.2s ease" }}
              />

              {/* Risk Level Badge */}
              <circle
                cx={x + 30}
                cy={y - 25}
                r="16"
                fill="#ff4d4d"
                fillOpacity="0.95"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <text
                x={x + 30}
                y={y - 20}
                textAnchor="middle"
                fontSize="12"
                fill="#ffffff"
                fontWeight="800"
              >
                {i === 0 ? "HIGH" : i === 2 ? "ALERT" : "MED"}
              </text>

              {/* Label */}
              <text
                x={x}
                y={y + 40}
                textAnchor="middle"
                fontSize={isHovered || isSelected ? "13" : "12"}
                fill={color}
                fontWeight="700"
                style={{ transition: "all 0.2s ease", pointerEvents: "none" }}
              >
                {point.label.split(" - ")[1] || point.label}
              </text>

              {/* Info Popup on Hover */}
              {(isHovered || isSelected) && (
                <g>
                  <rect
                    x={x - 70}
                    y={y - 70}
                    width="140"
                    height="50"
                    rx="6"
                    fill="#00140c"
                    fillOpacity="0.95"
                    stroke={color}
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y - 52}
                    textAnchor="middle"
                    fontSize="11"
                    fill={color}
                    fontWeight="700"
                  >
                    {point.label}
                  </text>
                  <text
                    x={x}
                    y={y - 35}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#7fffce"
                  >
                    Lat: {point.position[0].toFixed(3)}
                  </text>
                  <text
                    x={x}
                    y={y - 22}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#7fffce"
                  >
                    Lng: {point.position[1].toFixed(3)}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g>
          <rect x="1050" y="20" width="130" height="110" rx="6" fill="#00140c" fillOpacity="0.9" stroke="rgba(0, 255, 156, 0.3)" strokeWidth="1" />
          <text x="1065" y="40" fontSize="12" fill="#00ff9c" fontWeight="800">Legend</text>

          <circle cx="1070" cy="60" r="4" fill="#ff9f3b" />
          <text x="1085" y="64" fontSize="11" fill="#7fffce" fontWeight="600">Critical</text>

          <circle cx="1070" cy="80" r="4" fill="#00ff9c" />
          <text x="1085" y="84" fontSize="11" fill="#7fffce" fontWeight="600">Stable</text>

          <circle cx="1070" cy="100" r="4" fill="#ff4d4d" />
          <text x="1085" y="104" fontSize="11" fill="#7fffce" fontWeight="600">Alert</text>

          <circle cx="1070" cy="120" r="4" fill="#3ca4e8" />
          <text x="1085" y="124" fontSize="11" fill="#7fffce" fontWeight="600">Active</text>
        </g>
      </svg>
    </div>
  );
}

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

  // ---- NEW: Live Simulation Mode ------------------------------------------
  // Ticks new synthetic events into the stream and jitters risk scores every
  // few seconds, so the command center visibly "breathes" instead of sitting
  // static after a single Run Intelligence click.
  const [liveMode, setLiveMode] = useState(false);
  const [simTick, setSimTick] = useState(0);
  const liveIntervalRef = useRef(null);

  const applyIntelligenceData = useCallback((data) => {
    setIntelligence((prev) => ({
      ...prev,
      traceId: data?.convergence?.trace_continuity || `TRACE-${Date.now()}`,
      zoneId: data?.convergence?.flow?.intelligence?.current_state?.zone_id ?? prev.zoneId,
      dominantDomain: data?.convergence?.flow?.intelligence?.current_state?.dominant_domain || prev.dominantDomain,
      finalScore: data?.convergence?.flow?.intelligence?.current_state?.final_score || prev.finalScore,
      finalLevel: data?.convergence?.flow?.intelligence?.current_state?.final_level || prev.finalLevel,
      trend: data?.convergence?.flow?.intelligence?.current_state?.trend || prev.trend,
      behavior: data?.convergence?.flow?.intelligence?.current_state?.behavior || prev.behavior,
      reason: data?.convergence?.flow?.intelligence?.current_state?.reason || prev.reason,
      rainfall: data?.convergence?.flow?.real_signal?.raw_data?.weather?.rainfall_mm ?? prev.rainfall,
      stormProbability: data?.convergence?.flow?.real_signal?.raw_data?.weather?.storm_probability ?? prev.stormProbability,
      floodRisk: data?.convergence?.flow?.real_signal?.raw_data?.flooding?.flood_risk ?? prev.floodRisk,
      congestion: data?.convergence?.flow?.real_signal?.raw_data?.traffic?.congestion_index ?? prev.congestion,
      complaints: data?.convergence?.flow?.real_signal?.raw_data?.complaints?.emergency_complaints ?? prev.complaints,
    }));

    setIntelligenceOutput(data);
  }, []);

  const runIntelligence = async () => {
    setIsRunning(true);

    try {
      const response = await fetch("http://localhost:5000/api/intelligence/run");
      if (!response.ok) throw new Error(`Backend responded with ${response.status}`);
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

  const [liveSeries, setLiveSeries] = useState([30, 50, 70, 85, 95]);

  useEffect(() => {
    if (!liveMode) {
      if (liveIntervalRef.current) clearInterval(liveIntervalRef.current);
      return;
    }

    liveIntervalRef.current = setInterval(() => {
      setSimTick((t) => t + 1);

      setLiveSeries((prev) => {
        const last = prev[prev.length - 1];
        const jitter = Math.round((Math.random() - 0.35) * 12);
        const next = Math.max(10, Math.min(100, last + jitter));
        return [...prev.slice(-4), next];
      });

      setIntelligence((prev) => {
        const jitter = () => Math.round((Math.random() - 0.5) * 6);
        return {
          ...prev,
          congestion: Math.max(10, Math.min(100, prev.congestion + jitter())),
          floodRisk: Math.max(10, Math.min(100, prev.floodRisk + jitter())),
          complaints: Math.max(10, Math.min(150, prev.complaints + jitter())),
        };
      });
    }, 2500);

    return () => clearInterval(liveIntervalRef.current);
  }, [liveMode]);

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: undefined,
      layout: {
        padding: {
          left: 0,
          right: 20,
          top: 30,
          bottom: 10,
        },
      },
      plugins: {
        legend: { labels: { color: "#00f59b", font: { size: 13, weight: "600" } }, padding: 20 },
        tooltip: {
          backgroundColor: "#101010",
          titleColor: "#00ff9c",
          bodyColor: "#ffffff",
          borderColor: "#00ff9c",
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 14, weight: "800" },
          bodyFont: { size: 13 },
        },
      },
      scales: {
        x: { 
          title: {
            display: true,
            text: "Time Period",
            color: "#00ff9c",
            font: { size: 14, weight: "700" },
            padding: 15,
          },
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" }, padding: 8 }, 
          grid: { color: "rgba(255,255,255,0.02)", drawBorder: false },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Risk Score",
            color: "#00ff9c",
            font: { size: 14, weight: "700" },
            padding: 15,
          },
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" }, padding: 10 },
          grid: { color: "rgba(255,255,255,0.02)", drawBorder: false },
          position: "left",
        },
      },
    }),
    []
  );

  const barChartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 20,
          top: 30,
          bottom: 10,
        },
      },
      plugins: {
        legend: { labels: { color: "#00f59b", font: { size: 13, weight: "600" } }, padding: 20 },
        tooltip: {
          backgroundColor: "#101010",
          titleColor: "#00ff9c",
          bodyColor: "#ffffff",
          borderColor: "#00ff9c",
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 14, weight: "800" },
          bodyFont: { size: 13 },
        },
      },
      scales: {
        x: { 
          title: {
            display: true,
            text: "Domain Type",
            color: "#00ff9c",
            font: { size: 14, weight: "700" },
            padding: 15,
          },
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" }, padding: 8 }, 
          grid: { color: "rgba(255,255,255,0.02)", drawBorder: false },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Influence Score",
            color: "#00ff9c",
            font: { size: 14, weight: "700" },
            padding: 15,
          },
          ticks: { color: "#00d78b", font: { size: 13, weight: "600" }, padding: 10 },
          grid: { color: "rgba(255,255,255,0.02)", drawBorder: false },
        },
      },
    }),
    []
  );

  const lineData = {
    labels: ["T-4", "T-3", "T-2", "T-1", "Now"],
    datasets: [
      {
        label: liveMode ? "Zone 4 Risk (live)" : "Zone 4 Risk",
        data: liveSeries,
        borderColor: liveMode ? "#00ff9c" : "#3498db",
        backgroundColor: liveMode ? "rgba(0,255,156,0.25)" : "rgba(52, 152, 219, 0.45)",
        pointBackgroundColor: liveMode ? "#00ff9c" : "#3498db",
        pointBorderColor: liveMode ? "#00ff9c" : "#3498db",
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
        data: [intelligence.floodRisk, intelligence.congestion, 70, 45, intelligence.complaints],
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
    plugins: { legend: { labels: { color: "#666", font: { size: 16 } } } },
  };

  const riskPoints = [
    { position: [18.5204, 73.8567], color: "orange", label: "Zone 4 - Complaint escalation" },
    { position: [18.552, 73.86], color: "green", label: "Stable civic response" },
    { position: [18.565, 73.915], color: "red", label: "Critical flood signal" },
    { position: [18.525, 73.895], color: "orange", label: "Traffic congestion" },
  ];

  const currentState = intelligenceOutput?.convergence?.flow?.intelligence?.current_state || null;
  const governanceInfo = intelligenceOutput?.convergence?.flow?.governance || null;
  const enforcementInfo = intelligenceOutput?.convergence?.flow?.enforcement || null;
  const resolutionInfo = intelligenceOutput?.convergence?.flow?.resolution || null;
  const clusterInfo = currentState?.cluster_intelligence || null;
  const confidenceInfo = currentState?.confidence || null;

  return (
    <div className="uccis-page">
      <header className="uccis-header">
        <h1>UCCIS — Urban Intelligence Command Center</h1>
        <div className="header-actions">
          {/* <button
            type="button"
            className={`live-toggle ${liveMode ? "live-on" : ""}`}
            onClick={() => setLiveMode((v) => !v)}
          >
            {liveMode ? `● Live Sim (tick ${simTick})` : "Start Live Simulation"}
          </button> */}
          <button onClick={runIntelligence} disabled={isRunning}>
            {isRunning ? "Running..." : "Run Intelligence"}
          </button>
        </div>
      </header>

      <section className="panel map-panel">
        <h2>City Risk Map</h2>
        <div className="risk-map">
          <CityRiskMap
            centerLabel={`Trace: ${intelligence.traceId}`}
            centerLevel={intelligence.finalLevel}
            riskPoints={riskPoints}
            pulse={liveMode}
          />
        </div>
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
            <Bar data={barData} options={barChartOptions} />
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

      {intelligenceOutput && (
        <section className="panel output-panel">
          <div className="output-panel-header">
            <h2>Intelligence Output</h2>
            {/* <span className={`source-badge ${intelligenceSource === "live" ? "source-live" : "source-mock"}`}>
              {intelligenceSource === "live" ? "LIVE BACKEND" : "MOCK FALLBACK"}
            </span> */}
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
              <span className="output-value">{currentState?.dominant_domain || "—"}</span>
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
              <span className="output-value">{governanceInfo?.lifecycle_state || "—"}</span>
              <span className="output-sub">{governanceInfo?.lifecycle_reason || ""}</span>
            </div>
            <div className="output-card">
              <span className="output-label">Enforcement Action</span>
              <span className="output-value">{enforcementInfo?.action || "—"}</span>
              <span className="output-sub">{enforcementInfo?.approved ? "Approved" : "Awaiting approval"}</span>
            </div>
            <div className="output-card">
              <span className="output-label">Resolution</span>
              <span className="output-value">{resolutionInfo?.resolution_status || "—"}</span>
            </div>
            <div className="output-card">
              <span className="output-label">Cluster</span>
              <span className="output-value">
                {clusterInfo?.cluster_score ?? "—"} ({clusterInfo?.cluster_state || "—"})
              </span>
            </div>
            <div className="output-card">
              <span className="output-label">Confidence</span>
              <span className="output-value">{confidenceInfo?.confidence_score ?? "—"}%</span>
              <span className="output-sub">{(confidenceInfo?.confidence_reasoning || []).join(", ")}</span>
            </div>
          </div>

          {clusterInfo?.propagated_zones?.length > 0 && (
            <div className="propagated-zones">
              <h3>Propagated Zones</h3>
              <div className="events">
                {clusterInfo.propagated_zones.map((zone, index) => (
                  <div className="event-row" key={index}>
                    Zone {zone.influenced_zone} — risk {zone.propagated_risk} ({zone.propagation_reason})
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <style>{`
        * { box-sizing: border-box; }

        .uccis-page {
          min-height: 100vh;
          background: #020403;
          color: #00ff9c;
          padding-bottom: 18px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .uccis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 38px 22px;
          background: #020403;
          gap: 16px;
          flex-wrap: wrap;
        }

        .uccis-header h1 {
          margin: 0;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          color: #00ff9c;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .uccis-header button {
          border: none;
          background: #00ef94;
          color: #00140c;
          font-size: 18px;
          font-weight: 800;
          padding: 16px 26px;
          min-width: 180px;
          cursor: pointer;
          border-radius: 6px;
        }

        .uccis-header button:disabled {
          background: #0a7a54;
          color: #063325;
          cursor: not-allowed;
        }

        .live-toggle {
          background: transparent !important;
          color: #00ff9c !important;
          border: 2px solid #00ff9c !important;
        }

        .live-toggle.live-on {
          background: rgba(0, 255, 156, 0.15) !important;
          box-shadow: 0 0 18px rgba(0, 255, 156, 0.5);
        }

        .panel {
          background: #101010;
          border: 1px solid rgba(0, 255, 156, 0.5);
          box-shadow: 0 0 22px rgba(0, 255, 156, 0.45);
          border-radius: 12px;
        }

        .panel h2 {
          color: #00ff9c;
          font-size: 28px;
          margin: 0 0 22px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff4d4d;
          box-shadow: 0 0 10px #ff4d4d;
          animation: pulse-dot 1.2s infinite ease-in-out;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        .map-panel {
          margin: 0 20px 20px;
          padding: 32px 21px 22px;
        }

        .risk-map {
          width: 100%;
          height: 460px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 255, 156, 0.2);
        }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 0 20px 20px;
          padding: 0;
        }

        .chart-panel {
          height: auto;
          min-height: 480px;
          padding: 32px 32px 32px 60px;
          display: flex;
          flex-direction: column;
        }

        .chart-box { 
          height: 380px;
          width: 100%;
          position: relative;
        }

        .pie-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 0 20px 20px;
        }

        .pie-panel {
          height: 380px;
          padding: 32px 32px 20px;
          text-align: center;
        }

        .pie-panel h2 { font-size: 26px; margin-bottom: 18px; justify-content: center; }

        .pie-box { height: 250px; }

        .output-panel { margin: 0 20px 20px; padding: 34px 32px; }

        .output-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .output-panel-header h2 { margin: 0; }

        .source-badge {
          font-size: 13px;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .source-live { background: rgba(0, 255, 156, 0.18); color: #00ff9c; border: 1px solid #00ff9c; }
        .source-mock { background: rgba(255, 159, 59, 0.18); color: #ff9f3b; border: 1px solid #ff9f3b; }

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

        .output-label { font-size: 13px; color: #7fffce; text-transform: uppercase; letter-spacing: 0.5px; }
        .output-value { font-size: 20px; font-weight: 700; color: #00ff9c; }
        .output-sub { font-size: 13px; color: #6fd9ae; }

        .propagated-zones h3 { color: #00ff9c; font-size: 20px; margin: 0 0 12px; }

        @media (max-width: 900px) {
          .uccis-header { align-items: stretch; flex-direction: column; padding: 18px; }
          .uccis-header h1 { font-size: 30px; }
          .header-actions { flex-direction: column; }
          .uccis-header button { width: 100%; min-width: 0; }
          .chart-grid, .pie-grid { grid-template-columns: 1fr; margin: 0 12px 16px; }
          .map-panel, .output-panel { margin: 0 12px 16px; }
          .risk-map { height: 320px; }
          .chart-panel { padding: 24px 24px 24px 50px; min-height: 420px; }
          .pie-panel { height: auto; }
          .chart-box { height: 300px; }
          .pie-box { height: 280px; }
        }
      `}</style>
    </div>
  );
}