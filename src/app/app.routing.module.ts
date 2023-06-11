import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee reference/employee-list/employee-list.component';
import { BidListComponent } from "./Bid/bid-list/bid-list.component";
import { ItemListComponent } from "./Item/item-list/item-list.component";
import { UtilisateurListComponent } from "./utilisateur/utilisateur-list/utilisateur-list.component";
import { CreateEmployeeComponent } from './employee reference/create-employee/create-employee.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { CreateBidComponent } from './Bid/create-bid/create-bid.component';
import { CreateItemComponent } from './Item/create-item/create-item.component';
import { UpdateEmployeeComponent } from './employee reference/update-employee/update-employee.component';
import { UpdateUtilisateurComponent } from './utilisateur/update-utilisateur/update-utilisateur.component';
import { UpdateBidComponent } from './Bid/update-bid/update-bid.component';
import { UpdateItemComponent } from './Item/update-item/update-item.component';
import { EmployeeDetailsComponent } from './employee reference/employee-details/employee-details.component';
import { UtilisateurDetailsComponent } from './utilisateur/utilisateur-details/utilisateur-details.component';
import { BidDetailsComponent } from './Bid/bid-details/bid-details.component';
import { ItemDetailsComponent } from './Item/item-details/item-details.component';
const routes: Routes = [
  //utilisateur
  { path: 'utilisateurs', component: UtilisateurListComponent },
  { path: 'create-utilisateur', component: CreateUtilisateurComponent },
  { path: '', redirectTo: 'utilisateurs', pathMatch: 'full' },
  { path: 'update-utilisateur/:id', component: UpdateUtilisateurComponent },
  { path: 'utilisateur-details/:id', component: UtilisateurDetailsComponent },
  //Bid
  { path: 'bids', component: BidListComponent },
  { path: 'create-bid', component: CreateBidComponent },
  { path: '', redirectTo: 'bids', pathMatch: 'full' },
  { path: 'update-bid/:id', component: UpdateBidComponent },
  { path: 'bid-details/:id', component: BidDetailsComponent },
  //Item
  { path: 'items', component: ItemListComponent },
  { path: 'create-item', component: CreateItemComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'update-item/:id', component: UpdateItemComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
