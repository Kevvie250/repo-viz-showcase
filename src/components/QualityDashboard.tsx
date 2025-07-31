import React from 'react';

// Mock data based on your requirements
const mockData = {
  franchisees: [
    {
      id: 1,
      name: "KELOWNA FRANCHISE",
      location: "Downtown Location", 
      phone: "(555) 123-4567",
      email: "kelowna@purair.com",
      status: "Active",
      lastAudit: "2024-01-15",
      compliance: "Compliant"
    },
    {
      id: 2, 
      name: "VANCOUVER FRANCHISE",
      location: "North Branch",
      phone: "(555) 987-6543", 
      email: "vancouver@purair.com",
      status: "Under Review",
      lastAudit: "2024-01-10",
      compliance: "Non-Compliant"
    }
  ],
  issues: {
    critical: [
      {
        id: 1,
        franchisee: "KELOWNA FRANCHISE",
        type: "Safety Violation", 
        description: "Fire safety equipment not maintained properly",
        dateReported: "2024-01-20",
        priority: "Critical",
        status: "Open"
      },
      {
        id: 2,
        franchisee: "VANCOUVER FRANCHISE", 
        type: "Health Code",
        description: "Temperature control system failure detected",
        dateReported: "2024-01-18",
        priority: "Critical", 
        status: "In Progress"
      }
    ],
    quality: [
      {
        id: 3,
        franchisee: "KELOWNA FRANCHISE",
        type: "Service Standards",
        description: "Customer service response time exceeded standards",
        dateReported: "2024-01-19", 
        priority: "Medium",
        status: "Open"
      }
    ],
    administrative: [
      {
        id: 4,
        franchisee: "VANCOUVER FRANCHISE",
        type: "Documentation",
        description: "Missing quarterly compliance reports",
        dateReported: "2024-01-17",
        priority: "Low", 
        status: "Resolved"
      }
    ]
  }
};

const QualityDashboard = () => {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header style={{
        background: 'hsl(var(--white))',
        borderBottom: '1px solid hsl(var(--gray-200))',
        boxShadow: 'var(--shadow)'
      }}>
        <div className="container">
          <div className="flex items-center justify-between" style={{ padding: 'var(--space) 0' }}>
            <div>
              <h1 className="franchise-name">Quality Monitoring Dashboard</h1>
              <p className="caption">Monitor and manage franchise quality standards</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-filter"></i>
                Filter
              </button>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-download"></i>
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {/* Statistics Cards */}
        <section className="section">
          <div className="grid grid-cols-auto" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginTop: 'var(--space-lg)'
          }}>
            <div className="card hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="caption" style={{ color: 'hsl(var(--gray-500))' }}>Critical Issues</p>
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'hsl(var(--danger))',
                    margin: '0.5rem 0'
                  }}>
                    {mockData.issues.critical.length}
                  </p>
                  <p className="caption">+2 from last week</p>
                </div>
                <div style={{
                  padding: 'var(--space)',
                  borderRadius: 'var(--radius)',
                  background: 'hsl(var(--danger-bg))'
                }}>
                  <i className="fas fa-exclamation-triangle" style={{ 
                    fontSize: '1.25rem',
                    color: 'hsl(var(--danger))'
                  }}></i>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="caption" style={{ color: 'hsl(var(--gray-500))' }}>Quality Issues</p>
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'hsl(var(--warning))',
                    margin: '0.5rem 0'
                  }}>
                    {mockData.issues.quality.length}
                  </p>
                  <p className="caption">-1 from last week</p>
                </div>
                <div style={{
                  padding: 'var(--space)',
                  borderRadius: 'var(--radius)',
                  background: 'hsl(var(--warning-bg))'
                }}>
                  <i className="fas fa-exclamation-circle" style={{ 
                    fontSize: '1.25rem',
                    color: 'hsl(var(--warning))'
                  }}></i>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="caption" style={{ color: 'hsl(var(--gray-500))' }}>Admin Issues</p>
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'hsl(var(--primary))',
                    margin: '0.5rem 0'
                  }}>
                    {mockData.issues.administrative.length}
                  </p>
                  <p className="caption">No change</p>
                </div>
                <div style={{
                  padding: 'var(--space)',
                  borderRadius: 'var(--radius)',
                  background: 'hsl(var(--primary-bg))'
                }}>
                  <i className="fas fa-file-alt" style={{ 
                    fontSize: '1.25rem',
                    color: 'hsl(var(--primary))'
                  }}></i>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="caption" style={{ color: 'hsl(var(--gray-500))' }}>Active Franchisees</p>
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'hsl(var(--success))',
                    margin: '0.5rem 0'
                  }}>
                    {mockData.franchisees.length}
                  </p>
                  <p className="caption">+1 new this month</p>
                </div>
                <div style={{
                  padding: 'var(--space)',
                  borderRadius: 'var(--radius)',
                  background: 'hsl(var(--success-bg))'
                }}>
                  <i className="fas fa-building" style={{ 
                    fontSize: '1.25rem',
                    color: 'hsl(var(--success))'
                  }}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Issues Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-exclamation-triangle" style={{ color: 'hsl(var(--danger))' }}></i>
              Critical Issues
            </h2>
          </div>
          <div className="grid grid-cols-auto">
            {mockData.issues.critical.map((issue) => (
              <div key={issue.id} className="card hover-lift" style={{
                borderLeft: '4px solid hsl(var(--danger))'
              }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-exclamation-triangle" style={{ color: 'hsl(var(--danger))' }}></i>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{issue.type}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-critical">Critical</span>
                    <i className={`fas ${issue.status === 'Open' ? 'fa-times-circle' : 'fa-clock'}`} 
                       style={{ color: issue.status === 'Open' ? 'hsl(var(--danger))' : 'hsl(var(--warning))' }}></i>
                  </div>
                </div>
                <p className="body-text text-muted mb-4">{issue.description}</p>
                <div style={{ marginBottom: 'var(--space)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-building" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.franchisee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.dateReported}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm">View Details</button>
                  <button className="btn btn-primary btn-sm">Take Action</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Issues Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-exclamation-circle" style={{ color: 'hsl(var(--warning))' }}></i>
              Quality Issues
            </h2>
          </div>
          <div className="grid grid-cols-auto">
            {mockData.issues.quality.map((issue) => (
              <div key={issue.id} className="card hover-lift" style={{
                borderLeft: '4px solid hsl(var(--warning))'
              }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-exclamation-circle" style={{ color: 'hsl(var(--warning))' }}></i>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{issue.type}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-warning">Medium</span>
                    <i className="fas fa-times-circle" style={{ color: 'hsl(var(--danger))' }}></i>
                  </div>
                </div>
                <p className="body-text text-muted mb-4">{issue.description}</p>
                <div style={{ marginBottom: 'var(--space)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-building" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.franchisee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.dateReported}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm">View Details</button>
                  <button className="btn btn-primary btn-sm">Take Action</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Issues Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-file-alt" style={{ color: 'hsl(var(--primary))' }}></i>
              Administrative Issues
            </h2>
          </div>
          <div className="grid grid-cols-auto">
            {mockData.issues.administrative.map((issue) => (
              <div key={issue.id} className="card hover-lift" style={{
                borderLeft: '4px solid hsl(var(--primary))'
              }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-file-alt" style={{ color: 'hsl(var(--primary))' }}></i>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{issue.type}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-info">Low</span>
                    <i className="fas fa-check-circle" style={{ color: 'hsl(var(--success))' }}></i>
                  </div>
                </div>
                <p className="body-text text-muted mb-4">{issue.description}</p>
                <div style={{ marginBottom: 'var(--space)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-building" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.franchisee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{issue.dateReported}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm">View Details</button>
                  <button className="btn btn-primary btn-sm">Take Action</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Franchisees Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-users" style={{ color: 'hsl(var(--primary))' }}></i>
              Franchisees
            </h2>
          </div>
          <div className="grid grid-cols-auto">
            {mockData.franchisees.map((franchisee) => (
              <div key={franchisee.id} className="card hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="franchise-name" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                      <i className="fas fa-user" style={{ marginRight: '0.5rem' }}></i>
                      {franchisee.name}
                    </h3>
                    <p className="caption">{franchisee.location}</p>
                  </div>
                  <span className={`badge ${franchisee.compliance === 'Compliant' ? 'badge-compliant' : 'badge-critical'}`}>
                    {franchisee.compliance}
                  </span>
                </div>
                <div style={{ marginBottom: 'var(--space)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-phone" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{franchisee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-envelope" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>{franchisee.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                    <span style={{ fontSize: '14px' }}>Last audit: {franchisee.lastAudit}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm">View Profile</button>
                  <button className="btn btn-primary btn-sm">Schedule Audit</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default QualityDashboard;