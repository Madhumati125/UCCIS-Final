export default function RuntimeCards() {

  const cards = [
    {
      title: "Signals",
      value: 120
    },
    {
      title: "Telemetry",
      value: 95
    },
    {
      title: "Incidents",
      value: 60
    },
    {
      title: "Escalations",
      value: 35
    },
    {
      title: "Replays",
      value: 18
    },
    {
      title: "Logs",
      value: 450
    }
  ];

  return (
    <div className="runtime-cards">

      {cards.map((card,index)=>(
        <div
          key={index}
          className="runtime-card"
        >
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
        </div>
      ))}

    </div>
  );
}