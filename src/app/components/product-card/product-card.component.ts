import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductViewDialogComponent } from '../product-view-dialog/product-view-dialog.component';

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
  constructor(private router: Router, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProductViewDialogComponent, {
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  rating: number = 4;
  maxRating: number = 5;
  showIcons: boolean = false;
  route = this.router.url;

  product: DialogData = {
    id: 1,
    name: 'ONTEC E Headset',
    price: 266,
    off: 50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '/assets/images/headphone.png',
    avalibility: 'In Stock',
  }


  ngOnInit(): void {
  }

}