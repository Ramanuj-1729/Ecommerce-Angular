import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  pageType: string = 'Sign In';

  handlePageType($event: any) {
    this.pageType = $event.tab.textLabel;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
