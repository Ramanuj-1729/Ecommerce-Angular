import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  selectedTab = 'dashboard';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  logout() {
    this.changeTab('logout');
    localStorage.removeItem('token');
    this.authService.isLoggedIn = false;  
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
