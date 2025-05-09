
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import NotFound from "@/pages/NotFound";

// Consultant pages
import ConsultantDashboard from "@/pages/Consultant/Dashboard";
import ConsultantProfile from "@/pages/Consultant/Profile";
import ConsultantDocuments from "@/pages/Consultant/Documents";

// Organization pages
import OrganizationDashboard from "@/pages/Organization/Dashboard";
import ConsultantSearch from "@/pages/Organization/Search";

// Admin pages
import AdminDashboard from "@/pages/Admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Consultant Routes */}
          <Route path="/consultant/dashboard" element={<ConsultantDashboard />} />
          <Route path="/consultant/profile" element={<ConsultantProfile />} />
          <Route path="/consultant/documents" element={<ConsultantDocuments />} />
          
          {/* Organization Routes */}
          <Route path="/organization/dashboard" element={<OrganizationDashboard />} />
          <Route path="/organization/search" element={<ConsultantSearch />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
