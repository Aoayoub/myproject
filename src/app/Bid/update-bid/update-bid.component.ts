import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bid } from 'Models/Bid';
import { BidService } from 'Services/bid.service';

@Component({
  selector: 'app-update-bid',
  templateUrl: './update-bid.component.html',
  styleUrls: ['./update-bid.component.css']
})
export class UpdateBidComponent implements OnInit {
  id: number;
  bid: Bid = new Bid();
  constructor(private bidService: BidService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bidService.getBidById(this.id).subscribe(data => {
      this.bid = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.bidService.updateBid(this.id, this.bid).subscribe(data => {
      this.goToBidList();
    }
      , error => console.log(error));
  }

  goToBidList() {
    this.router.navigate(['/bids']);
  }

}
