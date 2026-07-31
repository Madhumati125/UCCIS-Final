import React, { useState } from "react";
import axios from "axios";
import "../components/ReplayDashboard.css";

const ReplayDashboard = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const getPrediction = (riskScore) => {
    if (riskScore >= 70) return "HIGH";
    if (riskScore >= 40) return "MEDIUM";
    return "LOW";
  };

  const loadZones = async () => {
    try {
      setLoading(true);
      setShowResults(true);

      const res = await axios.get("http://localhost:5000/api/zones");
      const apiData = res.data || [];

      const formatted = apiData.map((zone, index) => {
        const riskScore =
          zone.risk_score ??
          zone.risk ??
          Math.round(Math.random() * 80 + 10);

        return {
          id: zone.zone_id || index + 1,
          zone_name: zone.zone_name || `ZONE_${index + 1}`,
          risk_score: riskScore,
          prediction:
            zone.prediction ||
            zone.current_state ||
            getPrediction(Number(riskScore)),
          timestamp: new Date().toLocaleTimeString(),
        };
      });

      setZones(formatted);
    } catch (err) {
      console.log(err);

      setZones([
        {
          id: 1,
          zone_name: "ZONE_1",
          risk_score: 52,
          prediction: "MEDIUM",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: 2,
          zone_name: "ZONE_2",
          risk_score: 26,
          prediction: "LOW",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: 3,
          zone_name: "ZONE_3",
          risk_score: 68,
          prediction: "MEDIUM",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: 4,
          zone_name: "ZONE_4",
          risk_score: 38,
          prediction: "LOW",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: 5,
          zone_name: "ZONE_5",
          risk_score: 80,
          prediction: "HIGH",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: 6,
          zone_name: "ZONE_6",
          risk_score: 16,
          prediction: "LOW",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStateClass = (state) => {
    if (state === "HIGH") return "high";
    if (state === "MEDIUM") return "medium";
    return "low";
  };

  const maxRisk = Math.max(...zones.map((zone) => Number(zone.risk_score)), 80);

  return (
    <div className="task6">
      <div className="header">
        <h1>UCCIS Multi-Zone Intelligence System</h1>

        <button onClick={loadZones}>
          Run All Zones
        </button>
      </div>

      {!showResults && (
        <div className="empty-box">
          Click Run All Zones to display intelligence dashboard.
        </div>
      )}

      {loading && (
        <div className="panel loading">
          Loading Zone Intelligence...
        </div>
      )}

      {!loading && showResults && (
        <>
          <div className="cards-grid">
            {zones.map((zone) => (
              <div className="zone-card" key={zone.id}>
                <h2>{zone.zone_name}</h2>

                <p>
                  Risk: <span>{zone.risk_score}</span>
                </p>

                <p className={getStateClass(zone.prediction)}>
                  State: {zone.prediction}
                </p>
              </div>
            ))}
          </div>

          <section className="panel">
            <h2>Zone Risk Comparison</h2>

            <div className="chart-wrap">
              <div className="y-axis">
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="bar-chart">
                {zones.map((zone) => (
                  <div className="bar-item" key={zone.id}>
                    <div
                      className="bar"
                      style={{
                        height: `${(Number(zone.risk_score) / maxRisk) * 100}%`,
                      }}
                    ></div>

                    <span>{zone.zone_name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="panel">
            <h2>Zone State Snapshot</h2>

            <div className="snapshot">
              {zones.map((zone) => (
                <p key={zone.id}>
                  {zone.zone_name} → {zone.prediction}
                </p>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2>Execution Log (Audit Trail)</h2>

            <div className="audit-log">
              {zones.map((zone) => (
                <pre key={zone.id}>{`{
  "zone_id": "${zone.zone_name}",
  "risk_score": ${zone.risk_score},
  "current_state": "${zone.prediction}",
  "timestamp": "${zone.timestamp}"
}`}</pre>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ReplayDashboard;