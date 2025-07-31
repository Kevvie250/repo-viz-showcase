import { mockData } from "@/data/mockData";

const AdministrativeIssues = () => {
  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-file-alt" style={{ color: 'hsl(var(--primary))' }}></i>
          Administrative Issues
        </h2>
        <p className="caption">Documentation, compliance, and administrative matters</p>
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
                <span className={`badge ${
                  issue.priority === 'High' ? 'badge-critical' : 
                  issue.priority === 'Medium' ? 'badge-warning' : 'badge-info'
                }`}>
                  {issue.priority}
                </span>
                <i className={`fas ${
                  issue.status === 'Resolved' ? 'fa-check-circle' :
                  issue.status === 'In Progress' ? 'fa-clock' : 'fa-times-circle'
                }`} style={{ color: 
                  issue.status === 'Resolved' ? 'hsl(var(--success))' :
                  issue.status === 'In Progress' ? 'hsl(var(--warning))' : 'hsl(var(--danger))'
                }}></i>
              </div>
            </div>
            <p className="body-text text-muted mb-4">{issue.description}</p>
            <div style={{ marginBottom: 'var(--space)' }}>
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-building" style={{ color: 'hsl(var(--gray-400))' }}></i>
                <span style={{ fontSize: '14px' }}>{issue.franchisee}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-calendar" style={{ color: 'hsl(var(--gray-400))' }}></i>
                <span style={{ fontSize: '14px' }}>Reported: {issue.dateReported}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-flag" style={{ color: 'hsl(var(--gray-400))' }}></i>
                <span style={{ fontSize: '14px' }}>Priority: {issue.priority}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm">View Details</button>
              {issue.status !== 'Resolved' && (
                <button className="btn btn-primary btn-sm">Take Action</button>
              )}
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-download"></i>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {mockData.issues.administrative.length === 0 && (
        <div className="card text-center" style={{ padding: 'var(--space-xl)' }}>
          <i className="fas fa-clipboard-check" style={{ 
            fontSize: '3rem', 
            color: 'hsl(var(--primary))',
            marginBottom: 'var(--space)'
          }}></i>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>No Administrative Issues</h3>
          <p className="text-muted">All administrative requirements are up to date.</p>
        </div>
      )}
    </div>
  );
};

export default AdministrativeIssues;