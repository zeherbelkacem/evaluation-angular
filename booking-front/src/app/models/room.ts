import { Category } from "./category";
import { Hotel } from "./hotel";

export interface Room {
    id: number;
    quantity: number;
    hotel: Hotel;
    available: boolean;
    price: number;
    category: Category;

}
