import NoteCard from '../NoteCard'

export default function NoteCardExample() {
  const mockNote = {
    id: "1",
    slug: "微積分學習筆記-極限與連續",
    title: "微積分學習筆記 - 極限與連續",
    excerpt: "深入探討函數極限的定義、性質以及連續函數的概念。包含豐富的例題和解題技巧。",
    category: "數學",
    tags: ["微積分", "極限"],
    date: "2024-11-05",
    readTime: "8 分鐘",
    imageUrl: "/attached_assets/generated_images/Study_notes_thumbnail_3d2a37e8.png",
    content: "# 微積分學習筆記\n\n深入探討函數極限的定義、性質以及連續函數的概念。"
  };

  return (
    <div className="max-w-sm">
      <NoteCard note={mockNote} />
    </div>
  )
}
