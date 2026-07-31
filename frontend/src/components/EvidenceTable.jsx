function EvidenceTable({
  evidence
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Trace ID</th>
          <th>Origin</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {evidence?.map(
          (
            item,
            index
          ) => (
            <tr key={index}>
              <td>
                {item.trace_id}
              </td>

              <td>
                {item.origin}
              </td>

              <td>
                {item.status}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default EvidenceTable;