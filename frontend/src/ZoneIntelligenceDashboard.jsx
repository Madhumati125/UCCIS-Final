import React, { useEffect, useState, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
} from "recharts";
import { getZones } from "./api";

// Decision bands drive both the pie chart colors and the card badges
const DECISION_COLORS = {
  LOW: "#16a34a",
  MEDIUM: "#f59e0b",
  HIGH_PRIORITY: "#dc2626",
};

// Risk score thresholds used whenever the API's decision label can't be
// confidently matched — keeps classification correct and consistent.
const classifyByRiskScore = (riskScore) => {
  const score = Number(riskScore);
  if (Number.isNaN(score)) return "LOW";
  if (score > 100) return "HIGH_PRIORITY";
  if (score >= 50) return "MEDIUM";
  return "LOW";
};

// Normalizes whatever the API sends (e.g. "high", "High", "HIGH",
// "high_priority", "low risk") into one of our three standard buckets.
// Falls back to risk-score-based classification if the label doesn't
// clearly match, so LOW/MEDIUM/HIGH are never miscategorized.
const normalizeDecision = (rawDecision, riskScore) => {
  if (rawDecision) {
    const value = String(rawDecision).trim().toUpperCase();
    if (value.includes("HIGH")) return "HIGH_PRIORITY";
    if (value.includes("MED")) return "MEDIUM";
    if (value.includes("LOW")) return "LOW";
  }
  return classifyByRiskScore(riskScore);
};

// Fallback / demo data — used until the API returns real zones,
// or if the API call fails, so the dashboard is never empty.
const MOCK_ZONES = [
  { zone_id: "zone_1", risk_score: 75, decision: "MEDIUM" },
  { zone_id: "zone_2", risk_score: 40.3, decision: "LOW" },
  { zone_id: "zone_3", risk_score: 113, decision: "HIGH_PRIORITY" },
  { zone_id: "zone_4", risk_score: 58.2, decision: "MEDIUM" },
  { zone_id: "zone_5", risk_score: 21.7, decision: "LOW" },
  { zone_id: "zone_6", risk_score: 98.5, decision: "HIGH_PRIORITY" },
  { zone_id: "zone_7", risk_score: 33.1, decision: "LOW" },
  { zone_id: "zone_8", risk_score: 67.4, decision: "MEDIUM" },
  { zone_id: "zone_9", risk_score: 120, decision: "HIGH_PRIORITY" },
  { zone_id: "zone_10", risk_score: 45.9, decision: "LOW" },
];

const ZoneIntelligenceDashboard = () => {
  const [zones, setZones] = useState(MOCK_ZONES);
  const [fetchError, setFetchError] = useState(null);

  // ==========================================
  // FETCH ZONES
  // ==========================================

  const fetchZones = async () => {
    try {
      const res = await getZones();

      if (res.data.status === "success" && (res.data.response || []).length > 0) {
        setZones(res.data.response);
        setFetchError(null);
      }
    } catch (err) {
      console.error(err);
      setFetchError("Unable to load live zone data — showing demo data");
    }
  };

  // ==========================================
  // LOAD DATA
  // ==========================================

  useEffect(() => {
    fetchZones();

    const interval = setInterval(fetchZones, 5000);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // DERIVED CHART DATA
  // ==========================================

  // Risk score per zone, for the bar chart comparison
  const riskScoreData = useMemo(
    () =>
      zones.map((zone) => ({
        name: zone.zone_id,
        riskScore: zone.risk_score,
        decision: normalizeDecision(zone.decision, zone.risk_score),
      })),
    [zones]
  );

  // Count of zones per decision band, for the pie chart breakdown
  const decisionBreakdown = useMemo(() => {
    const counts = { LOW: 0, MEDIUM: 0, HIGH_PRIORITY: 0 };
    zones.forEach((zone) => {
      const decision = normalizeDecision(zone.decision, zone.risk_score);
      counts[decision] = (counts[decision] || 0) + 1;
    });
    // Drop any band with zero zones so the legend doesn't show empty slices,
    // but keep LOW/MEDIUM/HIGH_PRIORITY whenever at least one zone has them.
    return Object.entries(counts)
      .filter(([, count]) => count > 0)
      .map(([decision, count]) => ({
        name: decision,
        value: count,
      }));
  }, [zones]);

  // ==========================================
  // UI
  // ==========================================

  return (
    <div style={{ padding: 20, fontFamily: "Arial", background: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 20 }}>🚦 Zone Intelligence Dashboard</h1>

      {fetchError && (
        <p style={{ color: "#dc2626", fontWeight: 600 }}>{fetchError}</p>
      )}

      {zones.length === 0 ? (
        <h3>No Zone Data Found</h3>
      ) : (
        <>
          {/* ============ CHARTS ============ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 16,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <h3 
              style={{
                marginTop: 0,
                marginBottom: 16,
                color: "#000000",
                fontWeight: "bold",
                }}
                >
                Risk Score by Zone
                </h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={riskScoreData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                  dataKey="name"
                  tick={{
                    fill: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                    }} 
                      stroke="#000000"
                    >
                    <Label
                    value="Zone ID"
                    position="insideBottom"
                    offset={-5}
                    fill="#000000"
                    style={{ fontWeight: "bold", fontSize: 14 }}
                    />
                    </XAxis>
                  <YAxis
                  tick={{
                    fill: "#000000",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                  stroke="#000000"
                  >
                  <Label
                  value="Risk Score"
                  angle={-90}
                  position="insideLeft"
                  fill="#000000"
                  style={{
                    textAnchor: "middle",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                  />
                  </YAxis>
                  <Tooltip />
                  <Bar dataKey="riskScore" radius={[4, 4, 0, 0]}>
                    {riskScoreData.map((entry, index) => (
                      <Cell
                        key={`bar-${index}`}
                        fill={DECISION_COLORS[entry.decision] || "#94a3b8"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 16,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginTop: 0,
              marginBottom: 16,
              color: "#000000",
              fontWeight: "bold" }}>Decision Breakdown</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={decisionBreakdown}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                  >
                    {decisionBreakdown.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={DECISION_COLORS[entry.name] || "#94a3b8"}
                      />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ============ ZONE CARDS ============ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {zones.map((zone) => {
  const normalized = normalizeDecision(zone.decision, zone.risk_score);
  const color = DECISION_COLORS[normalized];

  return (
    <div
      key={zone.zone_id}
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 18,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderLeft: `5px solid ${color}`,
      }}
    >
      {/* Zone Name */}
      <h3
        style={{
          margin: "0 0 12px 0",
          color: "#000",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {zone.zone_id}
      </h3>

      {/* Risk Score */}
<p
  style={{
    margin: "6px 0",
    fontSize: "18px",
    color: "#000000",
  }}
>
  <strong style={{ color: "#000000" }}>
    Risk Score:
  </strong>{" "}
  <span
    style={{
      color: "#000000",
      fontWeight: "bold",
    }}
  >
    {zone.risk_score}
  </span>
</p>

{/* Decision */}
<p
  style={{
    margin: "6px 0",
    fontSize: "18px",
    color: "#000000",
  }}
>
  <strong style={{ color: "#000000" }}>
    Decision:
  </strong>{" "}
  <span
    style={{
      color: "#000000",
      fontWeight: "bold",
    }}
  >
    {normalized.replace("_", " ")}
  </span>
</p>
    </div>
  );
})}
          </div>
        </>
      )}
    </div>
  );
};

export default ZoneIntelligenceDashboard;