import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/interfaces/address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {
  @Input() userId: number = 1;
  @Input() default = false;
  @Input() address: any;
  @Output() handleAddressRemoveEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private addressService: AddressService) { }

  openEditAddressDialog(addressId: number) {

    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
      data: addressId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addressService.getAddressesByUserId(this.userId).subscribe((res) => {
        this.address = res.find((address: Address) => address.id === addressId);
      });
    });
  }

  handleAddressRemove(addressId: number) {
    this.handleAddressRemoveEvent.emit(addressId);
  }

  ngOnInit(): void {
  }

}
