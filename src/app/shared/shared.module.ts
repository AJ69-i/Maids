import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgxSpinnerModule,
    MatButtonModule
  ]
})
export class SharedModule { }
