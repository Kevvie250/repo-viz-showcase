import { Settings as SettingsIcon, Database, Users, Shield, Server, Wrench } from "lucide-react";

const Settings = () => {
  return (
    <div style={{ paddingTop: 'var(--space-lg)' }}>
      <div className="section-header">
        <h2 className="section-title">
          <i className="fas fa-cog" style={{ color: 'hsl(var(--primary))' }}></i>
          System Settings
        </h2>
        <p className="caption">System administration and configuration tools</p>
      </div>
      
      <div className="grid grid-cols-auto">
        {/* Airtable Management */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--primary))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-database" style={{ color: 'hsl(var(--primary))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>Airtable Management</h3>
            </div>
            <span className="badge badge-info">Connected</span>
          </div>
          <p className="body-text text-muted mb-4">
            Manage Airtable integration, sync data, and configure database connections.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-link" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Status: Connected</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-sync-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Last sync: 2 minutes ago</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-table" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>3 tables configured</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-external-link-alt"></i>
              Open Airtable
            </button>
            <button className="btn btn-outline btn-sm">Configure</button>
            <button className="btn btn-outline btn-sm">
              <i className="fas fa-sync-alt"></i>
              Sync Now
            </button>
          </div>
        </div>

        {/* User Management */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--success))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-users-cog" style={{ color: 'hsl(var(--success))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>User Management</h3>
            </div>
            <span className="badge badge-compliant">Active</span>
          </div>
          <p className="body-text text-muted mb-4">
            Manage user accounts, permissions, and access control for the quality monitoring system.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-user-plus" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>5 active users</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-shield-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>3 permission groups</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Last login: 5 min ago</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-user-plus"></i>
              Add User
            </button>
            <button className="btn btn-outline btn-sm">Manage Roles</button>
          </div>
        </div>

        {/* System Health */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--warning))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-server" style={{ color: 'hsl(var(--warning))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>System Health</h3>
            </div>
            <span className="badge badge-warning">Monitoring</span>
          </div>
          <p className="body-text text-muted mb-4">
            Monitor system performance, uptime, and health metrics for the application.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-heartbeat" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Uptime: 99.9%</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-tachometer-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Response time: 145ms</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-memory" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Memory usage: 68%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-chart-line"></i>
              View Metrics
            </button>
            <button className="btn btn-outline btn-sm">Diagnostics</button>
          </div>
        </div>

        {/* Data Backup */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--primary))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-cloud-download-alt" style={{ color: 'hsl(var(--primary))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>Data Backup</h3>
            </div>
            <span className="badge badge-info">Scheduled</span>
          </div>
          <p className="body-text text-muted mb-4">
            Configure and manage automated backups of system data and configurations.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-calendar-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Last backup: 2 hours ago</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-clock" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Next backup: In 22 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-hdd" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Storage used: 2.3 GB</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-download"></i>
              Backup Now
            </button>
            <button className="btn btn-outline btn-sm">Schedule</button>
          </div>
        </div>

        {/* API Configuration */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--secondary))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-plug" style={{ color: 'hsl(var(--secondary))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>API Configuration</h3>
            </div>
            <span className="badge" style={{ 
              background: 'hsl(262 83% 95%)', 
              color: 'hsl(var(--secondary))',
              border: '1px solid hsl(262 83% 85%)'
            }}>
              Active
            </span>
          </div>
          <p className="body-text text-muted mb-4">
            Manage API keys, endpoints, and external service integrations.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-key" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>3 API keys configured</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-exchange-alt" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>2 active integrations</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-chart-bar" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>1,247 API calls today</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary btn-sm">
              <i className="fas fa-cog"></i>
              Configure
            </button>
            <button className="btn btn-outline btn-sm">View Logs</button>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="card hover-lift" style={{
          borderLeft: '4px solid hsl(var(--warning))'
        }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-tools" style={{ color: 'hsl(var(--warning))' }}></i>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>Maintenance Mode</h3>
            </div>
            <span className="badge badge-compliant">Normal</span>
          </div>
          <p className="body-text text-muted mb-4">
            Enable maintenance mode for system updates and scheduled downtime.
          </p>
          <div style={{ marginBottom: 'var(--space)' }}>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-toggle-off" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Status: Normal operation</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-calendar-check" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Last maintenance: Jan 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock" style={{ color: 'hsl(var(--gray-400))' }}></i>
              <span style={{ fontSize: '14px' }}>Next scheduled: Feb 15, 2024</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">
              <i className="fas fa-power-off"></i>
              Enable Maintenance
            </button>
            <button className="btn btn-outline btn-sm">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;