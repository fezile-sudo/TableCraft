
export interface Comment {
  _id?: string;
  dishId?: string;
  rating: number;
  author: string;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
  date?: string;
}


export interface Dish {
  _id?: string;
  id?: string;
  name: string;
  image: string;
  category: string;
  label?: string;
  price: number;
  featured?: boolean;
  description: string;

  comments?: Comment[];
}
