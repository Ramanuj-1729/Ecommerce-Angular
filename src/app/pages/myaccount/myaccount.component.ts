import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private router: Router) { }

  selectedTab = 'dashboard';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  logout() {
    this.changeTab('logout');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
