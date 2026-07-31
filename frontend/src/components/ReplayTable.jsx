function ReplayTable({
  replays
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Trace ID</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {replays?.map(
          (replay, index) => (
            <tr key={index}>
              <td>
                {replay.trace_id}
              </td>

              <td>
                {
                  replay.replay_status
                }
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ReplayTable;