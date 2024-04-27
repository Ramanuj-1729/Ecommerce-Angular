import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddressService } from 'src/app/services/address.service';
import { TokenService } from 'src/app/services/token.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-address-dialog',
  templateUrl: './add-address-dialog.component.html',
  styleUrls: ['./add-address-dialog.component.scss']
})
export class AddAddressDialogComponent implements OnInit {
  userId: number = 1;

  constructor(public dialogRef: MatDialogRef<AddAddressDialogComponent>, private addressService: AddressService, private tokenService: TokenService) { }

  addAddressFormValue: any = {};

  fullNameFormControl = new FormControl('', [Validators.required]);
  phoneNumberFormControl = new FormControl('', [Validators.required]);
  zipFormControl = new FormControl('', [Validators.required]);
  houseNumberFormControl = new FormControl('', [Validators.required]);
  streetFormControl = new FormControl('', [Validators.required]);
  cityFormControl = new FormControl('', [Validators.required]);
  stateFormControl = new FormControl('', [Validators.required]);
  countryFormControl = new FormControl('', [Validators.required]);
  addressTypeFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  addressType?: string;
  addressTypes: string[] = ['home', 'office', 'other'];
  isDefault: boolean = false;

  setDefaultAddress(event: any) {
    this.isDefault = event.checked;
  }

  onAddAddressFormSubmit() {
    this.addAddressFormValue.addressType = this.addressType;
    this.addAddressFormValue.isDefault = this.isDefault;
    this.addAddressFormValue.userId = this.userId;

    this.addressService.addAddress(this.addAddressFormValue).subscribe();

    this.dialogRef.close();
  }

  ngOnInit(): void {
    const id = this.tokenService.getTokenData()?.id;
    if (id) {
      this.userId = parseInt(id);
    }
  }

}
