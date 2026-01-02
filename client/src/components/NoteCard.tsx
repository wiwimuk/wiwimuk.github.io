import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { Link } from "wouter";
import type { Note } from "@/types/content";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const { id, slug, title, excerpt, category, tags, date, readTime, imageUrl } = note;
  
  return (
    <Link href={`/note/${slug}`}>
      <Card className="hover-elevate cursor-pointer h-full flex flex-col" data-testid={`card-note-${id}`}>
        {imageUrl && (
          <div className="w-full aspect-video overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader className="flex-1 space-y-3 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" data-testid={`badge-category-${id}`}>{category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold leading-tight" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </CardHeader>
        <CardContent className="pt-0 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs" data-testid={`badge-tag-${tag}-${id}`}>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
