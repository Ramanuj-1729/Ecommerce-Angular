import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  selector: 'app-edit-address-dialog',
  templateUrl: './edit-address-dialog.component.html',
  styleUrls: ['./edit-address-dialog.component.scss']
})
export class EditAddressDialogComponent implements OnInit {
  userId: number = 1;

  constructor(public dialogRef: MatDialogRef<EditAddressDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: number, private addressService: AddressService, private tokenService: TokenService) { }

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

  onEditAddressFormSubmit() {
    const address = {
      fullName: this.fullNameFormControl.value,
      phoneNumber: this.phoneNumberFormControl.value,
      zip: this.zipFormControl.value,
      houseNumber: this.houseNumberFormControl.value,
      street: this.streetFormControl.value,
      city: this.cityFormControl.value,
      state: this.stateFormControl.value,
      country: this.countryFormControl.value,
      addressType: this.addressType,
      isDefault: this.isDefault
    };

    this.addressService.updateAddress(address, this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    const id = this.tokenService.getTokenData()?.id;
    if (id) {
      this.userId = parseInt(id);
    }

    this.addressService.getAddressesByUserId(this.userId).subscribe((data) => {

      this.addAddressFormValue = data.find((address: any) => address.id === this.data);
      this.addressType = this.addAddressFormValue.addressType;
      this.isDefault = this.addAddressFormValue.isDefault;
    });
  }

}
