function TelemetryView({
  signals
}) {

  return (
    <div>

      <h2>
        Telemetry
      </h2>

      <table>

        <thead>

          <tr>
            <th>Trace ID</th>
            <th>Source</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {signals.map(
            (item) => (
              <tr
                key={
                  item.trace_id
                }
              >
                <td>
                  {
                    item.trace_id
                  }
                </td>

                <td>
                  {
                    item.source_system
                  }
                </td>

                <td>
                  {
                    item.status
                  }
                </td>
              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );

}

export default TelemetryView;