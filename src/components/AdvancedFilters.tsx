import React, { useState } from 'react';
import { Filter, X, Search, TrendingUp, AlertTriangle } from 'lucide-react';

interface AdvancedFiltersProps {
  onFilterChange: (filters: any) => void;
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
}

export const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ 
  onFilterChange, 
  activeFilters, 
  onRemoveFilter 
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    { id: 'critical', label: 'Critical Issues', color: 'danger' },
    { id: 'compliant', label: 'Compliant', color: 'success' },
    { id: 'non-compliant', label: 'Non-Compliant', color: 'danger' },
    { id: 'active', label: 'Active', color: 'info' },
    { id: 'under-review', label: 'Under Review', color: 'warning' },
  ];

  return (
    <div className="advanced-filters">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search franchisees, issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              style={{ width: '300px' }}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline btn-sm"
          >
            <Filter className="h-4 w-4" />
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-outline btn-sm">
            <TrendingUp className="h-4 w-4" />
            View Trends
          </button>
          <button className="btn btn-outline btn-sm">
            Export Data
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Filter by Status:</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onFilterChange(option.id)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  activeFilters.includes(option.id)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeFilters.length > 0 && (
        <div className="filter-chips">
          {activeFilters.map((filter) => {
            const option = filterOptions.find(opt => opt.id === filter);
            return (
              <div key={filter} className="filter-chip">
                {option?.label}
                <X 
                  className="h-3 w-3 remove" 
                  onClick={() => onRemoveFilter(filter)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};