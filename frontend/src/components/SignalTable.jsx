export default function SignalTable() {

  const signals = [
    {
      id: 1,
      type: "FIRE_ALERT",
      location: "Nashik",
      status: "ACTIVE"
    },
    {
      id: 2,
      type: "FLOOD_ALERT",
      location: "Pune",
      status: "ACTIVE"
    },
    {
      id: 3,
      type: "CYBER_ATTACK",
      location: "Mumbai",
      status: "CRITICAL"
    }
  ];

  return (
    <div className="table-card">

      <h2>Recent Signals</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {signals.map((signal)=>(
            <tr key={signal.id}>
              <td>{signal.id}</td>
              <td>{signal.type}</td>
              <td>{signal.location}</td>
              <td>{signal.status}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}