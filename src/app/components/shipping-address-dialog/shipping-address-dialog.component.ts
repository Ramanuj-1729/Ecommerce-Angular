import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';

export interface DialogData {
  id: number;
  fullname: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phoneNumber: string;
  isDefault: boolean;
  addressType: string;
}

@Component({
  selector: 'app-shipping-address-dialog',
  templateUrl: './shipping-address-dialog.component.html',
  styleUrls: ['./shipping-address-dialog.component.scss']
})
export class ShippingAddressDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData[], public dialog: MatDialog) { }

  selectedAddress: number = this.data.find((address) => address.isDefault === true)?.id || this.data[0].id;

  openAddAddressDialog() {

    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  openEditAddressDialog() {

    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  ngOnInit(): void {
  }

}
