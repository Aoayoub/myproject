import { Utilisateur } from "./Utilisateur";
import { Item } from "./Item"
export class Bid
{
  bid_id: number;
  price: number;
  utilisateur: Utilisateur;
  item: Item;
  constructor() {
    this.utilisateur = new Utilisateur();
    this.item = new Item();
  }

  
}
