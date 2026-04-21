import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantInterface } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css',
})
export class RestaurantCardComponent {
  @Input() data!: RestaurantInterface;
}
