import { Component, Input } from '@angular/core';
import { DishInterface } from '../../models/dish';

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [],
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.css'
})
export class DishCardComponent {
@Input() data!:DishInterface;
}
