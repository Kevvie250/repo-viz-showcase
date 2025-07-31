import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header style={{
            background: 'hsl(var(--white))',
            borderBottom: '1px solid hsl(var(--gray-200))',
            boxShadow: 'var(--shadow)'
          }}>
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="franchise-name">Quality Monitoring Dashboard</h1>
                  <p className="caption">Monitor and manage franchise quality standards</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline btn-sm">
                  <i className="fas fa-filter"></i>
                  Filter
                </button>
                <button className="btn btn-outline btn-sm">
                  <i className="fas fa-download"></i>
                  Export
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 page-wrapper">
            <div className="container">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}