import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressDialogComponent } from '../edit-address-dialog/edit-address-dialog.component';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {
  @Input() default = false;
  @Input() address: any;
  @Output() handleAddressRemoveEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  openDialog() {

    const dialogRef = this.dialog.open(EditAddressDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  handleAddressRemove(addressId: number) {
    this.handleAddressRemoveEvent.emit(addressId);
  }

  ngOnInit(): void {
  }

}
