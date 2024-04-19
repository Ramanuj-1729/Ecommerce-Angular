import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories: any = [];
  brands: any = [];

  fromAutoTicks = false;
  fromDisabled = false;
  fromInvert = false;
  fromMax = 10000;
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
  toMax = 10000;
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
