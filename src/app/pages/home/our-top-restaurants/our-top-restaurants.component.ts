import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../../../components/restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-our-top-restaurants',
  standalone: true,
  imports: [RestaurantCardComponent],
  templateUrl: './our-top-restaurants.component.html',
  styleUrl: './our-top-restaurants.component.css'
})
export class OurTopRestaurantsComponent {

}
