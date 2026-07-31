import { useEffect, useState } from "react";
import api from "../services/api";

function SignalPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("/signals")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) {
    return <h3>Loading Signals...</h3>;
  }

  return (
    <div className="panel">

      <h2>Signal Dashboard</h2>

      <div className="panel-grid">

        <div className="signal-card total">
          <h4>Total Signals</h4>
          <h1>{data.totalSignals}</h1>
        </div>

        <div className="signal-card active">
          <h4>Active Signals</h4>
          <h1>{data.activeSignals}</h1>
        </div>

        <div className="signal-card critical">
          <h4>Critical Signals</h4>
          <h1>{data.criticalSignals}</h1>
        </div>

      </div>

    </div>
  );
}

export default SignalPanel;