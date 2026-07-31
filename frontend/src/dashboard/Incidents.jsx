import { useEffect, useState } from "react";
import API from "../services/api";
import IncidentChart from "../components/Charts/IncidentChart";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {
    try {
      const res = await API.get("/incidents");

      console.log("Incidents Response:", res.data);

      if (Array.isArray(res.data)) {
        setIncidents(res.data);
      } else if (Array.isArray(res.data.data)) {
        setIncidents(res.data.data);
      } else {
        setIncidents([]);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load incidents.");
    }
  };

  return (
    <>
      <IncidentChart />

      <div className="card">
        <h2>Incidents</h2>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        {incidents.length === 0 ? (
          <p>No incidents found.</p>
        ) : (
          incidents.map((item) => (
            <div key={item.incident_id || item.id}>
              <p>
                <strong>ID:</strong>{" "}
                {item.incident_id || item.id}
              </p>

              <p>
                <strong>Severity:</strong>{" "}
                {item.severity}
              </p>

              <hr />
            </div>
          ))
        )}

        <pre>{JSON.stringify(incidents, null, 2)}</pre>
      </div>
    </>
  );
};

export default Incidents;