export default function SummaryCardsTask35({
  stats
}) {
  return (
    <div className="cards">

      <div
        className="card"
        style={{
          background: "#2563EB",
          color: "white"
        }}
      >
        <h3>Signals</h3>
        <h1>
          {stats.activeSignals}
        </h1>
      </div>

      <div
        className="card"
        style={{
          background: "#F59E0B",
          color: "white"
        }}
      >
        <h3>Incidents</h3>
        <h1>
          {stats.incidents}
        </h1>
      </div>

      <div
        className="card"
        style={{
          background: "#DC2626",
          color: "white"
        }}
      >
        <h3>Escalations</h3>
        <h1>
          {stats.escalations}
        </h1>
      </div>

      <div
        className="card"
        style={{
          background: "#8B5CF6",
          color: "white"
        }}
      >
        <h3>Trace IDs</h3>
        <h1>
          {stats.traces}
        </h1>
      </div>

    </div>
  );
}