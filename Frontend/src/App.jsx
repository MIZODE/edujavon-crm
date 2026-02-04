import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import LibrarianDashboard from "./pages/dashboard/LibrarianDashboard";
import ReaderDashboard from "./pages/dashboard/ReaderDashboard";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import LandingPage from "./pages/LandingPages/LandingPage";

const queryClient = new QueryClient();
const userinfo = localStorage.getItem("userinfo");
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
              !userinfo ? (
                <LandingPage />
              ) : (
                <DashboardLayout role="reader">
                  <ReaderDashboard />
                </DashboardLayout>
              )
            }
          />

          {/* <Route
            path="/home"
            element={
              <DashboardLayout role="reader">
                <ReaderDashboard />
              </DashboardLayout>
            }
          />
          {/* Admin panal uchun routlar */}
          <Route
            path="/admin"
            element={
              (!userinfo || userinfo.role !== "admin") ? (
                <Navigate to="/login" replace />
              ) : (
              <DashboardLayout role="admin">
                <AdminDashboard />
              </DashboardLayout>)
            }
          />
          {/* Librarian panal uchun routlar */}
          <Route
            path="/librarian"
            element={
              (!userinfo || userinfo.role !== "librarian") ? (
                <Navigate to="/login" replace />
              ) : (
              <DashboardLayout role="librarian">
                <LibrarianDashboard />
              </DashboardLayout>)
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
