export interface Course {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: {
    id: number;
    name: string;
    lastName: string;
  }[];
  length: number;
}
