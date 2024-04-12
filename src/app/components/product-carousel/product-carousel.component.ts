import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './product-carousel.component.scss',
  ]
})
export class ProductCarouselComponent implements OnInit {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  @Input() perViewSlide: number = 0;

  slider: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        slides: {
          perView: this.perViewSlide,
          spacing: 10,
        },
      })
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
