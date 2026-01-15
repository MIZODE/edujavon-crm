import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Library,
  LayoutDashboard,
  BookOpen,
  Users,
  Building2,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = {
  admin: [
    { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
    { name: "Kitoblar", href: "/dashboard/admin/books", icon: BookOpen },
    { name: "Foydalanuvchilar", href: "/dashboard/admin/users", icon: Users },
    { name: "Filiallar", href: "/dashboard/admin/branches", icon: Building2 },
    { name: "Hisobotlar", href: "/dashboard/admin/reports", icon: BarChart3 },
    { name: "Sozlamalar", href: "/dashboard/admin/settings", icon: Settings },
  ],
  librarian: [
    { name: "Dashboard", href: "/dashboard/librarian", icon: LayoutDashboard },
    {
      name: "Bronlar",
      href: "/dashboard/librarian/reservations",
      icon: BookOpen,
    },
    { name: "Ijaralar", href: "/dashboard/librarian/rentals", icon: Users },
    { name: "Katalog", href: "/dashboard/librarian/catalog", icon: Library },
  ],
  reader: [
    { name: "Asosiy", href: "/dashboard/reader", icon: LayoutDashboard },
    {
      name: "Mening Kitoblarim",
      href: "/dashboard/reader/my-books",
      icon: BookOpen,
    },
    { name: "Katalog", href: "/dashboard/reader/catalog", icon: Library },
    { name: "Tarix", href: "/dashboard/reader/history", icon: BarChart3 },
  ],
};

export default function DashboardLayout({ children, role }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userinfo");
    navigate("/");
    location.reload();
  };

  const currentNav = navigation[role];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Library className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg hidden sm:inline-block">
                LibraryCRM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </Button>

            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full"
                >
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {role === "admin"
                        ? "A"
                        : role === "librarian"
                        ? "L"
                        : "R"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuLabel>Mening Hisobim</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Sozlamalar</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Chiqish</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 border-r border-border/50 bg-sidebar pt-16 transition-transform duration-300 md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1 p-4">
            {currentNav.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "justify-start",
                    isActive &&
                      "bg-sidebar-primary text-sidebar-primary-foreground"
                  )}
                  onClick={() => {
                    navigate(item.href);
                    setSidebarOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          <div className="container max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
