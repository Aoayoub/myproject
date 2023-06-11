import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bid } from 'Models/Bid';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  private baseURL = "http://localhost:8080/api/v1/bids";

  constructor(private httpClient: HttpClient) { }

  getBidList(): Observable<Bid[]> {
    return this.httpClient.get<Bid[]>(`${this.baseURL}`);
  }

  createBid(bid: Bid): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, bid);
  }

  getBidById(id: number): Observable<Bid> {
    return this.httpClient.get<Bid>(`${this.baseURL}/${id}`);
  }

  updateBid(id: number, bid: Bid): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, bid);
  }

  deleteBid(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
