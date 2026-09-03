import React from "react";

export default function Settings() {
  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <h2>System Settings</h2>

      {/* ================= SYSTEM OVERVIEW ================= */}
      <div className="card">
        <h3>Environment Overview</h3>

        <p><b>Environment:</b> Production</p>
        <p><b>Region:</b> India (Mumbai Cluster)</p>
        <p><b>Version:</b> 1.0.0</p>
        <p><b>Runtime Mode:</b> Stable</p>
        <p><b>Uptime:</b> 14d 6h 45m</p>
      </div>

      {/* ================= CONFIGURATION STATUS ================= */}
      <div className="card">
        <h3>Configuration Status</h3>

        <p>📡 Telemetry Streaming: Active</p>
        <p>🚨 Auto Escalation: Enabled</p>
        <p>🐞 Debug Mode: Disabled</p>
        <p>🔁 Live Replay Engine: Active</p>
        <p>🔔 Notifications: Enabled</p>
      </div>

      {/* ================= SECURITY SUMMARY ================= */}
      <div className="card">
        <h3>Security Overview</h3>

        <p>🔐 API Access: Restricted</p>
        <p>🛡 Role-Based Access Control: Enabled</p>
        <p>🔑 Token Expiry: 24h</p>
        <p>🚫 External Access: Disabled</p>
      </div>

      {/* ================= SYSTEM HEALTH ================= */}
      <div className="card">
        <h3>System Health Summary</h3>

        <p>🟢 Overall Status: Healthy</p>
        <p>⚙️ Services Running: Stable</p>
        <p>📊 Incident Rate: Low</p>
        <p>🚀 Performance: Optimized</p>
      </div>

    </div>
  );
}