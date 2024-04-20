import { Component, ElementRef, ViewChild, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
      addActive(slider.track.details.rel)
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

export interface DialogData {
  img: string;
}

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './product-carousel.component.scss'
  ]
})
export class ProductCarouselComponent implements OnInit{
  @Input() productImages: any = [];

  constructor(public dialog: MatDialog) { }

  openDialog(src: string) {
    this.dialog.open(ProductImageDialog, {
      data: {
        img: src
      },
    });
  }

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("thumbnailRef") thumbnailRef!: ElementRef<HTMLElement>

  slider: any;
  thumbnailSlider: any;
  images = [];

  ngOnInit() {
    // this.images = this.productImages.map((img: any) => img.imageUrl);
    // console.log(this.images);
    
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
    }, 100);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
    if (this.thumbnailSlider) this.thumbnailSlider.destroy()
  }

}

@Component({
  selector: 'product-image-dialog',
  templateUrl: 'product-image-dialog.html',
  styles: [`
    ::ng-deep .mat-dialog-container {
      background-color: #fff;
    }
  `]
})
export class ProductImageDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  imgData = this.data.img;
}
