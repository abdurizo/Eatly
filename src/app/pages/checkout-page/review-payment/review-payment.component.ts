import { Component } from '@angular/core';
import { CartItemComponent } from '../../../components/cart-item/cart-item.component';

@Component({
  selector: 'app-review-payment',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './review-payment.component.html',
  styleUrl: './review-payment.component.css'
})
export class ReviewPaymentComponent {

}
