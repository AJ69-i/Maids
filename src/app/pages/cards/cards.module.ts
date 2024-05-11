import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchModule } from '../search/search.module';
import { PaginationControlsModule } from '../pagination-controls/pagination-controls.module';
import { CardComponent } from './components/card/card.component';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';


@NgModule({
  declarations: [
    CardsComponent,
    CardDetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
    SearchModule,
    PaginationControlsModule,
    LoadingIndicatorModule
  ]
})
export class CardsModule { }
