import { Component } from '@angular/core';
import { ControlComponent } from '../../components/control/control.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { HeroComponent } from './hero/hero.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [HeroComponent,PricingTableComponent,ControlComponent,ReviewsComponent],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export class PricingPageComponent {

}
