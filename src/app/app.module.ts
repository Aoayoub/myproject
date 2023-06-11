import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee reference/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee reference/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './employee reference/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee reference/employee-details/employee-details.component'
import { UtilisateurListComponent } from './utilisateur/utilisateur-list/utilisateur-list.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurComponent } from './utilisateur/update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './utilisateur/utilisateur-details/utilisateur-details.component';
import { BidListComponent } from './Bid/bid-list/bid-list.component';
import { CreateBidComponent } from './Bid/create-bid/create-bid.component';
import { UpdateBidComponent } from './Bid/update-bid/update-bid.component';
import { BidDetailsComponent } from './Bid/bid-details/bid-details.component';
import { ItemListComponent } from './Item/item-list/item-list.component';
import { CreateItemComponent } from './Item/create-item/create-item.component';
import { UpdateItemComponent } from './Item/update-item/update-item.component';
import { ItemDetailsComponent } from './Item/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    UtilisateurListComponent,
    CreateUtilisateurComponent,
    UpdateUtilisateurComponent,
    UtilisateurDetailsComponent,
    BidListComponent,
    CreateBidComponent,
    UpdateBidComponent,
    BidDetailsComponent,
    ItemListComponent,
    CreateItemComponent,
    UpdateItemComponent,
    ItemDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
