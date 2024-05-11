import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private HttpClient:HttpClient) { }

  getCards(pageIndex?: number):Observable<any> {
    if(pageIndex) {
      return this.HttpClient.get<any>("users?page=" + pageIndex);
    }
    else {
      return this.HttpClient.get<any>("users?page=" + 1);
    }
  }
}
