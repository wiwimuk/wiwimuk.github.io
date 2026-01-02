import NoteCard from "@/components/NoteCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import { notes } from "@/data/content";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (note.excerpt && note.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">學習筆記</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              歡迎來到我的學習筆記網站！這裡分享我在學習過程中整理的各種筆記，包括數學、程式設計等多個領域。希望這些內容能對你的學習有所幫助。
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="搜尋筆記標題、內容或標籤..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Button variant="outline" className="gap-2" data-testid="button-filter">
              <Filter className="w-4 h-4" />
              篩選
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">找不到符合的筆記</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
