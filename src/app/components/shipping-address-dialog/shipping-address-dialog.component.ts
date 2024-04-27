import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';
import { AddressService } from 'src/app/services/address.service';
import { TokenService } from 'src/app/services/token.service';

export interface DialogData {
  id: number;
  fullName: string;
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
  userId: number = 1;

  constructor(public dialog: MatDialog, private addressService: AddressService, private zone: NgZone, private tokenService: TokenService) { }

  selectedAddressId: number = 0;

  addresses: any = [];

  openAddAddressDialog() {

    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((data) => {
        this.addresses = data;
      });
    });
  }

  handleAddressRemove(addressId: number) {
    this.addressService.deleteAddress(addressId).subscribe(() => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((data) => {
        this.addresses = data;
      });
    });
  }

  openEditAddressDialog(addressId: number) {

    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
      data: addressId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((data) => {
        this.addresses = data;
      });
    });
  }

  ngOnInit(): void {
    const id = this.tokenService.getTokenData()?.id;
    if (id) {
      this.userId = parseInt(id);
    }
    this.addressService.getAddressesByUserId(this.userId).subscribe((data) => {
      this.selectedAddressId = data.find((address: any) => address.isDefault === true)?.id || data[0].id;
      this.addresses = data;
    });
  }

}
