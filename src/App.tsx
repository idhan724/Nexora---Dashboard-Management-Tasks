import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Projects from "@/pages/Projects";
import Teams from "@/pages/Teams";
import "./index.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Teams />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
