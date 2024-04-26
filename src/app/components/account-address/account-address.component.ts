import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.scss']
})
export class AccountAddressComponent implements OnInit {

  constructor(private addressService: AddressService, public dialog: MatDialog) { }

  addressList: any = [];

  openDialog() {

    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  handleAddressRemove(addressId: any) {
    this.addressService.deleteAddress(addressId).subscribe((res) => {
      console.log(res);
    });
    this.addressList = this.addressList.filter((address: any) => address.id !== addressId);
  }

  ngOnInit(): void {
    this.addressService.getAddressesByUserId(1).subscribe((res) => {
      this.addressList = res;
    });
  }

}
