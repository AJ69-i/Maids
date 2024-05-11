import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardsService } from 'src/app/core/services/cards/cards.service';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit {

  cards:       any[] = [];
  copiedCards: any[] = [];

  // Pagination properties
  totalCards: number = 0;
  pageSize:   number = 0;
  pageIndex:  number = 0;

  @Output() paginationIndex = new EventEmitter;

  private subscription!: Subscription;

  constructor(private Cards: CardsService) {

  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.subscription = this.Cards.getCards().subscribe({
      next:(response)=> {
        if (response) {
          this.cards = this.copiedCards = response.data?.slice() ?? [];  // Create a copy to avoid modifying original
          this.totalCards = response.total ?? 0;
          this.pageSize = response.per_page ?? 0;
        }
      }
    });
  }

  handlePageChange(event: any) {
     // Handle page index change logic here
    this.pageIndex = event.pageIndex;
    this.paginationIndex.emit(++this.pageIndex);
  }
}
