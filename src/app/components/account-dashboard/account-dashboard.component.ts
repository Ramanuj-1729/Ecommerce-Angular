import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {
  @Input() userId: number = 1;

  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((data: any) => {
      this.userData = data;
    },
      (error: any) => {
        console.log(error);
      });
  }

}
