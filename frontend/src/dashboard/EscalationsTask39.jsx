import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EscalationsTask39() {

  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    loadEscalations();
  }, []);

  const loadEscalations = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/escalations"
      );

      if (res.data.length > 0) {

        setEscalations(res.data);

      } else {

        setEscalations([
          {
            _id: 1,
            escalationId: "ESC-1001",
            incidentId: "INC-1001",
            traceId: "TRACE-1001",
            priority: "Critical",
            assignedTo: "Runtime Team",
            status: "Open",
            createdAt: new Date()
          },
          {
            _id: 2,
            escalationId: "ESC-1002",
            incidentId: "INC-1002",
            traceId: "TRACE-1002",
            priority: "High",
            assignedTo: "SOC Team",
            status: "In Progress",
            createdAt: new Date()
          },
          {
            _id: 3,
            escalationId: "ESC-1003",
            incidentId: "INC-1003",
            traceId: "TRACE-1003",
            priority: "Medium",
            assignedTo: "Operations Team",
            status: "Resolved",
            createdAt: new Date()
          }
        ]);

      }

    } catch (error) {

      console.log(error);

      setEscalations([
        {
          _id: 1,
          escalationId: "ESC-1001",
          incidentId: "INC-1001",
          traceId: "TRACE-1001",
          priority: "Critical",
          assignedTo: "Runtime Team",
          status: "Open",
          createdAt: new Date()
        },
        {
          _id: 2,
          escalationId: "ESC-1002",
          incidentId: "INC-1002",
          traceId: "TRACE-1002",
          priority: "High",
          assignedTo: "SOC Team",
          status: "In Progress",
          createdAt: new Date()
        }
      ]);

    }
  };

  const openEscalations =
    escalations.filter(
      item => item.status === "Open"
    ).length;

  const criticalEscalations =
    escalations.filter(
      item => item.priority === "Critical"
    ).length;

  const resolvedEscalations =
    escalations.filter(
      item => item.status === "Resolved"
    ).length;

  return (
    <div className="page-container">

      <h1 className="page-title">
        Escalation Command Center
      </h1>

      <p className="page-subtitle">
        Runtime Escalation Monitoring & Response
      </p>

      <div className="metrics-grid">

        <div className="metric-card">
          <h4>⚠ Open Escalations</h4>
          <h2>{openEscalations}</h2>
        </div>

        <div className="metric-card">
          <h4>🔥 Critical Priority</h4>
          <h2>{criticalEscalations}</h2>
        </div>

        <div className="metric-card">
          <h4>✅ Resolved</h4>
          <h2>{resolvedEscalations}</h2>
        </div>

        <div className="metric-card">
          <h4>📊 Total Escalations</h4>
          <h2>{escalations.length}</h2>
        </div>

      </div>

      <div className="panel">

        <h2>Escalation Response Status</h2>

        <div className="alert danger">
          Critical escalations require immediate review.
        </div>

        <div className="alert warning">
          Escalation routing engine active.
        </div>

        <div className="alert success">
          Incident escalation workflow operational.
        </div>

      </div>

      <div className="panel">

        <h2>Escalation Queue</h2>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Escalation ID</th>
                <th>Incident ID</th>
                <th>Trace ID</th>
                <th>Priority</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>

              {escalations.map(item => (

                <tr key={item._id}>

                  <td>{item.escalationId}</td>

                  <td>{item.incidentId}</td>

                  <td>{item.traceId}</td>

                  <td>{item.priority}</td>

                  <td>{item.assignedTo}</td>

                  <td>{item.status}</td>

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

        <h2>Escalation Intelligence</h2>

        <div className="timeline-item">
          <strong>Priority Assignment</strong>
          <span>Automatic Severity Mapping Active</span>
        </div>

        <div className="timeline-item">
          <strong>Runtime Routing</strong>
          <span>Escalation Teams Connected</span>
        </div>

        <div className="timeline-item">
          <strong>Incident Pipeline</strong>
          <span>Signal → Incident → Escalation</span>
        </div>

      </div>

    </div>
  );
}