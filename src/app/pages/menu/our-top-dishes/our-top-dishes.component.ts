import { Component } from '@angular/core';
import { DishCardComponent } from '../../../components/dish-card/dish-card.component';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-our-top-dishes',
  standalone: true,
  imports: [DishCardComponent,],
  templateUrl: './our-top-dishes.component.html',
  styleUrl: './our-top-dishes.component.css',
})
export class OurTopDishesComponent {}
