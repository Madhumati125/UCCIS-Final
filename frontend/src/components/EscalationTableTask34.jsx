import { useEffect, useState } from "react";
import api from "../services/api";

function EscalationTableTask34() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    api.get("/escalations/list")
      .then((res) => {
        setRows(res.data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="runtime-logs">

      <h2>Escalation Backend Response</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Trace ID</th>
            <th>Escalation</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {rows.length > 0 ? (
            rows.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.trace_id}</td>
                <td>{item.escalation_name}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No escalation data found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default EscalationTableTask34;