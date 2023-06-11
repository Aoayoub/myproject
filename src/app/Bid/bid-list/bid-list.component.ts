import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid } from 'Models/Bid';
import { BidService } from 'Services/bid.service';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {
  bids: Bid[];

  constructor(private bidService: BidService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBids();
  }

  private getBids() {
    this.bidService.getBidList().subscribe(data => {
      this.bids = data.sort();
    });
  }

  bidDetails(id: number) {
    this.router.navigate(['bid-details', id]);
  }

  updateBid(id: number) {
    this.router.navigate(['update-bid', id]);
  }

  deleteBid(id: number) {
    this.bidService.deleteBid(id).subscribe(data => {
      console.log(data);
      this.getBids();
    })
  }

}
