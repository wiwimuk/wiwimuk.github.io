export interface Note {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  imageUrl?: string;
  content: string;
}

