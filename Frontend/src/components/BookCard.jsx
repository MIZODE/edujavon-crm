import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User } from "lucide-react";

export function BookCard({ book, onReserve, onView }) {
  const isAvailable = book.availableCopies > 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border/50 h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge
            variant={isAvailable ? "default" : "destructive"}
            className="backdrop-blur-sm"
          >
            {isAvailable ? `${book.availableCopies} ta mavjud` : "Mavjud emas"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="line-clamp-1">{book.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{book.publishYear}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{book.genre}</span>
          </div>
        </div>

        {book.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
            {book.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onView?.(book.id)}
        >
          Ko'rish
        </Button>
        {isAvailable && (
          <Button className="flex-1" onClick={() => onReserve?.(book.id)}>
            Bron qilish
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
