import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  AlertCircle, 
  FileText, 
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  Building,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Search,
  Download
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data based on the uploaded image structure
const mockData = {
  franchisees: [
    {
      id: 1,
      name: "John Smith",
      location: "Downtown Location",
      phone: "(555) 123-4567",
      email: "john@location.com",
      status: "Active",
      lastAudit: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "North Branch",
      phone: "(555) 987-6543",
      email: "sarah@northbranch.com",
      status: "Under Review",
      lastAudit: "2024-01-10"
    }
  ],
  issues: {
    critical: [
      {
        id: 1,
        franchisee: "Downtown Location",
        type: "Safety Violation",
        description: "Fire safety equipment not maintained",
        dateReported: "2024-01-20",
        priority: "High",
        status: "Open"
      },
      {
        id: 2,
        franchisee: "North Branch",
        type: "Health Code",
        description: "Temperature control failure",
        dateReported: "2024-01-18",
        priority: "Critical",
        status: "In Progress"
      }
    ],
    quality: [
      {
        id: 3,
        franchisee: "Downtown Location",
        type: "Service Standards",
        description: "Customer service response time exceeded",
        dateReported: "2024-01-19",
        priority: "Medium",
        status: "Open"
      }
    ],
    administrative: [
      {
        id: 4,
        franchisee: "North Branch",
        type: "Documentation",
        description: "Missing quarterly reports",
        dateReported: "2024-01-17",
        priority: "Low",
        status: "Resolved"
      }
    ]
  }
};

const QualityDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const getSeverityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge className="bg-critical text-critical-foreground">Critical</Badge>;
      case "High":
        return <Badge className="bg-warning text-warning-foreground">High</Badge>;
      case "Medium":
        return <Badge className="bg-info text-info-foreground">Medium</Badge>;
      case "Low":
        return <Badge className="bg-success text-success-foreground">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "In Progress":
        return <Clock className="h-4 w-4 text-warning" />;
      case "Open":
        return <XCircle className="h-4 w-4 text-critical" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const IssueCard = ({ issue, icon }: { issue: any; icon: React.ReactNode }) => (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-lg font-semibold">{issue.type}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {getSeverityBadge(issue.priority)}
            {getStatusIcon(issue.status)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{issue.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span>{issue.franchisee}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{issue.dateReported}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline">View Details</Button>
          <Button size="sm">Take Action</Button>
        </div>
      </CardContent>
    </Card>
  );

  const FranchiseeCard = ({ franchisee }: { franchisee: any }) => (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {franchisee.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{franchisee.location}</p>
          </div>
          <Badge variant={franchisee.status === "Active" ? "default" : "secondary"}>
            {franchisee.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{franchisee.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{franchisee.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Last audit: {franchisee.lastAudit}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline">View Profile</Button>
          <Button size="sm">Schedule Audit</Button>
        </div>
      </CardContent>
    </Card>
  );

  const StatsCard = ({ title, value, icon, trend, color }: any) => (
    <Card className="shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
          </div>
          <div className={`p-3 rounded-lg ${color === 'text-critical' ? 'bg-critical-light' : 
            color === 'text-warning' ? 'bg-warning-light' : 'bg-info-light'}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <div className="border-b bg-card shadow-header">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Quality Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage franchise quality standards</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Critical Issues"
                value={mockData.issues.critical.length}
                icon={<AlertTriangle className="h-5 w-5" />}
                trend="+2 from last week"
                color="text-critical"
              />
              <StatsCard
                title="Quality Issues"
                value={mockData.issues.quality.length}
                icon={<AlertCircle className="h-5 w-5" />}
                trend="-1 from last week"
                color="text-warning"
              />
              <StatsCard
                title="Admin Issues"
                value={mockData.issues.administrative.length}
                icon={<FileText className="h-5 w-5" />}
                trend="No change"
                color="text-info"
              />
              <StatsCard
                title="Active Franchisees"
                value={mockData.franchisees.length}
                icon={<Building className="h-5 w-5" />}
                trend="+1 new this month"
                color="text-success"
              />
            </div>

            {/* Recent Issues */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Issues</h2>
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search issues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.issues.critical.slice(0, 2).map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    icon={<AlertTriangle className="h-5 w-5 text-critical" />}
                  />
                ))}
                {mockData.issues.quality.slice(0, 1).map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    icon={<AlertCircle className="h-5 w-5 text-warning" />}
                  />
                ))}
              </div>
            </div>

            {/* Franchisees */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Franchisees</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.franchisees.map((franchisee) => (
                  <FranchiseeCard key={franchisee.id} franchisee={franchisee} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="critical" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-critical">🚨 Critical Issues</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.issues.critical.map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    icon={<AlertTriangle className="h-5 w-5 text-critical" />}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quality" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-warning">⚠️ Quality Issues</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.issues.quality.map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    icon={<AlertCircle className="h-5 w-5 text-warning" />}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-info">📋 Administrative Issues</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockData.issues.administrative.map((issue) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    icon={<FileText className="h-5 w-5 text-info" />}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QualityDashboard;