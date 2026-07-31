import React, { useEffect, useState, useRef } from "react";
import "./style.css";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const UCCISIntelligenceDashboard = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);

  const riskChart = useRef(null);
  const predictionChart = useRef(null);
  const decisionChart = useRef(null);

  useEffect(() => {
    loadData();

    return () => {
      destroyCharts();
    };
  }, []);

  const destroyCharts = () => {
    if (riskChart.current) {
      riskChart.current.destroy();
      riskChart.current = null;
    }

    if (predictionChart.current) {
      predictionChart.current.destroy();
      predictionChart.current = null;
    }

    if (decisionChart.current) {
      decisionChart.current.destroy();
      decisionChart.current = null;
    }
  };

  const createCharts = (zonesData) => {
    destroyCharts();

    const labels = zonesData.map(
      (z, i) => z.zone_name || `Zone ${i + 1}`
    );

    const risks = zonesData.map(
      (z) => Number(z.risk_score ?? z.risk ?? 0)
    );

    // Prediction Count
    const predictionCounts = {
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
    };

    zonesData.forEach((z) => {
      const p = (z.prediction || "LOW").toUpperCase();

      if (predictionCounts[p] !== undefined)
        predictionCounts[p]++;
      else predictionCounts.LOW++;
    });

    // Decision Count
    const decisionCounts = {
  ALERT: 0,
  MONITOR: 0,
  NONE: 0,
};

zonesData.forEach((z) => {
  const action = (
    z.execution_request?.action || "NONE"
  ).toUpperCase();

  if (action === "ALERT") {
    decisionCounts.ALERT++;
  } else if (action === "MONITOR") {
    decisionCounts.MONITOR++;
  } else {
    decisionCounts.NONE++;
  }
});

    // ======================
    // Risk Chart
    // ======================

    const riskCanvas = document.getElementById("riskChart");

    if (riskCanvas) {
      riskChart.current = new Chart(riskCanvas, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Risk Score",
              data: risks,
              backgroundColor: "#8CC8F3",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 80,
            },
          },
        },
      });
    }

    // ======================
    // Prediction Chart
    // ======================

    const predictionCanvas =
      document.getElementById("predictionChart");

    if (predictionCanvas) {
      predictionChart.current = new Chart(predictionCanvas, {
        type: "pie",
        data: {
          labels: ["HIGH", "MEDIUM", "LOW"],
          datasets: [
            {
              data: [
                predictionCounts.HIGH,
                predictionCounts.MEDIUM,
                predictionCounts.LOW,
              ],
              backgroundColor: [
                "#36A2EB",
                "#FF6384",
                "#FF9F40",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
            },
          },
        },
      });
    }

    // ======================
    // Decision Chart
    // ======================

    const decisionCanvas =
      document.getElementById("decisionChart");

    if (decisionCanvas) {
      decisionChart.current = new Chart(decisionCanvas, {
        type: "doughnut",
        data: {
          labels: ["ALERT", "MONITOR", "NONE"],
          datasets: [
            {
              data: [
                decisionCounts.ALERT,
                decisionCounts.MONITOR,
                decisionCounts.NONE,
              ],
              backgroundColor: [
                "#36A2EB",
                "#FF6384",
                "#FF9F40",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "50%",
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
            },
          },
        },
      });
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/zones"
      );

      const data = await response.json();

      let zoneData = [];

      if (Array.isArray(data)) {
        zoneData = data;
      } else if (Array.isArray(data.zones)) {
        zoneData = data.zones;
      }

      setZones(zoneData);

      createCharts(zoneData);
    } catch (error) {
      console.error("Error loading zones:", error);
      setZones([]);
      destroyCharts();
    } finally {
      setLoading(false);
    }
  };

  const getBorderColor = (risk) => {
    if (risk >= 75) return "#ff0000";
    if (risk >= 40) return "#f5a000";
    return "#00aa22";
  };

  return (
    <div className="task5-dashboard">
      <h1>🏙️ UCCIS Intelligence Dashboard</h1>

      <div className="refresh-container">
        <button onClick={loadData}
        style={{
      backgroundColor: "#000000",
      color: "#ffffff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    }}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = "#333333";
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = "#000000";
    }}
        >🔄 Refresh</button>
      </div>

      <div className="charts">
        <div className="chart-box">
          <canvas id="riskChart"></canvas>
        </div>

        <div className="chart-box">
          <canvas id="predictionChart"></canvas>
        </div>

        <div className="chart-box">
          <canvas id="decisionChart"></canvas>
        </div>
      </div>

      {loading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : (
        <div className="zone-grid">
          {zones.length === 0 ? (
            <h3>No Zone Data Found</h3>
          ) : (
            zones.map((zone, index) => {
              const risk = Number(
                zone.risk_score);

              return (
                <div
                  key={zone.zone_id}
                  className={`zone-card ${
                  risk >= 75 ? "high" : risk >= 40 ? "medium" : "low"
                  }`}
                >
                  <h2>{zone.zone_name || `Zone ${index + 1}`}</h2>

                  <p>
                    <strong>Risk:</strong> {risk}
                  </p>

                  <p>
                    <strong>Prediction:</strong>{" "}
                    {zone.prediction || "LOW"}
                  </p>

                  <p>
                    <strong>Decision:</strong>{" "}
                    {zone.execution_request
  ? `${zone.execution_request.action} (${zone.execution_request.priority})`
  : "NONE (LOW)"}
                  </p>

                  <p>
                    <strong>Reason:</strong>{" "}
                    {zone.reason || "-"}
                  </p>

                  <p>
                    <strong>Trace:</strong>{" "}
                    {zone.trace_id || "TANTRA_123456"}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default UCCISIntelligenceDashboard;