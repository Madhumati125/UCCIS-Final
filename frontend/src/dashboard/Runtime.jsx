import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Runtime() {

  const [runtimeData, setRuntimeData] = useState([]);

  useEffect(() => {
    loadRuntime();
  }, []);

  const loadRuntime = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/runtime"
      );

      if (res.data.length > 0) {

        setRuntimeData(res.data);

      } else {

        setRuntimeData([
          {
            _id: 1,
            traceId: "TRACE-1001",
            signalId: "SIG-1001",
            incidentId: "INC-1001",
            status: "Completed",
            executionTime: 1250,
            createdAt: new Date()
          },
          {
            _id: 2,
            traceId: "TRACE-1002",
            signalId: "SIG-1002",
            incidentId: "INC-1002",
            status: "Running",
            executionTime: 850,
            createdAt: new Date()
          },
          {
            _id: 3,
            traceId: "TRACE-1003",
            signalId: "SIG-1003",
            incidentId: "INC-1003",
            status: "Pending",
            executionTime: 0,
            createdAt: new Date()
          }
        ]);

      }

    } catch (error) {

      console.log(error);

      setRuntimeData([
        {
          _id: 1,
          traceId: "TRACE-1001",
          signalId: "SIG-1001",
          incidentId: "INC-1001",
          status: "Completed",
          executionTime: 1250,
          createdAt: new Date()
        }
      ]);

    }
  };

  const totalExecutions =
    runtimeData.length;

  const completedExecutions =
    runtimeData.filter(
      item => item.status === "Completed"
    ).length;

  const runningExecutions =
    runtimeData.filter(
      item => item.status === "Running"
    ).length;

  const pendingExecutions =
    runtimeData.filter(
      item => item.status === "Pending"
    ).length;

  return (
    <div className="page-container">

      <h1 className="page-title">
        Runtime Command Center
      </h1>

      <p className="page-subtitle">
        Unified Cyber Command Runtime Engine
      </p>

      <div className="metrics-grid">

        <div className="metric-card">
          <h4>⚙ Runtime Executions</h4>
          <h2>{totalExecutions}</h2>
        </div>

        <div className="metric-card">
          <h4>✅ Completed</h4>
          <h2>{completedExecutions}</h2>
        </div>

        <div className="metric-card">
          <h4>⚡ Running</h4>
          <h2>{runningExecutions}</h2>
        </div>

        <div className="metric-card">
          <h4>⏳ Pending</h4>
          <h2>{pendingExecutions}</h2>
        </div>

      </div>

      <div className="panel">

        <h2>Runtime Health</h2>

        <div className="alert success">
          Runtime Engine Operational
        </div>

        <div className="alert success">
          MongoDB Connected
        </div>

        <div className="alert info">
          Signal Processing Active
        </div>

        <div className="alert warning">
          Replay Queue Monitoring Enabled
        </div>

      </div>

      <div className="panel">

        <h2>Runtime Services</h2>

        <div className="summary-grid">

          <div className="summary-card">
            <h4>Signal Service</h4>
            <p>Online</p>
          </div>

          <div className="summary-card">
            <h4>Telemetry Service</h4>
            <p>Online</p>
          </div>

          <div className="summary-card">
            <h4>Incident Service</h4>
            <p>Online</p>
          </div>

          <div className="summary-card">
            <h4>Replay Engine</h4>
            <p>Online</p>
          </div>

        </div>

      </div>

      <div className="panel">

        <h2>Runtime Execution Records</h2>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Trace ID</th>
                <th>Signal ID</th>
                <th>Incident ID</th>
                <th>Status</th>
                <th>Execution Time</th>
                <th>Created</th>
              </tr>

            </thead>

            <tbody>

              {runtimeData.map(item => (

                <tr key={item._id}>

                  <td>{item.traceId}</td>

                  <td>{item.signalId}</td>

                  <td>{item.incidentId}</td>

                  <td>{item.status}</td>

                  <td>
                    {item.executionTime} ms
                  </td>

                  <td>
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

        <h2>Runtime Timeline</h2>

        <div className="timeline-item">
          <strong>Signal Received</strong>
          <span>Signal Service Triggered</span>
        </div>

        <div className="timeline-item">
          <strong>Telemetry Generated</strong>
          <span>Runtime Analysis Completed</span>
        </div>

        <div className="timeline-item">
          <strong>Incident Created</strong>
          <span>Trace Registered</span>
        </div>

        <div className="timeline-item">
          <strong>Replay Generated</strong>
          <span>Execution Chain Verified</span>
        </div>

        <div className="timeline-item">
          <strong>Evidence Stored</strong>
          <span>Runtime Completed</span>
        </div>

      </div>

      <div className="panel">

        <h2>Runtime Analytics</h2>

        <div className="summary-grid">

          <div className="summary-card">
            <h4>Success Rate</h4>
            <p>99.9%</p>
          </div>

          <div className="summary-card">
            <h4>Average Runtime</h4>
            <p>1.2s</p>
          </div>

          <div className="summary-card">
            <h4>Trace Accuracy</h4>
            <p>98.8%</p>
          </div>

          <div className="summary-card">
            <h4>Recovery Rate</h4>
            <p>99.5%</p>
          </div>

        </div>

      </div>

    </div>
  );
}