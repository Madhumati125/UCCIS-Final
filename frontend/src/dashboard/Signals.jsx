import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Signals = () => {
  const [signals, setSignals] = useState([]);
  const [byType, setByType] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSignals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/signals");

      setSignals(res.data.data.signals || []);
      setByType(res.data.data.byType || {});
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSignals();
  }, []);

  const uniqueTypes = [...new Set(signals.map((s) => s.signalType))];

  const chartData =
    Object.keys(byType).length > 0
      ? Object.entries(byType).map(([type, count]) => ({
          type,
          count,
        }))
      : [
          { type: "System Idle", count: 1 },
          { type: "No Active Signals", count: 0 },
        ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>📡 Signals Dashboard</h2>

      {/* 🔥 SMART STATUS BANNER */}
      <div
        style={{
          padding: "10px",
          borderRadius: "8px",
          margin: "10px 0",
          background: signals.length === 0 ? "#fef9c3" : "#dcfce7",
          color: signals.length === 0 ? "#92400e" : "#166534",
        }}
      >
        {signals.length === 0
          ? "🟡 System Active - No Signals Detected"
          : "🟢 Live Signals Streaming"}
      </div>

      {/* 📦 CARDS */}
      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <div style={cardStyle}>
          <h3>Total Signals</h3>
          <p>{signals.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>Signal Types</h3>
          <p>{uniqueTypes.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>System Status</h3>
          <p>{signals.length ? "ACTIVE" : "STANDBY"}</p>
        </div>
      </div>

      {/* 📊 CHART */}
      <div style={{ width: "100%", height: 300, marginTop: 30 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const cardStyle = {
  flex: 1,
  background: "#111827",
  color: "white",
  padding: "16px",
  borderRadius: "12px",
  textAlign: "center",
};

export default Signals;