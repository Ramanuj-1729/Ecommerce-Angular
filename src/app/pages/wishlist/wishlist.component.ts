import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, AfterViewChecked {

  displayedColumns: string[] = ['product', 'name', 'price', 'action'];
  dataSource: any = [];

  constructor(private wishlistService: WishlistService, private cdRef: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
}

  ngOnInit() {
    this.wishlistService.getWishlist(6).subscribe((res) => {
      this.dataSource = res.map((item: any) => ({
        id: item.productId,
        product: item.product.image,
        name: item.product.name,
        price: item.product.price,
        action: 'delete'
      }));
      this.cdRef.detectChanges();
    });
  }

  deleteProductFromWishlist(productId: number) {
    this.wishlistService.deleteProductFromWishlist(productId).subscribe((res) => {
      this.cdRef.detectChanges();
    });
  }


}
