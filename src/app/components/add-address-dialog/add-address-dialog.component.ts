import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address-dialog',
  templateUrl: './add-address-dialog.component.html',
  styleUrls: ['./add-address-dialog.component.scss']
})
export class AddAddressDialogComponent implements OnInit {

  constructor() { }

  seletedAddressType?: string;
  addressTypes: string[] = ['home', 'office', 'other'];

  ngOnInit(): void {
  }

}
