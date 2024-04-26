import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShippingAddressDialogComponent } from 'src/app/components/shipping-address-dialog/shipping-address-dialog.component';
import { AddAddressDialogComponent } from 'src/app/components/add-address-dialog/add-address-dialog.component';
import { AddressService } from 'src/app/services/address.service';

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
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private router: Router, private cdr: ChangeDetectorRef, public dialog: MatDialog, private zone: NgZone, private addressService: AddressService) { }

  isAddressCompleted = false;
  isOrderSummaryCompleted = false;

  selectionChange(event: any) {
    if (event.selectedIndex === 0) {
      this.router.navigateByUrl('/cart');
    }
  }

  confirmAddress() {
    this.isAddressCompleted = true;
    this.cdr.detectChanges();
    this.stepper.next();
  }

  // dummy address
  addresses: DialogData[] = []

  selectedAddressId: number = 0;
  selectedAddress: DialogData = {
    id: 0,
    fullname: '',
    houseNumber: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phoneNumber: '',
    isDefault: false,
    addressType: ''
  };

  openDialog() {

    const dialogRef = this.dialog.open(ShippingAddressDialogComponent, {
      data: this.addresses
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.zone.run(() => {
          this.selectedAddressId = result;
          this.selectedAddress = this.addresses.find((address) => address.id === this.selectedAddressId) || this.addresses[0];
        });
      }
    });
  }

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

  ngOnInit(): void {
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    }, 0);

    this.addressService.getAddressesByUserId(1).subscribe((data: DialogData[]) => {
      this.addresses = data;
      this.selectedAddressId = this.addresses.find((address) => address.isDefault === true)?.id || this.addresses[0].id;
      this.selectedAddress = this.addresses.find((address) => address.id === this.selectedAddressId) || this.addresses[0];
    });
  }

}
