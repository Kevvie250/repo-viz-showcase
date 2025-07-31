// Shared mock data for the quality dashboard
export const mockData = {
  franchisees: [
    {
      id: 1,
      name: "KELOWNA FRANCHISE",
      location: "Downtown Location", 
      phone: "(555) 123-4567",
      email: "kelowna@purair.com",
      status: "Active",
      lastAudit: "2024-01-15",
      compliance: "Compliant"
    },
    {
      id: 2, 
      name: "VANCOUVER FRANCHISE",
      location: "North Branch",
      phone: "(555) 987-6543", 
      email: "vancouver@purair.com",
      status: "Under Review",
      lastAudit: "2024-01-10",
      compliance: "Non-Compliant"
    },
    {
      id: 3,
      name: "CALGARY FRANCHISE", 
      location: "South District",
      phone: "(555) 456-7890",
      email: "calgary@purair.com", 
      status: "Active",
      lastAudit: "2024-01-20",
      compliance: "Compliant"
    }
  ],
  issues: {
    critical: [
      {
        id: 1,
        franchisee: "KELOWNA FRANCHISE",
        type: "Safety Violation", 
        description: "Fire safety equipment not maintained properly",
        dateReported: "2024-01-20",
        priority: "Critical",
        status: "Open"
      },
      {
        id: 2,
        franchisee: "VANCOUVER FRANCHISE", 
        type: "Health Code",
        description: "Temperature control system failure detected",
        dateReported: "2024-01-18",
        priority: "Critical", 
        status: "In Progress"
      },
      {
        id: 3,
        franchisee: "CALGARY FRANCHISE",
        type: "Equipment Failure",
        description: "Main purification unit requires immediate maintenance",
        dateReported: "2024-01-22",
        priority: "Critical",
        status: "Open"
      }
    ],
    quality: [
      {
        id: 3,
        franchisee: "KELOWNA FRANCHISE",
        type: "Service Standards",
        description: "Customer service response time exceeded standards",
        dateReported: "2024-01-19", 
        priority: "Medium",
        status: "Open"
      },
      {
        id: 4,
        franchisee: "VANCOUVER FRANCHISE",
        type: "Product Quality",
        description: "Customer complaints about service quality increase",
        dateReported: "2024-01-17",
        priority: "High", 
        status: "In Progress"
      }
    ],
    administrative: [
      {
        id: 4,
        franchisee: "VANCOUVER FRANCHISE",
        type: "Documentation",
        description: "Missing quarterly compliance reports",
        dateReported: "2024-01-17",
        priority: "Low", 
        status: "Resolved"
      },
      {
        id: 5,
        franchisee: "CALGARY FRANCHISE",
        type: "Training Records",
        description: "Staff training certifications expired",
        dateReported: "2024-01-15",
        priority: "Medium",
        status: "Open"
      }
    ]
  }
};