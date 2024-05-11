import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardsService } from 'src/app/core/services/cards/cards.service';
import * as iziToast from "iziToast";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {

  cards:       any[] = [];
  copiedCards: any[] = [];
  searchedCards:  any[] = [];

  private subscription!: Subscription;

  constructor(private Cards: CardsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(index?: number) {
    this.subscription = this.Cards.getCards(index).subscribe({
      next:(response)=> {
        if(response) {
          iziToast.default.success({
            title: "SUCCESS",
            message: "OK",
            timeout: 3000,
            position: 'topRight',
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOutRight',
            drag: true,
            transitionInMobile: 'fadeInDown',
            transitionOutMobile: 'fadeOutDown',
          });
          this.cards = response?.data;
          //We need a copy of the data for searching
          this.copiedCards = response?.data;
        }
      }
    });
  }

  search(event: string) {
     //Checking whether the input is empty and the user clicked backspace so the input is empty, so we should show all the cards
    if(event === "empty") {
      this.cards = this.copiedCards;
    } else {
      //remove white spaces from the searched keyword and make it lower case for filtering
      event = event.trim().toLowerCase();
      //I take a copy of the posts, because i need the whole data again for multiple searching
      this.cards = this.copiedCards;
      this.searchedCards = this.cards.filter((card)=> {
        return card.first_name.toLowerCase().includes(event) ||
        card.last_name.toLowerCase().includes(event) ||
        card.email.toLowerCase().includes(event)
      });
      this.cards = this.searchedCards;
    }
  }

  pagination(index: number) {
    return index ? this.getCards(index) : undefined;
  }

  cardDetails(index: number) {
    localStorage.setItem("cardDetails", JSON.stringify(this.cards[index]));
    this.router.navigateByUrl("cards/" + index);
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    return this.subscription ? this.subscription.unsubscribe() : undefined;
  }
}
