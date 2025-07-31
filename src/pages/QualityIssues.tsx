import { mockData } from "@/data/mockData";

const QualityIssues = () => {
  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-exclamation-circle" style={{ color: 'hsl(var(--warning))' }}></i>
          Quality Issues
        </h2>
        <p className="caption">Service quality and standards monitoring</p>
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
                <span className={`badge ${issue.priority === 'High' ? 'badge-critical' : 'badge-warning'}`}>
                  {issue.priority}
                </span>
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
              <button className="btn btn-primary btn-sm">Take Action</button>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-comment"></i>
                Add Note
              </button>
            </div>
          </div>
        ))}
      </div>

      {mockData.issues.quality.length === 0 && (
        <div className="card text-center" style={{ padding: 'var(--space-xl)' }}>
          <i className="fas fa-star" style={{ 
            fontSize: '3rem', 
            color: 'hsl(var(--warning))',
            marginBottom: 'var(--space)'
          }}></i>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>No Quality Issues</h3>
          <p className="text-muted">All quality standards are being met across franchises.</p>
        </div>
      )}
    </div>
  );
};

export default QualityIssues;