import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ReviewPaymentComponent } from './review-payment/review-payment.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [HeroComponent,ReviewPaymentComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

}
