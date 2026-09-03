import React, { useEffect, useState } from "react";
import "../style.css";

const CommandInterface = () => {
  const [zones, setZones] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const loadData = async () => {
    try {
      const zoneRes = await fetch("http://localhost:5000/zone/state");
      const zoneData = await zoneRes.json();

      setZones(Array.isArray(zoneData) ? zoneData : []);

      const alertRes = await fetch("http://localhost:5000/alerts");
      const alertData = await alertRes.json();

      setAlerts(Array.isArray(alertData) ? alertData : []);
    } catch (err) {
      console.error("Failed to load dashboard:", err);
      setZones([]);
      setAlerts([]);
    }
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 3000);

    return () => clearInterval(interval);
  }, []);

  const triggerAction = async (zoneId, action) => {
    try {
      await fetch("http://localhost:5000/action/trigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          zoneId,
          action,
        }),
      });

      loadData();
    } catch (err) {
      console.error("Action Error:", err);
    }
  };

  return (
    <div className="executive-dashboard">

      <div className="main-container">

        {/* LEFT PANEL */}

        <div className="panel zones-panel">

          <h2>Zones</h2>

          {zones.length === 0 ? (
            <p>No zone data available.</p>
          ) : (
            zones.map((zone, index) => {

              const status = zone.status || "UNKNOWN";
              const metrics = zone.metrics || {};

              return (

                <div
                  key={
                    zone.id ??
                    zone.zone_id ??
                    zone.name ??
                    `zone-${index}`
                  }
                  className={`zone-card ${status.toLowerCase()}`}
                >

                  <h3>{zone.name || zone.zone_id || `Zone ${index + 1}`}</h3>

                  <p>Status: {status}</p>

                  <p>
                    Load:
                    {" "}
                    {metrics.load ??
                      zone.traffic_density ??
                      0}
                    %
                  </p>

                  <p>
                    Traffic:
                    {" "}
                    {zone.traffic_density ?? 0}
                    %
                  </p>

                  <p>
                    Violations:
                    {" "}
                    {zone.violation_count ?? 0}
                  </p>

                  <p>
                    Congestion:
                    {" "}
                    {zone.congestion_level || "N/A"}
                  </p>

                </div>

              );

            })
          )}

        </div>

        {/* CENTER PANEL */}

        <div className="panel alerts-panel">

          <h2>Live Alerts</h2>

          {alerts.length === 0 ? (
            <p>No Alerts</p>
          ) : (
            alerts.map((alert, index) => (

              <div
                key={
                  alert.id ??
                  alert.alert_id ??
                  `${alert.type}-${index}`
                }
                className="alert-card"
              >

                <p>
                  <strong>{alert.type}</strong>
                </p>

                <p>
                  Zone:
                  {" "}
                  {alert.zoneId ?? alert.zone_id ?? "N/A"}
                </p>

                <p>
                  Severity:
                  {" "}
                  {alert.severity ?? "N/A"}
                </p>

                <small>
                  {alert.timestamp ?? ""}
                </small>

              </div>

            ))
          )}

        </div>

        {/* RIGHT PANEL */}

        <div className="panel control-panel">

          <h2>Command Panel</h2>

          <div className="actions">

            <button
              onClick={() =>
                triggerAction(
                  1,
                  "deploy_waste_collection"
                )
              }
            >
              Deploy Waste
            </button>

            <button
              onClick={() =>
                triggerAction(
                  2,
                  "reroute_water"
                )
              }
            >
              Reroute Water
            </button>

            <button
              onClick={() =>
                triggerAction(
                  3,
                  "send_field_team"
                )
              }
            >
              Send Field Team
            </button>

          </div>

          <h3>System Recommendations</h3>

          <div className="recommendations">

            {zones
              .filter(
                (z) =>
                  (z.status || "GREEN") !==
                  "GREEN"
              )
              .map((z, index) => (

                <div
                  key={
                    z.id ??
                    z.zone_id ??
                    `recommendation-${index}`
                  }
                >

                  {z.name ||
                    z.zone_id ||
                    `Zone ${index + 1}`}
                  :
                  {" "}
                  Consider immediate intervention.

                </div>

              ))}

          </div>

        </div>

      </div>

      <footer className="footer">
        System Status: Active | UCCIS Live Monitoring
      </footer>

    </div>
  );
};

export default CommandInterface;