import React from "react";

function RuntimeLogs({ logs = [], data = [] }) {
  const runtimeLogs = logs.length ? logs : data;

  return (
    <div className="uccis-card">
      <h3>📄 Runtime Logs</h3>

      <div className="logs-box">
        {runtimeLogs.length === 0 ? (
          <p>No runtime logs available.</p>
        ) : (
          runtimeLogs.map((log, index) => (
            <div
              key={log.id || index}
              className="log-line"
            >
              <strong>[{log.source || log.module || "SYSTEM"}]</strong>{" "}
              {log.message || "No message"}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RuntimeLogs;