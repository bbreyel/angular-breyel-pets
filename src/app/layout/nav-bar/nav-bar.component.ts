import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Breyel Pets'
  iconType: string;

  constructor() { }

  ngOnInit() {
    this.iconType = 'expand_more';
  }

  openIcon(): void {
    this.iconType = 'expand_less';
  }

  closeIcon(): void {
    this.iconType = 'expand_more';
  }
}
