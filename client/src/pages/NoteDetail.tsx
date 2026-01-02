import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { notes } from "@/data/content";

export default function NoteDetail() {
  const [, params] = useRoute("/note/:slug");
  const slug = params?.slug;

  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">找不到此筆記</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回筆記列表
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" data-testid="text-category">{note.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{note.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{note.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
              {note.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="outline" data-testid={`badge-tag-${tag}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-share">
                <Share2 className="w-4 h-4" />
                分享
              </Button>
            </div>
          </div>

          {note.imageUrl && (
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={note.imageUrl}
                alt={note.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <MarkdownContent content={note.content} />
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                <ArrowLeft className="w-4 h-4" />
                返回筆記列表
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
