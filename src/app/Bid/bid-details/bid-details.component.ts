import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'Models/Bid';
import { BidService } from 'Services/bid.service';

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {
  id: number
  bid: Bid
  constructor(private route: ActivatedRoute, private bidService: BidService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bid = new Bid();
    this.bidService.getBidById(this.id).subscribe(data => {
      this.bid = data;
    });
  }

}
