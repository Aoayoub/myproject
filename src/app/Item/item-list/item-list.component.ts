import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'Models/Item';
import { ItemService } from 'Services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getItemList().subscribe(data => {
      this.items = data;
    });
  }

  itemDetails(id: number) {
    this.router.navigate(['item-details', id]);
  }

  updateItem(id: number) {
    this.router.navigate(['update-item', id]);
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(data => {
      console.log(data);
      this.getItems();
    })
  }

}
