import { StatCard } from "@/components/StatCard";
import { BookOpen, Users, Clock, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LibrarianDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Kutubxonachi Panel</h1>
        <p className="text-muted-foreground">
          Kundalik vazifalar va tezkor amallar
        </p>
      </div>

      {/* Daily Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Bugungi Ijaralar"
          value="28"
          description="Berilgan kitoblar"
          icon={BookOpen}
          variant="primary"
        />
        <StatCard
          title="Qaytarilganlar"
          value="31"
          description="Bugun qabul qilingan"
          icon={CheckCircle}
          variant="success"
        />
        <StatCard
          title="Yangi Bronlar"
          value="12"
          description="Kutmoqda"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Kechikishlar"
          value="5"
          description="Eslatma yuborish kerak"
          icon={AlertTriangle}
          variant="destructive"
        />
      </div>

      {/* Pending Tasks */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Bronlarni Tasdiqlash</CardTitle>
                <CardDescription>Yangi bronlar ro'yxati</CardDescription>
              </div>
              <Badge variant="secondary">12 ta</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { user: "Aziza Karimova", book: "O'tkan kunlar", time: "10 daqiqa oldin" },
                { user: "Sardor Abdullayev", book: "Sariq devni minib", time: "25 daqiqa oldin" },
                { user: "Malika Rahimova", book: "Ufq", time: "1 soat oldin" },
                { user: "Jasur Toshmatov", book: "Kecha va Kunduz", time: "2 soat oldin" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.book}</p>
                    <p className="text-xs text-muted-foreground">{item.user} • {item.time}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Barchasini ko'rish
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Bugun Qaytarish Kerak</CardTitle>
                <CardDescription>Muddati bugun tugaydigan kitoblar</CardDescription>
              </div>
              <Badge variant="secondary">18 ta</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { user: "Dilshod Rahmonov", book: "Qo'shchinor chiroqlari", time: "14:00 gacha" },
                { user: "Nodira Saidova", book: "Mehrobdan chayon", time: "15:30 gacha" },
                { user: "Farhod Yo'ldoshev", book: "Ikki eshik orasi", time: "17:00 gacha" },
                { user: "Zarina Ibragimova", book: "Yulduzli tunlar", time: "18:00 gacha" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.book}</p>
                    <p className="text-xs text-muted-foreground">{item.user} • {item.time}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              To'liq ro'yxat
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Tezkor Amallar</CardTitle>
          <CardDescription>Eng ko'p ishlatiladigan vazifalar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Kitob Berish</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <CheckCircle className="h-6 w-6 text-success" />
              <span className="text-sm font-medium">Kitob Qabul</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <Clock className="h-6 w-6 text-warning" />
              <span className="text-sm font-medium">Bron Tasdiqlash</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Foydalanuvchi</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
