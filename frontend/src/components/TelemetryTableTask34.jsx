import { useEffect, useState } from "react";
import api from "../services/api";

function TelemetryTableTask34() {

  const [telemetry, setTelemetry] =
    useState([]);

  useEffect(() => {
    api
      .get("/telemetry/list")
      .then((res) =>
        setTelemetry(res.data)
      )
      .catch(console.error);
  }, []);

  return (
    <div className="runtime-logs">

      <h2>Telemetry Backend Response</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Trace ID</th>
            <th>Source</th>
            <th>Status</th>
            <th>Latency</th>
          </tr>
        </thead>

        <tbody>

          {telemetry.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.trace_id}</td>
              <td>{item.source}</td>
              <td>{item.status}</td>
              <td>{item.latency}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TelemetryTableTask34;