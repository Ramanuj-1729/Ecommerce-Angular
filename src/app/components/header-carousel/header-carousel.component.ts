import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    './header-carousel.component.scss'
  ]
})
export class HeaderCarouselComponent implements OnInit {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slidesStore: Array<any> = [
    { id: 1, img: "/assets/images/camera-bg.png", title: "Sony Camera", alt: "Sony Camera", heading: "Our Best Products", subHeading: "Special Selection" },
    { id: 2, img: "/assets/images/smartwatch-bg.png", title: "Smart Watch", alt: "Smart Watch", heading: "Biggest Sale", subHeading: "Don't miss it" },
    { id: 3, img: "/assets/images/tv-bg.png", title: "Vigo Smart TV", alt: "Vigo Smart TV", heading: "Massive Sale", subHeading: "Only for today" },
    { id: 4, img: "/assets/images/smartphone-bg.png", title: "Apple Smartphone", alt: "Apple Smartphone", heading: "Biggest Discount", subHeading: "Up to 70%" },
  ]

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      },
        [
          (slider) => {
            let timeout: any;
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 4000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ])
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
