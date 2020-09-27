import { Review } from "../Interface/review"

export interface CardItem{
  id:string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  sizes: string[];
  thumbRating:number;
  reviews: Review[];
}
