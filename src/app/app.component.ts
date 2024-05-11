import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'maids';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    AOS.init();
  }

  ngOnInit(): void {
    AOS.init();
  }
}
