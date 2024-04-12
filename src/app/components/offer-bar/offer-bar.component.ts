import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-bar',
  templateUrl: './offer-bar.component.html',
  styleUrls: ['./offer-bar.component.scss']
})
export class OfferBarComponent {

  offers: any[] = [
    {
      title: 'Bonus Plus',
      description: 'Get a bonus plus for buying more that three products',
      icon: 'card_giftcard'
    },
    {
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $99',
      icon: 'local_shipping'
    },
    {
      title: 'Money Back Guarantee',
      description: '100% money back guarantee',
      icon: 'paid'
    },
    {
      title: 'Online Support 24/7',
      description: 'Call us: 02 3555 65454 55',
      icon: 'history'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
