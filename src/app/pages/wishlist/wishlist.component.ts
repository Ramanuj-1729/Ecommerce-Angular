import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  displayedColumns: string[] = ['product', 'name', 'price', 'action'];
  dataSource: any = [];

  constructor(private wishlistService: WishlistService, private zone: NgZone, private tokenService: TokenService) { }

  ngOnInit() {
    let userId = this.tokenService.getTokenData()?.id;

    if(userId) {
      this.wishlistService.getWishlist(userId).subscribe((res) => {
        this.dataSource = res.map((item: any) => ({
          id: item.productId,
          product: item.product.image,
          name: item.product.name,
          price: item.product.price,
          action: 'delete'
        }));
      });
    }
  }

  deleteProductFromWishlist(productId: number) {
    this.zone.run(() => {
      this.dataSource = this.dataSource.filter((item: any) => item.id !== productId);
    },
      this.wishlistService.deleteProductFromWishlist(productId).subscribe());
  }
}
