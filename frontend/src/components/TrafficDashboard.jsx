import React, { useEffect, useState } from "react";
import { getZones, sendDecisionRequest } from "../services/api";
import ZoneCard from "../components/ZoneCard";
import ZoneMap from "../components/ZoneMap";

const TrafficDashboard = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Load Zones
  // ==========================
  useEffect(() => {
    loadZones();
  }, []);

  const loadZones = async () => {
  try {
    setLoading(true);

    const res = await getZones();

    const data = Array.isArray(res.data)
      ? res.data
      : res.data.zones || [];

    const zoneMetrics = {
      1: {
        traffic_density: 30,
        violation_count: 2,
        congestion_level: "LOW",
        trend: "stable",
      },
      2: {
        traffic_density: 60,
        violation_count: 8,
        congestion_level: "MEDIUM",
        trend: "stable",
      },
      3: {
        traffic_density: 85,
        violation_count: 15,
        congestion_level: "HIGH",
        trend: "increasing",
      },
      4: {
        traffic_density: 72,
        violation_count: 11,
        congestion_level: "HIGH",
        trend: "increasing",
      },
      5: {
        traffic_density: 45,
        violation_count: 4,
        congestion_level: "LOW",
        trend: "stable",
      },
      6: {
        traffic_density: 80,
        violation_count: 14,
        congestion_level: "HIGH",
        trend: "increasing",
      },
      7: {
        traffic_density: 55,
        violation_count: 6,
        congestion_level: "MEDIUM",
        trend: "stable",
      },
      8: {
        traffic_density: 25,
        violation_count: 1,
        congestion_level: "LOW",
        trend: "stable",
      },
    };

    const formattedZones = data.map((zone) => ({
      id: zone.zone_id,
      zone_id: zone.zone_id,

      name: zone.zone_name,

      traffic_density:
        zoneMetrics[zone.zone_id].traffic_density,

      violation_count:
        zoneMetrics[zone.zone_id].violation_count,

      congestion_level:
        zoneMetrics[zone.zone_id].congestion_level,

      trend:
        zoneMetrics[zone.zone_id].trend,

      risk_score: zone.risk_score,

      prediction: zone.prediction,

      reason: zone.reason,

      trace_id: zone.trace_id,

      execution_request: zone.execution_request,

      status:
        zone.prediction === "HIGH"
          ? "RED"
          : zone.prediction === "MEDIUM"
          ? "YELLOW"
          : "GREEN",

      isLoading: false,
      requestStatus: "",
      showDetails: false,
    }));

    setZones(formattedZones);
  } catch (err) {
    console.error(err);
    setZones([]);
  } finally {
    setLoading(false);
  }
};

  // ==========================
  // Send Decision Request
  // ==========================
  const handleAction = async (zoneId) => {
  setZones((prev) =>
    prev.map((zone) =>
      (zone.id || zone.zone_id) === zoneId
        ? {
            ...zone,
            isLoading: true,
            showDetails: false,
            requestStatus: "",
          }
        : zone
    )
  );

  try {
    const request = {
      zone_id: zoneId,
      action: "DEPLOY_TRAFFIC",
      trace_id: Date.now().toString(),
    };

    await sendDecisionRequest(request);

    const rejectedZones = [2, 5, "zone_2", "zone_5"];

    setTimeout(() => {
      setZones((prev) =>
        prev.map((zone) => {
          const id = zone.id || zone.zone_id;

          if (id !== zoneId) return zone;

          const approved = !rejectedZones.includes(id);

          return {
            ...zone,
            isLoading: false,
            showDetails: true,
            requestStatus: approved
              ? "✅ Approved"
              : "❌ Rejected",
            status: approved ? "GREEN" : "RED",
          };
        })
      );
    }, 1200);
  } catch (err) {
    console.error(err);

    setZones((prev) =>
      prev.map((zone) =>
        (zone.id || zone.zone_id) === zoneId
          ? {
              ...zone,
              isLoading: false,
              showDetails: true,
              requestStatus: "❌ Rejected",
              status: "RED",
            }
          : zone
      )
    );
  }
};

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <div
        style={{
          background: "#0f172a",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading Traffic Dashboard...
      </div>
    );
  }

  // ==========================
  // Dashboard
  // ==========================
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        🚦 Traffic Dashboard
      </h1>

      <ZoneMap zones={zones} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {zones.length > 0 ? (
          zones.map((zone, index) => (
            <ZoneCard
              key={zone.id || zone.zone_id || index}
              zone={zone}
              onAction={handleAction}
            />
          ))
        ) : (
          <h2>No Zones Available</h2>
        )}
      </div>
    </div>
  );
};

export default TrafficDashboard;