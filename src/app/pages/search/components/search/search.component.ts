import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() keyword = new EventEmitter<string>;

  search(keyword: string) {
    this.keyword.emit(keyword ? keyword : "empty");
    // Checking whether the input is empty and the user clicked backspace so the input is empty, so we should show all the product
  }
}
