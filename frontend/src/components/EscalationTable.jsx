function EscalationTable({
  escalations
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Trace ID</th>
          <th>Level</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {escalations?.map(
          (
            escalation,
            index
          ) => (
            <tr key={index}>
              <td>
                {
                  escalation.trace_id
                }
              </td>

              <td>
                {
                  escalation.escalation_level
                }
              </td>

              <td>
                {
                  escalation.status
                }
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default EscalationTable;