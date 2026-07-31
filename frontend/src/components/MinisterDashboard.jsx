import React from "react";

export default function MinisterDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "32px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}

      <h1
        style={{
          fontSize: "54px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "30px",
        }}
      >
        Ministerial Operations Dashboard
      </h1>

      {/* Critical Alert */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
          border: "1px solid #e5e7eb",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Critical Flood Risk Escalation
          </h2>

          <div
            style={{
              background: "#dc2626",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Critical
          </div>
        </div>

        <div
          style={{
            marginTop: "28px",
            lineHeight: "2.2",
            fontSize: "18px",
            color: "#111827",
          }}
        >
          <p>
            <strong>District:</strong> Thane West
          </p>

          <p>
            <strong>Operational Impact:</strong> Waterlogging expected across
            multiple sectors.
          </p>

          <p>
            <strong>Citizen Risk:</strong> Potential disruption to transport and
            emergency movement.
          </p>

          <p>
            <strong>Recommended Action:</strong> Mobilize drainage response
            teams immediately.
          </p>

          <p>
            <strong>Assigned Authority:</strong> District Control Office
          </p>
        </div>
      </div>

      {/* District Operational Status */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,.12)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "28px",
          }}
        >
          District Operational Status
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Operational Stability
            </h3>

            <p
              style={{
                fontSize: "18px",
                color: "#374151",
              }}
            >
              Operationally stable with moderate traffic congestion.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Resource Pressure
            </h3>

            <p
              style={{
                fontSize: "18px",
                color: "#374151",
              }}
            >
              Drainage teams operating at 82% utilization.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Governance Risks
            </h3>

            <p
              style={{
                fontSize: "18px",
                color: "#374151",
              }}
            >
              Flood escalation risk increasing in eastern sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}