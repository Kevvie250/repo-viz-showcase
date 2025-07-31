import { mockData } from "@/data/mockData";
import { useState } from "react";
import { AdvancedFilters } from "@/components/AdvancedFilters";

const CriticalIssues = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const handleRemoveFilter = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filterId));
  };

  const filteredIssues = mockData.issues.critical.filter(issue => {
    if (activeFilters.length === 0) return true;
    return activeFilters.some(filter => {
      switch (filter) {
        case 'critical':
          return issue.priority === 'Critical';
        default:
          return true;
      }
    });
  });

  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-exclamation-triangle" style={{ color: 'hsl(var(--danger))' }}></i>
          Critical Issues
        </h2>
        <p className="caption">Issues requiring immediate attention and resolution</p>
      </div>

      <AdvancedFilters
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
        onRemoveFilter={handleRemoveFilter}
      />
      
      <div className="grid grid-cols-auto">
        {filteredIssues.map((issue) => (
          <div key={issue.id} className="card hover-lift" style={{
            borderLeft: '4px solid hsl(var(--danger))'
          }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="status-indicator status-offline">
                  <i className="fas fa-exclamation-triangle" style={{ color: 'hsl(var(--danger))' }}></i>
                </div>
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
              <button className="btn btn-critical btn-sm btn-urgent">
                <i className="fas fa-fire"></i>
                Take Action Now
              </button>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-user-plus"></i>
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="card text-center" style={{ padding: 'var(--space-xl)' }}>
          <i className="fas fa-check-circle" style={{ 
            fontSize: '3rem', 
            color: 'hsl(var(--success))',
            marginBottom: 'var(--space)'
          }}></i>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>No Critical Issues</h3>
          <p className="text-muted">
            {activeFilters.length > 0 
              ? "No critical issues match your current filters."
              : "All critical issues have been resolved. Great work!"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default CriticalIssues;