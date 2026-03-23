import { Component } from '@angular/core';
import { DishCardComponent } from '../../../components/dish-card/dish-card.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [DishCardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
})
export class PopularComponent {}
