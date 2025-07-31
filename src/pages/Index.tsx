import { mockData } from "@/data/mockData";

const Index = () => {
  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      {/* Statistics Cards */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-tachometer-alt" style={{ color: 'hsl(var(--primary))' }}></i>
            Dashboard Overview
          </h2>
          <p className="caption">Real-time monitoring of all franchise operations</p>
        </div>
        
        <div className="grid grid-cols-auto" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
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
                <p className="caption">Requires immediate attention</p>
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
                <p className="caption">Service standards monitoring</p>
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
                <p className="caption">Documentation & compliance</p>
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
                  {mockData.franchisees.filter(f => f.status === 'Active').length}
                </p>
                <p className="caption">Currently operational</p>
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

      {/* Recent Activity */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-clock" style={{ color: 'hsl(var(--primary))' }}></i>
            Recent Activity
          </h2>
          <p className="caption">Latest issues and updates across all locations</p>
        </div>
        
        <div className="grid grid-cols-auto">
          {/* Most recent critical issue */}
          {mockData.issues.critical.slice(0, 1).map((issue) => (
            <div key={issue.id} className="card hover-lift" style={{
              borderLeft: '4px solid hsl(var(--danger))'
            }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-exclamation-triangle" style={{ color: 'hsl(var(--danger))' }}></i>
                  <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{issue.type}</h3>
                </div>
                <span className="badge badge-critical">Critical</span>
              </div>
              <p className="body-text text-muted mb-4">{issue.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted">
                <span>{issue.franchisee}</span>
                <span>•</span>
                <span>{issue.dateReported}</span>
              </div>
            </div>
          ))}

          {/* Most recent quality issue */}
          {mockData.issues.quality.slice(0, 1).map((issue) => (
            <div key={issue.id} className="card hover-lift" style={{
              borderLeft: '4px solid hsl(var(--warning))'
            }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-exclamation-circle" style={{ color: 'hsl(var(--warning))' }}></i>
                  <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{issue.type}</h3>
                </div>
                <span className="badge badge-warning">{issue.priority}</span>
              </div>
              <p className="body-text text-muted mb-4">{issue.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted">
                <span>{issue.franchisee}</span>
                <span>•</span>
                <span>{issue.dateReported}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Franchisee Status Summary */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-users" style={{ color: 'hsl(var(--primary))' }}></i>
            Franchisee Status
          </h2>
          <p className="caption">Quick overview of all franchise locations</p>
        </div>
        
        <div className="grid grid-cols-auto">
          {mockData.franchisees.map((franchisee) => (
            <div key={franchisee.id} className="card hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{franchisee.name}</h3>
                <span className={`badge ${franchisee.compliance === 'Compliant' ? 'badge-compliant' : 'badge-critical'}`}>
                  {franchisee.compliance}
                </span>
              </div>
              <p className="caption mb-4">{franchisee.location}</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--danger))' }}>
                    {mockData.issues.critical.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Critical</p>
                </div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--warning))' }}>
                    {mockData.issues.quality.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Quality</p>
                </div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>
                    {mockData.issues.administrative.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Admin</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
