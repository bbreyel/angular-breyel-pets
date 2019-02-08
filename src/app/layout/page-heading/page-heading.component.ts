import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent implements OnInit {

  test: 'this is a test string that i want to be a lot longer than what I have set';

  constructor() { }

  ngOnInit() {
  }

}
