import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import LibrarianDashboard from "./pages/dashboard/LibrarianDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import LandingPage from "./pages/LandingPages/LandingPage";

const queryClient = new QueryClient();
const userinfo = JSON.parse(localStorage.getItem("userinfo"));
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Landing page va bosh sahifa routi */}
          <Route
            path="/"
            element={
              userinfo[0] && userinfo[0].role == "user" ? ( 
                <DashboardLayout role="user">
                  <UserDashboard />
                </DashboardLayout>
              ) : userinfo[0] && userinfo[0].role == "librarian" ? (
                <DashboardLayout role="librarian">
                  <LibrarianDashboard />
                </DashboardLayout>
              ) : userinfo[0] && userinfo[0].role == "admin" ? (
                <DashboardLayout role="admin">
                  <AdminDashboard />
                </DashboardLayout>
              ) : (
                <LandingPage />
              )
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
