import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OurTopRestaurantsComponent } from '../our-top-restaurants/our-top-restaurants.component';
import { OurTopDishesComponent } from '../our-top-dishes/our-top-dishes.component';
import { FrequentlyAskedComponent } from '../../../components/frequently-asked/frequently-asked.component';

@Component({
  selector: 'app-menu-basic',
  standalone: true,
  imports: [
    HeroComponent,
    OurTopRestaurantsComponent,
    OurTopDishesComponent,
    FrequentlyAskedComponent,
  ],
  templateUrl: './menu-basic.component.html',
  styleUrl: './menu-basic.component.css',
})
export class MenuBasicComponent {}
