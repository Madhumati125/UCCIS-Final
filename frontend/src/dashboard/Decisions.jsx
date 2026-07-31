const Decisions = () => {
  const decisions = [
    "Deploy Rescue Team",
    "Send Medical Team",
    "Close Flood Zone"
  ];

  return (
    <div className="card">
      <h2>Decisions</h2>

      {decisions.map((decision, index) => (
        <div key={index}>
          <p>{decision}</p>
        </div>
      ))}

      <pre>{JSON.stringify(decisions, null, 2)}</pre>
    </div>
  );
};

export default Decisions;