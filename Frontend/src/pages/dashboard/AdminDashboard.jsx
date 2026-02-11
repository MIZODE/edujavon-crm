import { StatCard } from "@/components/StatCard";
import { BookOpen, Users, Building2, TrendingUp, AlertCircle, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Panel</h1>
        <p className="text-muted-foreground">
          Tizimning umumiy ko'rinishi va statistikasi
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Jami Kitoblar"
          value="12,543"
          description="Barcha filiallarda"
          icon={BookOpen}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Faol Foydalanuvchilar"
          value="3,892"
          description="Oxirgi 30 kun"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Filiallar"
          value="8"
          description="Shahar bo'ylab"
          icon={Building2}
          variant="default"
        />
        <StatCard
          title="Kunlik O'sish"
          value="+245"
          description="Yangi registratsiyalar"
          icon={TrendingUp}
          trend={{ value: 18, isPositive: true }}
          variant="primary"
        />
      </div>

      {/* Operational Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Faol Ijaralar"
          value="892"
          description="Hozirda"
          icon={BookOpen}
          variant="primary"
        />
        <StatCard
          title="Kechikishlar"
          value="47"
          description="Qaytarilmagan kitoblar"
          icon={AlertCircle}
          variant="destructive"
        />
        <StatCard
          title="Kutish Ro'yxati"
          value="156"
          description="Faol bronlar"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Oylik Daromad"
          value="15.4M"
          description="Jarima va to'lovlar"
          icon={DollarSign}
          trend={{ value: 23, isPositive: true }}
          variant="success"
        />
      </div>

      {/* Charts and Details */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-border/50">
          <CardHeader>
            <CardTitle>Oylik Statistika</CardTitle>
            <CardDescription>
              So'nggi 6 oy davomida ijara dinamikasi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart Component (Recharts)
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 border-border/50">
          <CardHeader>
            <CardTitle>Eng Mashhur Kitoblar</CardTitle>
            <CardDescription>
              Bu oyda eng ko'p o'qilgan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "O'tkan kunlar", author: "Abdulla Qodiriy", count: 45 },
                { title: "Sariq devni minib", author: "Xudoyberdi To'xtaboyev", count: 38 },
                { title: "Ufq", author: "Said Ahmad", count: 32 },
                { title: "Kecha va Kunduz", author: "Cho'lpon", count: 28 },
                { title: "Qo'shchinor chiroqlari", author: "Abdulla Qahhor", count: 25 },
              ].map((book, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{book.title}</p>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm font-semibold">{book.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>So'nggi Faoliyat</CardTitle>
              <CardDescription>Tizimda so'nggi amalga oshirilgan harakatlar</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Barchasini ko'rish
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: "Yangi kitob qo'shildi", user: "Staff: Aziza Karimova", time: "5 daqiqa oldin", type: "success" },
              { action: "Kechikkan ijara", user: "User: Sardor Abdullayev", time: "15 daqiqa oldin", type: "warning" },
              { action: "Yangi foydalanuvchi", user: "Malika Rahimova", time: "1 soat oldin", type: "info" },
              { action: "Bron tasdiqlandi", user: "Staff: Jasur Toshmatov", time: "2 soat oldin", type: "success" },
              { action: "Transfer yakunlandi", user: "Filial: Chilonzor → Yunusobod", time: "3 soat oldin", type: "info" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`h-2 w-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-success' :
                  activity.type === 'warning' ? 'bg-warning' : 'bg-primary'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.user}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
