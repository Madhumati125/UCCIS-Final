import React from "react";

function SidebarTask29({ activePage, setActivePage }) {
  const menuItems = [
    "Dashboard",
    "Signals",
    "Telemetry",
    "Incidents",
    "Escalations",
    "Decisions",
    "Replay Sessions",
    "Runtime Logs",
    "Analytics",
    "System Health"
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>UCCIS</h2>
      </div>

      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activePage === item ? "active" : ""}
            onClick={() => setActivePage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarTask29;