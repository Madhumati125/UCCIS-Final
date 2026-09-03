import React, { useEffect, useState } from "react";
import { getZoneIntelligence } from "../api/intelligenceApi";
import ZoneCardTask3 from "../components/ZoneCardTask3";

const IntelligenceDashboard = () => {
  const [zonesData, setZonesData] = useState([]);

  const zones = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const loadZones = async () => {
      try {
        const results = await Promise.all(
          zones.map(async (id) => {
            const result = await getZoneIntelligence(id);

            return {
              ...result,
              zone_id: id,
              zone_name: `Zone ${id}`,
            };
          })
        );

        setZonesData(results);
      } catch (err) {
        console.error("Failed to load intelligence:", err);
      }
    };

    loadZones();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        UCCIS Intelligence Dashboard
      </h1>

      <div style={styles.grid}>
        {zonesData.map((zone) => (
          <ZoneCardTask3
            key={zone.zone_id}
            data={zone}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#0f172a",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "20px",
  },
};

export default IntelligenceDashboard;