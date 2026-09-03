const Replay = () => {
  const replayData = [
    {
      id: 1,
      action: "Signal Generated"
    },
    {
      id: 2,
      action: "Telemetry Received"
    },
    {
      id: 3,
      action: "Incident Created"
    }
  ];

  return (
    <div className="card">
      <h2>Replay Session</h2>

      {replayData.map((item) => (
        <div key={item.id}>
          <p>{item.action}</p>
        </div>
      ))}

      <pre>{JSON.stringify(replayData, null, 2)}</pre>
    </div>
  );
};

export default Replay;