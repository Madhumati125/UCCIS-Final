import React from "react";

import EvidenceTrendChart from "../components/Charts/EvidenceTrendChart";
import EvidenceTypeChart from "../components/Charts/EvidenceTypeChart";

function EvidenceViewTask36() {

  const evidenceData = {
    totalEvidence: 345,
    verifiedEvidence: 302,
    pendingReview: 31,
    rejectedEvidence: 12
  };

  return (
    <div>

      <h1 className="dashboard-title">
        Evidence Management Center
      </h1>

      {/* KPI Cards */}

      <div className="card-grid">

        <div className="card signals">
          <h3>Total Evidence</h3>
          <h2>345</h2>
        </div>

        <div className="card incidents">
          <h3>Verified</h3>
          <h2>302</h2>
        </div>

        <div className="card replay">
          <h3>Pending Review</h3>
          <h2>31</h2>
        </div>

        <div className="card escalations">
          <h3>Rejected</h3>
          <h2>12</h2>
        </div>

      </div>

      {/* Charts */}

      <div className="dashboard-grid">

        <EvidenceTrendChart />

        <EvidenceTypeChart />

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
          {JSON.stringify(evidenceData, null, 2)}
        </pre>

      </div>

      {/* Information */}

      <div className="dashboard-grid">

        <div className="panel">

          <h2>Evidence Information</h2>

          <p>
            Evidence Management stores logs,
            telemetry records, screenshots,
            trace outputs and audit reports.
          </p>

          <br />

          <p>
            Evidence is used for incident
            investigations, compliance reviews
            and operational audits.
          </p>

          <br />

          <p>
            Verified evidence provides trusted
            proof for root cause analysis and
            governance reviews.
          </p>

        </div>

        <div className="panel">

          <h2>Evidence Statistics</h2>

          <p>Total Evidence : 345</p>
          <p>Verified : 302</p>
          <p>Pending Review : 31</p>
          <p>Rejected : 12</p>
          <p>Verification Rate : 87%</p>

        </div>

      </div>

      {/* Evidence Repository */}

      <div className="panel">

        <h2>Evidence Repository</h2>

        <table>

          <thead>
            <tr>
              <th>Evidence ID</th>
              <th>Type</th>
              <th>Status</th>
              <th>Owner</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>EVD-1001</td>
              <td>Logs</td>
              <td>Verified</td>
              <td>Runtime Team</td>
            </tr>

            <tr>
              <td>EVD-1002</td>
              <td>Metrics</td>
              <td>Verified</td>
              <td>Platform Team</td>
            </tr>

            <tr>
              <td>EVD-1003</td>
              <td>Screenshot</td>
              <td>Pending</td>
              <td>Operations Team</td>
            </tr>

            <tr>
              <td>EVD-1004</td>
              <td>Trace File</td>
              <td>Verified</td>
              <td>Replay Team</td>
            </tr>

            <tr>
              <td>EVD-1005</td>
              <td>Audit Report</td>
              <td>Rejected</td>
              <td>Governance Team</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default EvidenceViewTask36;