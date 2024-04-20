import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() selectedCategories = new EventEmitter<number[]>();
  @Output() selectedBrands = new EventEmitter<number[]>();
  @Output() priceRange = new EventEmitter<number[]>();

  @ViewChild('productCategories') productCategories: any;
  @ViewChild('productBrands') productBrands: any;

  categories: any = [];
  brands: any = [];

  fromAutoTicks = false;
  fromDisabled = false;
  fromInvert = false;
  fromMax = 50000;
  fromMin = 0;
  fromShowTicks = false;
  fromStep = 500;
  fromThumbLabel = true;
  fromValue = 500;
  fromVertical = false;
  fromTickInterval = 1;

  toAutoTicks = false;
  toDisabled = false;
  toInvert = false;
  toMax = 50000;
  toMin = 0;
  toShowTicks = false;
  toStep = 500;
  toThumbLabel = true;
  toValue = this.fromValue + 1;
  toVertical = false;
  toTickInterval = 1;

  getFromSliderTickInterval(): number | 'auto' {
    if (this.fromShowTicks) {
      return this.fromAutoTicks ? 'auto' : this.fromTickInterval;
    }
    return 0;
  }
  getToSliderTickInterval(): number | 'auto' {
    if (this.toShowTicks) {
      return this.toAutoTicks ? 'auto' : this.toTickInterval;
    }
    return 0;
  }

  constructor(private categoryService: CategoryService, private brandService: BrandService) { }

  handleSelectedCategories(event: any): void {
    const selectedCategories: number[] = this.productCategories.selectedOptions.selected.map((item: any) => item.value.id);
    this.selectedCategories.emit(selectedCategories);
  }

  handleSelectedBrands(event: any): void {
    const selectedBrands: number[] = this.productBrands.selectedOptions.selected.map((item: any) => item.value.id);
    this.selectedBrands.emit(selectedBrands);
  }

  handlePriceRange(): void {
    this.priceRange.emit([this.fromValue, this.toValue]);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    },
      (error) => {
        console.error(error);
      });

    this.brandService.getBrands().subscribe((brands) => {
      this.brands = brands;
    },
      (error) => {
        console.error(error);
      });
  }

}
