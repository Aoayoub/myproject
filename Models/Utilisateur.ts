import { Bid } from "./Bid";

export class Utilisateur {
  utilisateur_id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bid: Bid[];
  constructor() { }
}
