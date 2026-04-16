import { Component } from '@angular/core';
import { GetDiscountComponent } from '../../../components/get-discount/get-discount.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GetDiscountComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
