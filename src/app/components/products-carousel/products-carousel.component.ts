import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './products-carousel.component.scss',
  ]
})
export class ProductsCarouselComponent implements OnInit {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @Input() products: any[] = [];

  slider: any;
  currentSlide: number = 1;

  ngOnInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
        slides: {
          perView: this.products.length >= 4 ? 4 : this.products.length,
          spacing: 10,
        },
      })
    }, 100);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  constructor() { }
}
