import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/interfaces/address';

@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.scss']
})
export class AccountAddressComponent implements OnInit {
  @Input() userId: number = 1;

  constructor(private addressService: AddressService, public dialog: MatDialog) { }

  addressList: Address[] = [];

  openDialog() {

    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((data: Address[]) => {
        this.addressList = data;
      });
    });
  }

  handleAddressRemove(addressId: any) {
    this.addressService.deleteAddress(addressId).subscribe((res) => {
      console.log(res);
    });
    this.addressList = this.addressList.filter((address: any) => address.id !== addressId);
  }

  ngOnInit(): void {
    this.addressService.getAddressesByUserId(this.userId).subscribe((res) => {
      this.addressList = res;
    });
  }

}
