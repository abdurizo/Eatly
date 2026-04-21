import { Component, OnInit } from '@angular/core';
import { RestaurantCardComponent } from '../../../components/restaurant-card/restaurant-card.component';
import { RestaurantInterface } from '../../../models/restaurant';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-our-top-restaurants',
  standalone: true,
  imports: [RestaurantCardComponent],
  templateUrl: './our-top-restaurants.component.html',
  styleUrl: './our-top-restaurants.component.css',
})
export class OurTopRestaurantsComponent implements OnInit {
   data:RestaurantInterface[] = [];
  /**
   * 
   */
  constructor(private restaurantService:RestaurantService){};
  async ngOnInit() {
    this.data = await this.restaurantService.getRestaurantDate();
  }
}
