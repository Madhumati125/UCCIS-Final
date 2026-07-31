import React, { useState } from "react";

const ZoneCard = ({ zone, onExecute }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setResponse(null);

    const res = await onExecute(
      zone.trace_id,
      zone.decision_type
    );

    setResponse(res);
    setLoading(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 15,
        margin: 10,
        backgroundColor:
          zone.decision_type === "HIGH_PRIORITY"
            ? "#ffe5e5"
            : zone.decision_type === "MEDIUM"
            ? "#fff7d6"
            : "#e6ffe6",
        color: "#000", // Make all text black
      }}
    >
      {/* Zone */}
      <h3
        style={{
          margin: "0 0 15px 0",
          color: "#000",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {zone.zone_id}
      </h3>

      {/* Risk Score */}
      <p
        style={{
          color: "#000000",
          fontSize: "18px",
          margin: "8px 0",
        }}
      >
        <strong style={{ color: "#000000" }}>Risk Score:</strong> {zone.risk_score}
      </p>

      {/* Decision */}
      <p
        style={{
          color: "#000000",
          fontSize: "18px",
          margin: "8px 0",
        }}
      >
        <strong style={{ color: "#000000" }}>Decision:</strong> {zone.decision_type}
      </p>

      {/* Button */}
      <button
        onClick={handleClick}
        disabled={loading}
        style={{
          marginTop: 15,
          padding: "10px 18px",
          background: "#1677ff",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Executing..." : "Trigger Action"}
      </button>

      {/* Response */}
      {response && (
        <pre
          style={{
            marginTop: 15,
            background: "#111",
            color: "#00ff00",
            padding: 10,
            fontSize: 12,
            borderRadius: 5,
            overflowX: "auto",
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ZoneCard;