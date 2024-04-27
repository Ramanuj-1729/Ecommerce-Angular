import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShippingAddressDialogComponent } from 'src/app/components/shipping-address-dialog/shipping-address-dialog.component';
import { AddAddressDialogComponent } from 'src/app/components/add-address-dialog/add-address-dialog.component';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/interfaces/address';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  userId: number = 1;

  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private router: Router, private cdr: ChangeDetectorRef, public dialog: MatDialog, private addressService: AddressService, private tokenService: TokenService) { }

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
  selectedAddress: any = {};

  openShippingAddressDialog() {

    const dialogRef = this.dialog.open(ShippingAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addressService.getAddressesByUserId(this.userId).subscribe((data: Address[]) => {
          this.selectedAddress = data.find((address: Address) => address.id === result);
        });
      }
    });
  }

  openAddAddressDialog() {

    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((data: Address[]) => {
        this.selectedAddress = data.find((address: Address) => address.isDefault === true) || data[0];
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.stepper.selectedIndex = 1;
    }, 0);

    const id = this.tokenService.getTokenData()?.id;
    if (id) {
      this.userId = parseInt(id);
    }

    this.addressService.getAddressesByUserId(this.userId).subscribe((data: Address[]) => {
      this.selectedAddress = data.find((address: Address) => address.isDefault === true) || data[0];
    });
    
  }

}
