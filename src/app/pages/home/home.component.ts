import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { StatsComponent } from './stats/stats.component';
import { QualitySectionComponent } from './quality-section/quality-section.component';
import { OurTopRestaurantsComponent } from './our-top-restaurants/our-top-restaurants.component';
import { OurTopDishesComponent } from './our-top-dishes/our-top-dishes.component';
import { ControlComponent } from './control/control.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GetDiscountComponent } from '../../components/get-discount/get-discount.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    QualitySectionComponent,
    OurTopRestaurantsComponent,
    OurTopDishesComponent,
    ControlComponent,
    ReviewsComponent,
    GetDiscountComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
