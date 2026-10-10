const stats = [
  { label: 'Customers', value: '1,284' },
  { label: 'Active Systems', value: '2,089' },
  { label: 'Service Alerts', value: '48' },
  { label: 'Avg. Energy Savings', value: '$342/mo' },
];

const alerts = [
  'System in Wendell is aging and trending above manufacturer specs',
  'Customer has 2 maintenance reminders waiting',
  'Thermostat sync issue on one property in Raleigh',
];

const partners = ['Wendell Pizza & Grill', 'Red Oak Brewhouse', 'Hometown Home Goods'];

export default function App() {
  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <h1>HVACIQ</h1>
        <nav>
          <span>Dashboard</span>
          <span>Customers</span>
          <span>Systems</span>
          <span>Coupons</span>
          <span>Rebates</span>
          <span>Settings</span>
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <div>
            <p className="eyebrow">Contractor Dashboard</p>
            <h2>Operations Overview</h2>
          </div>
          <button>+ New Service</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </section>

        <section className="panels">
          <div className="panel">
            <h3>System Alerts</h3>
            <ul>
              {alerts.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3>Local Partner Offers</h3>
            <ul>
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
