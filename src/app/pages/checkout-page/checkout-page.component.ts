import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ReviewPaymentComponent } from './review-payment/review-payment.component';
import { GetDiscountComponent } from '../../components/get-discount/get-discount.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [HeroComponent,ReviewPaymentComponent,GetDiscountComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

}
