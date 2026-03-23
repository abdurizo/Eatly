import { Component } from '@angular/core';
import { DishCardComponent } from '../../../components/dish-card/dish-card.component';

@Component({
  selector: 'app-chicken-vegetables',
  standalone: true,
  imports: [DishCardComponent],
  templateUrl: './chicken-vegetables.component.html',
  styleUrl: './chicken-vegetables.component.css',
})
export class ChickenVegetablesComponent {}
