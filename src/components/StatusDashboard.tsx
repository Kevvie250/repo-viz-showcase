import React from 'react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle } from 'lucide-react';

interface StatusDashboardProps {
  data: {
    uptime: number;
    responseTime: number;
    totalIssues: number;
    resolvedToday: number;
    criticalCount: number;
  };
}

export const StatusDashboard: React.FC<StatusDashboardProps> = ({ data }) => {
  const getTrendIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="h-4 w-4 text-success" />;
    if (value < 0) return <TrendingDown className="h-4 w-4 text-danger" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getHealthStatus = (uptime: number) => {
    if (uptime >= 99.5) return 'health-good';
    if (uptime >= 95) return 'health-warning';
    return 'health-critical';
  };

  return (
    <div className="grid grid-cols-auto mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {/* System Health */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="caption text-muted">System Health</span>
          <div className={`health-indicator ${getHealthStatus(data.uptime)}`}>
            <div className="status-indicator">
              <CheckCircle className="h-3 w-3" />
            </div>
            Operational
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.uptime}%</span>
          {getTrendIcon(0.1)}
        </div>
        <p className="caption">Uptime this month</p>
      </div>

      {/* Response Time */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="caption text-muted">Avg Response Time</span>
          <div className="health-indicator health-good">
            Fast
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.responseTime}ms</span>
          {getTrendIcon(-5)}
        </div>
        <p className="caption">Last 24 hours</p>
      </div>

      {/* Issues Resolved */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="caption text-muted">Resolved Today</span>
          <CheckCircle className="h-4 w-4 text-success" />
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--success))' }}>
            {data.resolvedToday}
          </span>
          {getTrendIcon(2)}
        </div>
        <p className="caption">of {data.totalIssues} total issues</p>
      </div>

      {/* Critical Issues */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="caption text-muted">Critical Issues</span>
          <AlertTriangle className="h-4 w-4 text-danger" />
        </div>
        <div className="flex items-center gap-2">
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: data.criticalCount > 0 ? 'hsl(var(--danger))' : 'hsl(var(--success))'
          }}>
            {data.criticalCount}
          </span>
          {data.criticalCount > 0 ? getTrendIcon(1) : getTrendIcon(-1)}
        </div>
        <p className="caption">Requiring immediate action</p>
      </div>
    </div>
  );
};