import { useState } from "react";
import axios from "axios";

import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import DonutChart from "../charts/DonutChart";

function IntelligenceEngine() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * RUN INTELLIGENCE ENGINE
   */
  const runEngine = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        "http://localhost:5000/api/intelligence-run"
      );

      if (!res.data || !res.data.success) {
        throw new Error(
          (res.data && res.data.error) || "Engine returned an unsuccessful response"
        );
      }

      setData(res.data.snapshot);
    } catch (err) {
      // Prefer the server's own error message/stack if present
      const serverMessage = err.response?.data?.error;
      const serverStack = err.response?.data?.stack;

      console.log("Error:", serverMessage || err.message);
      if (serverStack) console.log("Server stack:", serverStack);

      setError(serverMessage || err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={runEngine} disabled={loading}>
          {loading ? "Running..." : "Run Intelligence Engine"}
        </button>
      </div>

      {/* ================= ERROR DISPLAY ================= */}
      {error && (
        <div
          style={{
            background: "#fdecea",
            border: "1px solid #f5c6cb",
            color: "#611a15",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "20px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <strong>Engine failed:</strong> {error}
        </div>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!loading && !error && !data && (
        <div style={{ textAlign: "center", color: "#888" }}>
          Click "Run Intelligence Engine" to load zone data.
        </div>
      )}

      {/* ================= ZONE RENDERING ================= */}
      {data &&
        Object.keys(data.zones || {}).map((zoneKey) => {
          const zoneData = Array.isArray(data.zones[zoneKey])
            ? data.zones[zoneKey]
            : [];

          return (
            <div
              key={zoneKey}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "20px",
                background: "#f9f9f9",
              }}
            >
              <h3>Zone: {zoneKey}</h3>

              {zoneData.length === 0 ? (
                <div style={{ color: "#999" }}>No data for this zone.</div>
              ) : (
                <>
                  {/* ================= TOP ROW ================= */}
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: "300px" }}>
                      <BarChart data={zoneData} />
                    </div>

                    <div style={{ flex: 1, minWidth: "300px" }}>
                      <LineChart data={zoneData} />
                    </div>
                  </div>

                  {/* ================= BOTTOM ROW (SMALL CHARTS) ================= */}
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "40px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* PIE */}
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <PieChart data={zoneData} />
                    </div>

                    {/* DONUT */}
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                      }}
                    >
                      <DonutChart data={zoneData} />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default IntelligenceEngine;