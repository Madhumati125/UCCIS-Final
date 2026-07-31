import React, { useState } from "react";

import ReplayTrendChart from "../components/Charts/ReplayTrendChart";
import ReplayStatusChart from "../components/Charts/ReplayStatusChart";

function ReplayViewTask36() {

  const [output, setOutput] = useState("");

  const replayData = {
    totalReplays: 164,
    successfulReplays: 120,
    runningReplays: 22,
    failedReplays: 8
  };

  const runReplay = () => {
    setOutput(`
Replay Started...

Trace ID : TRACE-1001

Step 1 : Runtime Loaded
Step 2 : Signals Loaded
Step 3 : Telemetry Loaded
Step 4 : Incident Chain Loaded
Step 5 : Replay Completed Successfully
    `);
  };

  return (
    <div>

      <h1 className="dashboard-title">
        Replay Engine
      </h1>

      {/* KPI Cards */}

      <div className="card-grid">

        <div className="card signals">
          <h3>Total Replays</h3>
          <h2>164</h2>
        </div>

        <div className="card incidents">
          <h3>Successful</h3>
          <h2>120</h2>
        </div>

        <div className="card replay">
          <h3>Running</h3>
          <h2>22</h2>
        </div>

        <div className="card escalations">
          <h3>Failed</h3>
          <h2>8</h2>
        </div>

      </div>

      {/* Charts */}

      <div className="dashboard-grid">

        <ReplayTrendChart />

        <ReplayStatusChart />

      </div>

      {/* Replay Engine */}

      <div className="panel">

        <h2>Replay Engine</h2>

        <button
          className="replay-btn"
          onClick={runReplay}
        >
          Replay Trace
        </button>

        {output && (
          <pre
            style={{
              marginTop: "20px",
              background: "#111827",
              color: "#22c55e",
              padding: "15px",
              borderRadius: "10px"
            }}
          >
            {output}
          </pre>
        )}

      </div>

      {/* Backend Response */}

      <div className="panel">

        <h2>Backend Response</h2>

        <pre
          style={{
            background: "#111827",
            color: "#22c55e",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          {JSON.stringify(replayData, null, 2)}
        </pre>

      </div>

      {/* Information */}

      <div className="dashboard-grid">

        <div className="panel">

          <h2>Replay Information</h2>

          <p>
            Replay Engine reconstructs runtime
            execution flows from historical traces.
          </p>

          <br />

          <p>
            Engineers can reproduce incidents
            and validate operational workflows
            using replay execution.
          </p>

          <br />

          <p>
            Replay capability improves root cause
            analysis and incident investigations.
          </p>

        </div>

        <div className="panel">

          <h2>Replay Statistics</h2>

          <p>Total Replays : 164</p>
          <p>Successful : 120</p>
          <p>Running : 22</p>
          <p>Failed : 8</p>
          <p>Average Replay Time : 2.3 sec</p>

        </div>

      </div>

      {/* Replay History */}

      <div className="panel">

        <h2>Replay History</h2>

        <table>

          <thead>
            <tr>
              <th>Trace ID</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>TRACE-1001</td>
              <td>Completed</td>
              <td>2.1 sec</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>TRACE-1002</td>
              <td>Completed</td>
              <td>3.4 sec</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>TRACE-1003</td>
              <td>Failed</td>
              <td>1.5 sec</td>
              <td>Error</td>
            </tr>

            <tr>
              <td>TRACE-1004</td>
              <td>Running</td>
              <td>--</td>
              <td>Processing</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ReplayViewTask36;