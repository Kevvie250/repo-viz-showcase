import React, { useState } from 'react';
import { mockData } from "@/data/mockData";
import { AdvancedFilters } from "@/components/AdvancedFilters";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { Eye, Edit, Phone, Calendar } from 'lucide-react';

const Franchisees = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

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

  const filteredFranchisees = mockData.franchisees.filter(franchisee => {
    if (activeFilters.length === 0) return true;
    
    return activeFilters.some(filter => {
      switch (filter) {
        case 'compliant':
          return franchisee.compliance === 'Compliant';
        case 'non-compliant':
          return franchisee.compliance === 'Non-Compliant';
        case 'active':
          return franchisee.status === 'Active';
        case 'under-review':
          return franchisee.status === 'Under Review';
        default:
          return true;
      }
    });
  });

  const tableColumns = [
    { 
      key: 'name', 
      header: 'Franchise Name',
      render: (value: string, row: any) => (
        <div>
          <div className="font-semibold">{value}</div>
          <div className="text-sm text-muted">{row.location}</div>
        </div>
      )
    },
    { 
      key: 'compliance', 
      header: 'Compliance',
      render: (value: string) => (
        <span className={`badge ${value === 'Compliant' ? 'badge-compliant' : 'badge-critical'}`}>
          {value}
        </span>
      )
    },
    { 
      key: 'status', 
      header: 'Status',
      render: (value: string) => (
        <span className={`badge ${value === 'Active' ? 'badge-info' : 'badge-warning'}`}>
          {value}
        </span>
      )
    },
    { key: 'phone', header: 'Phone' },
    { key: 'lastAudit', header: 'Last Audit' },
    { 
      key: 'issues', 
      header: 'Issues',
      render: (_: any, row: any) => {
        const criticalCount = mockData.issues.critical.filter(issue => issue.franchisee === row.name).length;
        const qualityCount = mockData.issues.quality.filter(issue => issue.franchisee === row.name).length;
        return (
          <div className="flex gap-2">
            <span className="text-danger font-semibold">{criticalCount}</span>
            <span className="text-warning font-semibold">{qualityCount}</span>
          </div>
        );
      }
    }
  ];

  const tableActions = [
    {
      label: 'View Profile',
      icon: <Eye className="h-4 w-4" />,
      onClick: (row: any) => console.log('View profile:', row),
      variant: 'default' as const
    },
    {
      label: 'Schedule Audit',
      icon: <Calendar className="h-4 w-4" />,
      onClick: (row: any) => console.log('Schedule audit:', row),
      variant: 'default' as const
    },
    {
      label: 'Contact',
      icon: <Phone className="h-4 w-4" />,
      onClick: (row: any) => console.log('Contact:', row),
      variant: 'outline' as const
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-users" style={{ color: 'hsl(var(--primary))' }}></i>
          Franchisees
        </h2>
        <p className="caption">Manage and monitor all franchise locations</p>
      </div>

      <AdvancedFilters
        onFilterChange={handleFilterChange}
        activeFilters={activeFilters}
        onRemoveFilter={handleRemoveFilter}
      />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">
            Showing {filteredFranchisees.length} of {mockData.franchisees.length} franchisees
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('cards')}
            className={`btn btn-sm ${viewMode === 'cards' ? 'btn-primary' : 'btn-outline'}`}
          >
            <i className="fas fa-th-large"></i>
            Cards
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`btn btn-sm ${viewMode === 'table' ? 'btn-primary' : 'btn-outline'}`}
          >
            <i className="fas fa-table"></i>
            Table
          </button>
        </div>
      </div>
      
      {viewMode === 'table' ? (
        <ResponsiveTable
          data={filteredFranchisees}
          columns={tableColumns}
          actions={tableActions}
          compact={false}
        />
      ) : (
        <div className="grid grid-cols-auto">
          {filteredFranchisees.map((franchisee) => (
            <div key={franchisee.id} className="card hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="franchise-name" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                    <div className="status-indicator">
                      <i className="fas fa-user" style={{ marginRight: '0.5rem' }}></i>
                      {franchisee.name}
                    </div>
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
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'hsl(var(--success))' }}>
                      Online
                    </p>
                    <p className="caption">Status</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="btn btn-outline btn-sm">
                  <Eye className="h-4 w-4" />
                  View Profile
                </button>
                <button className="btn btn-primary btn-sm">
                  <Calendar className="h-4 w-4" />
                  Schedule Audit
                </button>
                <button className="btn btn-outline btn-sm">
                  <Phone className="h-4 w-4" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredFranchisees.length === 0 && (
        <div className="card text-center" style={{ padding: 'var(--space-xl)' }}>
          <i className="fas fa-search" style={{ 
            fontSize: '3rem', 
            color: 'hsl(var(--gray-400))',
            marginBottom: 'var(--space)'
          }}></i>
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>No franchisees found</h3>
          <p className="text-muted">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default Franchisees;