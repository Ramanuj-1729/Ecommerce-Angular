import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private orderService: OrderService, private tokenService: TokenService) { }

  ngOnInit(): void {

    const userId = this.tokenService.getTokenData()?.id;

    if (userId) {
      this.orderService.postOrder(parseInt(userId)).subscribe((data: any) => {
        if(data) {
          console.log(data);
        }
      },
      (error) => {
        console.log(error);
      });
    }
  }

}
