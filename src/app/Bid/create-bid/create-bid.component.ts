import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bid } from 'Models/Bid';
import { BidService } from 'Services/bid.service';

@Component({
  selector: 'app-create-bid',
  templateUrl: './create-bid.component.html',
  styleUrls: ['./create-bid.component.css']
})
export class CreateBidComponent implements OnInit {

  bid: Bid = new Bid();
  constructor(private bidService: BidService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBid() {
    this.bidService.createBid(this.bid).subscribe(data => {
      console.log(data);
      this.goToBidList();
    },
      error => console.log(error));
  }

  goToBidList() {
    this.router.navigate(['/bids']);
  }

  onSubmit() {
    console.log(this.bid);
    this.saveBid();
  }

}
