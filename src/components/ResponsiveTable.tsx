import React, { useState } from 'react';
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

interface ResponsiveTableProps {
  data: any[];
  columns: Array<{
    key: string;
    header: string;
    render?: (value: any, row: any) => React.ReactNode;
  }>;
  actions?: Array<{
    label: string;
    icon: React.ReactNode;
    onClick: (row: any) => void;
    variant?: 'default' | 'critical' | 'outline';
  }>;
  compact?: boolean;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ 
  data, 
  columns, 
  actions,
  compact = false 
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="card" style={{ padding: compact ? 'var(--space-sm)' : 'var(--space-md)' }}>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={compact ? 'compact' : ''}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
                {actions && (
                  <td>
                    <div className="dropdown">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '4px 8px' }}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                      {activeDropdown === index && (
                        <div className="dropdown-menu">
                          {actions.map((action, actionIndex) => (
                            <button
                              key={actionIndex}
                              onClick={() => {
                                action.onClick(row);
                                setActiveDropdown(null);
                              }}
                              className="dropdown-item"
                            >
                              {action.icon}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};