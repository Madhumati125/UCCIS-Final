import React, { useEffect, useState } from "react";
import axios from "axios";

function Runtime() {
  const [services, setServices] = useState([]);

  const loadRuntime = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/runtime"
      );

      setServices(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRuntime();

    const interval = setInterval(() => {
      loadRuntime();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <h1>Runtime Services</h1>

      <div className="runtime-grid">
        {services.map((service) => (
          <div className="runtime-card" key={service.id}>
            <h3>{service.service_name}</h3>

            <p>
              Status:
              <span
                style={{
                  color:
                    service.status === "RUNNING"
                      ? "limegreen"
                      : "red",
                }}
              >
                {" "}
                {service.status}
              </span>
            </p>

            <p>Updated: {service.updated_at}</p>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <div className="runtime-card">
          <h3>Telemetry Engine</h3>
          <p>Status: RUNNING</p>
        </div>
      )}
    </div>
  );
}

export default Runtime;