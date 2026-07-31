function RuntimeLogsTask34() {
  const logs = [
    {
      id: 1,
      layer: "Signal",
      status: "SUCCESS"
    },
    {
      id: 2,
      layer: "Telemetry",
      status: "SUCCESS"
    },
    {
      id: 3,
      layer: "Incident",
      status: "SUCCESS"
    },
    {
      id: 4,
      layer: "Escalation",
      status: "SUCCESS"
    },
    {
      id: 5,
      layer: "Replay",
      status: "SUCCESS"
    },
    {
      id: 6,
      layer: "Evidence",
      status: "SUCCESS"
    }
  ];

  return (
    <div className="runtime-logs">
      <h3>
        Runtime Logs
      </h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Layer</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>

              <td>
                {log.layer}
              </td>

              <td>
                {log.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RuntimeLogsTask34;