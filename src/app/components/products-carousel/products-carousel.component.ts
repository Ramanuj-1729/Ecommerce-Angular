import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './products-carousel.component.scss',
  ]
})
export class ProductsCarouselComponent implements OnInit, AfterViewInit {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider: any;
  productPerView: number[] = [1, 2];
  currentSlide: number = 1;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
        slides: {
          perView: this.productPerView.length >= 4 ? 4 : this.productPerView.length,
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
