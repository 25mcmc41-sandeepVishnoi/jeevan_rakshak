import React from "react";

const kpis = [
  { label: "Active Trips", value: "26" },
  { label: "Online Ambulances", value: "48" },
  { label: "Avg Response", value: "7m 10s" }
];

const modules = [
  "Live Ambulances Map",
  "Bookings Management",
  "Driver Approvals",
  "User Management",
  "Pricing Controls",
  "Coupons",
  "Complaint Center",
  "Refund Management",
  "Revenue Analytics",
  "Emergency Escalation",
  "Hospital Partnership CRM"
];

export default function DashboardPage() {
  return (
    <main className="page">
      <aside className="sidebar">
        <h2>Jeevan Rakshak</h2>
        <ul>
          <li>Dashboard</li>
          <li>Bookings</li>
          <li>Drivers</li>
          <li>Pricing</li>
          <li>Complaints</li>
          <li>Refunds</li>
          <li>Hospitals</li>
        </ul>
      </aside>
      <section className="content">
        <h1>Emergency Operations Dashboard</h1>
        <p>Version 0 control plane for Hyderabad pilot dispatch operations.</p>

        <div className="cards">
          {kpis.map((kpi) => (
            <article key={kpi.label} className="card">
              <p>{kpi.label}</p>
              <h2>{kpi.value}</h2>
            </article>
          ))}
        </div>

        <h2 style={{ marginTop: 24 }}>Operational Modules</h2>
        <div className="moduleGrid">
          {modules.map((module) => (
            <article key={module} className="card">
              <h3>{module}</h3>
              <p>Configured for production rollout with RBAC and audit logging integration.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
