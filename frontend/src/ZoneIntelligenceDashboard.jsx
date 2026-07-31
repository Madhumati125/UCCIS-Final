import React, { useEffect, useState } from "react";
import { getZones, triggerExecution } from "./api";
import ZoneCard from "./ZoneCard";

const ZoneIntelligenceDashboard = () => {
  const [zones, setZones] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // FETCH ZONES
  // ==========================================

  const fetchZones = async () => {
    try {
      const res = await getZones();

      console.log("Zone API Response:", res.data);

      if (res.data.status === "success") {
        setZones(res.data.response || []);
        setMessage("");
      } else {
        setZones([]);
        setMessage("❌ " + (res.data.message || "Failed to fetch zones"));
      }
    } catch (err) {
      console.error(err);

      setZones([]);

      if (err.response) {
        setMessage(
          JSON.stringify(err.response.data, null, 2)
        );
      } else {
        setMessage("❌ Failed to fetch zones");
      }
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
  // EXECUTION
  // ==========================================

  const handleExecute = async (trace_id, decision_type) => {
    try {
      setLoading(true);

      const payload = {
        trace_id,
        action: "INCREASE_SIGNAL_TIME",
        decision_type
      };

      const res = await triggerExecution(payload);

      setMessage(JSON.stringify(res.data, null, 2));

      return res.data;

    } catch (err) {

      const error =
        err.response?.data || {
          status: "error",
          message: err.message
        };

      setMessage(JSON.stringify(error, null, 2));

      return error;

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚦 Zone Intelligence Dashboard</h1>

      {message && (
        <pre
          style={{
            background: "#111",
            color: "#00ff00",
            padding: 15,
            borderRadius: 5,
            overflowX: "auto",
            marginBottom: 20
          }}
        >
          {message}
        </pre>
      )}

      {loading && (
        <p>⏳ Executing action...</p>
      )}

      {zones.length === 0 ? (
        <h3>No Zone Data Found</h3>
      ) : (
        zones.map((zone) => (
          <ZoneCard
            key={zone.zone_id}
            zone={zone}
            onExecute={handleExecute}
          />
        ))
      )}
    </div>
  );
};

export default ZoneIntelligenceDashboard;