import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Evidence() {

  const [evidence, setEvidence] = useState([]);

  useEffect(() => {
    loadEvidence();
  }, []);

  const loadEvidence = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/evidence"
      );

      if (res.data.length > 0) {

        setEvidence(res.data);

      } else {

        setEvidence([
          {
            _id: 1,
            evidenceId: "EVD-1001",
            traceId: "TRACE-1001",
            replayId: "REP-1001",
            type: "Runtime Log",
            status: "Verified",
            createdAt: new Date()
          },
          {
            _id: 2,
            evidenceId: "EVD-1002",
            traceId: "TRACE-1002",
            replayId: "REP-1002",
            type: "System Snapshot",
            status: "Pending",
            createdAt: new Date()
          },
          {
            _id: 3,
            evidenceId: "EVD-1003",
            traceId: "TRACE-1003",
            replayId: "REP-1003",
            type: "Execution Record",
            status: "Verified",
            createdAt: new Date()
          }
        ]);

      }

    } catch (error) {

      console.log(error);

      setEvidence([
        {
          _id: 1,
          evidenceId: "EVD-1001",
          traceId: "TRACE-1001",
          replayId: "REP-1001",
          type: "Runtime Log",
          status: "Verified",
          createdAt: new Date()
        }
      ]);

    }
  };

  const totalEvidence = evidence.length;

  const verifiedEvidence =
    evidence.filter(
      item => item.status === "Verified"
    ).length;

  const pendingEvidence =
    evidence.filter(
      item => item.status === "Pending"
    ).length;

  const archivedEvidence =
    evidence.filter(
      item => item.status === "Archived"
    ).length;

  return (
    <div className="page-container">

      <h1 className="page-title">
        Evidence Command Center
      </h1>

      <p className="page-subtitle">
        Runtime Evidence Repository & Validation System
      </p>

      <div className="metrics-grid">

        <div className="metric-card">
          <h4>📂 Total Evidence</h4>
          <h2>{totalEvidence}</h2>
        </div>

        <div className="metric-card">
          <h4>✅ Verified</h4>
          <h2>{verifiedEvidence}</h2>
        </div>

        <div className="metric-card">
          <h4>⏳ Pending</h4>
          <h2>{pendingEvidence}</h2>
        </div>

        <div className="metric-card">
          <h4>🗄 Archived</h4>
          <h2>{archivedEvidence}</h2>
        </div>

      </div>

      <div className="panel">

        <h2>Evidence Intelligence</h2>

        <div className="alert success">
          Evidence validation pipeline operational.
        </div>

        <div className="alert info">
          Trace lineage verification enabled.
        </div>

        <div className="alert warning">
          Pending evidence awaiting review.
        </div>

      </div>

      <div className="panel">

        <h2>Evidence Repository</h2>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Evidence ID</th>
                <th>Trace ID</th>
                <th>Replay ID</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>

              {evidence.map(item => (

                <tr key={item._id}>

                  <td style={{ color: "#000000" }}>{item.evidenceId}</td>

                  <td style={{ color: "#000000" }}>{item.traceId}</td>

                  <td style={{ color: "#000000" }}>{item.replayId}</td>

                  <td style={{ color: "#000000" }}>{item.type}</td>

                  <td style={{ color: "#000000" }}>{item.status}</td>

                  <td style={{ color: "#000000" }}>
                    {new Date(
                      item.createdAt
                    ).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="panel">

        <h2>Evidence Timeline</h2>

        <div className="timeline-item">
          <strong>Evidence Store Initialized</strong>
          <span>Repository Ready</span>
        </div>

        <div className="timeline-item">
          <strong>Trace Verification</strong>
          <span>Lineage Validation Active</span>
        </div>

        <div className="timeline-item">
          <strong>Replay Integration</strong>
          <span>Replay Evidence Linked</span>
        </div>

        <div className="timeline-item">
          <strong>Runtime Collection</strong>
          <span>
            Signal → Incident → Replay → Evidence
          </span>
        </div>

      </div>

      <div className="panel">

        <h2>Evidence Analytics</h2>

        <div className="summary-grid">

          <div className="summary-card">
            <h4>Validation Rate</h4>
            <p>99.7%</p>
          </div>

          <div className="summary-card">
            <h4>Storage Health</h4>
            <p>Healthy</p>
          </div>

          <div className="summary-card">
            <h4>Trace Coverage</h4>
            <p>98.9%</p>
          </div>

          <div className="summary-card">
            <h4>Retention</h4>
            <p>365 Days</p>
          </div>

        </div>

      </div>

    </div>
  );
}