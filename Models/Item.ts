import { Bid } from "./Bid";
import { Status } from "./Status";
import { Category } from "./Category";
export class Item {
  
  item_id: number;
  title: string;
  date_init: Date;
  date_end: Date; 
  initial_price: number;
  bid: Bid[];
  status: Status;
  category: Category;
  constructor() {
    this.category = new Category();
    this.status = new Status();
  }
  
}
