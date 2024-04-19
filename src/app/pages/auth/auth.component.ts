import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  pageType: string = 'Sign In';

  handlePageType($event: any) {
    this.pageType = $event.tab.textLabel;
  }

  onTabChange(index: number) {
    this.tabGroup.selectedIndex = index;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
