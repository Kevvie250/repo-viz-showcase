import React from 'react';

interface DataVisualizationProps {
  title: string;
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  type: 'chart' | 'progress';
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({ title, data, type }) => {
  if (type === 'progress') {
    return (
      <div className="card">
        <h4 className="font-semibold mb-4">{title}</h4>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm text-muted">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Simple bar chart visualization
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="card">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-20 text-sm font-medium truncate">{item.label}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
              <div
                className="h-6 rounded-full flex items-center justify-end pr-2 text-white text-xs font-medium transition-all duration-500"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                  minWidth: item.value > 0 ? '30px' : '0px'
                }}
              >
                {item.value > 0 && item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};