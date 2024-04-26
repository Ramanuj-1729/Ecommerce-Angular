import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-address-dialog',
  templateUrl: './edit-address-dialog.component.html',
  styleUrls: ['./edit-address-dialog.component.scss']
})
export class EditAddressDialogComponent implements OnInit {

  constructor() { }

  seletedAddressType?: string;
  addressTypes: string[] = ['home', 'office', 'other'];

  ngOnInit(): void {
  }

}
