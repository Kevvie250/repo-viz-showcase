import { mockData } from "@/data/mockData";

const Franchisees = () => {
  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-users" style={{ color: 'hsl(var(--primary))' }}></i>
          Franchisees
        </h2>
        <p className="caption">Manage and monitor all franchise locations</p>
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
              <div className="flex flex-col gap-2 items-end">
                <span className={`badge ${franchisee.compliance === 'Compliant' ? 'badge-compliant' : 'badge-critical'}`}>
                  {franchisee.compliance}
                </span>
                <span className={`badge ${franchisee.status === 'Active' ? 'badge-info' : 'badge-warning'}`}>
                  {franchisee.status}
                </span>
              </div>
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
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                <span style={{ fontSize: '14px' }}>Last audit: {franchisee.lastAudit}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
                <span style={{ fontSize: '14px' }}>{franchisee.location}</span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div style={{ 
              background: 'hsl(var(--gray-50))', 
              padding: 'var(--space)', 
              borderRadius: 'var(--radius)',
              marginBottom: 'var(--space)'
            }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'hsl(var(--danger))' }}>
                    {mockData.issues.critical.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Critical</p>
                </div>
                <div>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'hsl(var(--warning))' }}>
                    {mockData.issues.quality.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Quality</p>
                </div>
                <div>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>
                    {mockData.issues.administrative.filter(issue => issue.franchisee === franchisee.name).length}
                  </p>
                  <p className="caption">Admin</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm">View Profile</button>
              <button className="btn btn-primary btn-sm">Schedule Audit</button>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-phone"></i>
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {mockData.franchisees.length === 0 && (
        <div className="card text-center" style={{ padding: 'var(--space-xl)' }}>
          <i className="fas fa-store" style={{ 
            fontSize: '3rem', 
            color: 'hsl(var(--primary))',
            marginBottom: 'var(--space)'
          }}></i>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>No Franchisees</h3>
          <p className="text-muted">No franchise locations are currently registered.</p>
        </div>
      )}
    </div>
  );
};

export default Franchisees;