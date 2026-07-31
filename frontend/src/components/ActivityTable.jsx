export default function ActivityTable() {

  const rows = [
    {
      signal: "FIRE_ALERT",
      location: "Nashik",
      severity: "HIGH"
    },
    {
      signal: "FLOOD_ALERT",
      location: "Pune",
      severity: "CRITICAL"
    },
    {
      signal: "CYBER_ATTACK",
      location: "Mumbai",
      severity: "HIGH"
    }
  ];

  return (
    <div className="table-card">

      <h3>
        Recent Activity
      </h3>

      <table>
        <thead>
          <tr>
            <th>Signal</th>
            <th>Location</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.signal}</td>
              <td>{row.location}</td>
              <td>{row.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}