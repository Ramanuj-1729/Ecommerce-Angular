import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number = 0;

  @Output() indexOfFirstItemEvent = new EventEmitter<number>();
  @Output() indexOfLastItemEvent = new EventEmitter<number>();

  pageSize = 6;
  pageSizeOptions: number[] = [6, 12, 24, 32];

  indexOfFirstItem: number = 0;
  indexOfLastItem: number = this.pageSize;

  // pageEvent: PageEvent | undefined;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor() {
  }

  onPageChange(event: any) {
    this.indexOfFirstItem = (event.pageSize * event.pageIndex);
    this.indexOfLastItem = event.pageSize * (event.pageIndex + 1);

    this.indexOfFirstItemEvent.emit(this.indexOfFirstItem);
    this.indexOfLastItemEvent.emit(this.indexOfLastItem);
  }

  ngOnInit(): void {
  }

}
