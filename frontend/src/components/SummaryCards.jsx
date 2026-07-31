function SummaryCards({ summary }) {
  const cards = [
    {
      title: "Signals",
      value: summary?.signals || 0
    },
    {
      title: "Telemetry",
      value: summary?.telemetry || 0
    },
    {
      title: "Incidents",
      value: summary?.incidents || 0
    },
    {
      title: "Escalations",
      value:
        summary?.escalations || 0
    },
    {
      title: "Replay",
      value:
        summary?.replayEvents || 0
    },
    {
      title: "Evidence",
      value:
        summary?.evidence || 0
    }
  ];

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="summary-card"
        >
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;