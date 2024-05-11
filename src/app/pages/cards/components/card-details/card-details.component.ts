import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  card!: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("cardDetails")!)) {
      this.card = JSON.parse(localStorage.getItem("cardDetails")!);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
