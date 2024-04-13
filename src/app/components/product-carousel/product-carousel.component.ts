import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";

function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      // addActive(slider.track.details.rel)
      addClickEvents()
      main.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './product-carousel.component.scss'
  ]
})
export class ProductCarouselComponent {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("thumbnailRef") thumbnailRef!: ElementRef<HTMLElement>

  slider: any;
  thumbnailSlider: any;
  images = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/200/300?random=${i}`)

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement)
      this.thumbnailSlider = new KeenSlider(
        this.thumbnailRef.nativeElement,
        {
          initial: 0,
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
        [ThumbnailPlugin(this.slider)]
      )
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
    if (this.thumbnailSlider) this.thumbnailSlider.destroy()
  }

}
