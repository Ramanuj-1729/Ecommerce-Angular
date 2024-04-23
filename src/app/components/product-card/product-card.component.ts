import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductViewDialogComponent } from '../product-view-dialog/product-view-dialog.component';
import { CategoryService } from 'src/app/services/category.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { TokenService } from 'src/app/services/token.service';

export interface DialogData {
  id: number;
  name: string;
  price: number;
  off: number;
  description: string;
  image: string;
  avalibility: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productData: any = {};
  productCategory: string = '';
  constructor(private router: Router, public dialog: MatDialog, private categoryService: CategoryService, private wishlistService: WishlistService, private tokenService: TokenService) { }

  product: DialogData = {
    id: 0,
    name: '',
    price: 0,
    off: 0,
    description: '',
    image: '',
    avalibility: ''
  };

  openDialog() {

    const dialogRef = this.dialog.open(ProductViewDialogComponent, {
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  maxRating: number = 5;
  showIcons: boolean = false;
  route = this.router.url;

  ngOnInit(): void {
    this.categoryService.getCategoryById(this.productData.categoryId).subscribe((response) => {
      this.productCategory = response.name;
    });

    this.product = {
      id: this.productData.id,
      name: this.productData.name,
      price: this.productData.price,
      off: this.productData.discount,
      description: this.productData.description,
      image: this.productData.image,
      avalibility: this.productData.quantity > 0 ? 'In Stock' : 'Out of Stock',
    }
  }

  addToWishlist() {
    let userId = this.tokenService.getTokenData()?.id;
    if (userId) {
      this.wishlistService.postProductToWishlist(parseInt(userId), this.product.id).subscribe((response) => {
        // console.log(response);
      });
    } else {
      alert('Please login to add product to wishlist');
    }
    // this.wishlistService.postProductToWishlist(6, this.product.id).subscribe((response) => {
    //   console.log(response);
    // });
  }

}