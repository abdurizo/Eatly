import { Component, Input } from '@angular/core';
import { RestaurantInterface } from '../../../models/restaurant';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
@Input() data!:RestaurantInterface;
}
