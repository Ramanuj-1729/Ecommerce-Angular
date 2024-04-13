import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './product-carousel.component.scss',
  ]
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider: any;
  productPerView: number[] = [1, 2];
  currentSlide: number = 1;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
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
