export interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  rating: number; // 0 to 5
  coverUrl: string;
}