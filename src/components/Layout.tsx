
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        {/* Header spans full width */}
        <header className="franchise-header fixed top-0 left-0 right-0 z-50 h-48">
          <div className="header-background-pattern"></div>
          <div className="flex items-center justify-between px-6 py-6 relative z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-white hover:bg-white/20" />
              <div className="text-white">
                <h1 className="text-2xl font-bold">Quality Excellence.</h1>
                <h2 className="text-lg font-medium opacity-90">We monitor and maintain it.</h2>
                <div className="flex items-center gap-4 mt-2 text-sm opacity-80">
                  <span>1 800 QUALITY</span>
                  <span>•</span>
                  <span>franchise-monitor.com</span>
                </div>
                <p className="text-xs mt-1 opacity-70">
                  Please review your Quality Manual and Standards Guide for details of each requirement
                </p>
              </div>
            </div>
            
            <div className="franchise-logo">
              <div className="logo-circle">
                <div className="logo-inner">
                  <div className="logo-text">
                    <div className="logo-brand">FRANCHISE</div>
                    <div className="logo-tagline">QUALITY MONITORING EXPERTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar positioned below header */}
        <AppSidebar className="fixed top-48 left-0 h-[calc(100vh-12rem)] z-40" />
        
        {/* Main content with proper margins for header and sidebar */}
        <main className="flex-1 page-wrapper ml-60 mt-48">
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
