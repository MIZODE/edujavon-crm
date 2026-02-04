import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { StatCard } from "@/components/StatCard";
import { BookOpen, Clock, AlertCircle, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

// Mock data
const mockBooks = [
  {
    id: "1",
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    isbn: "978-9943-01-123-4",
    genre: "Tarixiy roman",
    language: "O'zbek",
    publishYear: 1925,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "O'zbek adabiyotining eng nufuzli asarlaridan biri",
    availableCopies: 3,
    totalCopies: 5,
  },
  {
    id: "2",
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    isbn: "978-9943-01-124-1",
    genre: "Fantastika",
    language: "O'zbek",
    publishYear: 1977,
    coverImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
    description: "Zamonaviy o'zbek fantastikasining eng yaxshi namunasi",
    availableCopies: 2,
    totalCopies: 4,
  },
  {
    id: "3",
    title: "Ufq",
    author: "Said Ahmad",
    isbn: "978-9943-01-125-8",
    genre: "Lirik roman",
    language: "O'zbek",
    publishYear: 1963,
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "Sevgi va sadoqat haqidagi ta'sirchan hikoya",
    availableCopies: 1,
    totalCopies: 3,
  },
  {
    id: "4",
    title: "Kecha va Kunduz",
    author: "Cho'lpon",
    isbn: "978-9943-01-126-5",
    genre: "Roman",
    language: "O'zbek",
    publishYear: 1936,
    coverImage:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
    description: "Milliy uyg'onish davri asarlaridan",
    availableCopies: 0,
    totalCopies: 2,
  },
];

export default function ReaderDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleReserve = (bookId) => {
    toast.success("Kitob muvaffaqiyatli bron qilindi!");
  };

  const handleView = (bookId) => {
    toast.info("Kitob tafsilotlari ochilmoqda...");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Mening Kutubxonam
        </h1>
        <p className="text-muted-foreground">
          Kitoblarni qidiring, bronlang va o'qing
        </p>
      </div>

      {/* User Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Faol Ijaralar"
          value="2"
          description="Hozirda o'qiyotgan"
          icon={BookOpen}
          variant="primary"
        />
        <StatCard
          title="Faol Bronlar"
          value="1"
          description="Kutilmoqda"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="O'qilgan Kitoblar"
          value="24"
          description="Jami"
          icon={Star}
          variant="success"
        />
        <StatCard
          title="Kechikishlar"
          value="0"
          description="Muddati o'tgan"
          icon={AlertCircle}
          variant="success"
        />
      </div>

      {/* Current Rentals */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Hozir O'qiyotgan Kitoblar</CardTitle>
          <CardDescription>Sizning faol ijaralaringiz</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: "O'tkan kunlar",
                author: "Abdulla Qodiriy",
                dueDate: "2025-12-05",
                daysLeft: 3,
              },
              {
                title: "Sariq devni minib",
                author: "Xudoyberdi To'xtaboyev",
                dueDate: "2025-12-08",
                daysLeft: 6,
              },
            ].map((book, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-12 rounded bg-muted flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {book.author}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={book.daysLeft <= 3 ? "destructive" : "default"}
                  >
                    {book.daysLeft} kun qoldi
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {book.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Kitob, muallif yoki ISBN bo'yicha qidirish..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Qidirish</Button>
        <Button variant="outline">Filtrlar</Button>
      </div>

      {/* Book Catalog */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Mashhur Kitoblar</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onReserve={handleReserve}
              onView={handleView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
