interface Comment {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: any;
}
interface Pasta {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}

interface ReservationType {
  createdAt: string;
  dateTime: string;
  name: string;
  numberOfPersons: number;
  phone: string;
  smoking: boolean;
  specialRequests: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export type { Pasta, Comment, ReservationType };
