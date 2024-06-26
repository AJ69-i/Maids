import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardsInterceptor } from './interceptors/cards/cards.interceptor';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: CardsInterceptor ,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: LoaderInterceptor ,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: ErrorInterceptor ,
      multi: true
    }
  ]
})
export class CoreModule { }
