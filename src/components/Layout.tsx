
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        {/* Content with flex layout */}
        <div className="flex w-full">
          <AppSidebar />
          
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
