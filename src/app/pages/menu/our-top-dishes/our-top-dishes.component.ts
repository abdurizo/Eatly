import { Component, OnInit } from '@angular/core';
import { DishCardComponent } from '../../../components/dish-card/dish-card.component';
import { MenuComponent } from '../menu.component';
import { DishInterface } from '../../../models/dish';
import { DishesService } from '../../../services/dishes.service';

@Component({
  selector: 'app-our-top-dishes',
  standalone: true,
  imports: [DishCardComponent,],
  templateUrl: './our-top-dishes.component.html',
  styleUrl: './our-top-dishes.component.css',
})
export class OurTopDishesComponent implements OnInit{
  data: DishInterface[] = [];
    /**
     *
     */
    constructor(private dishesService: DishesService) {}
    /**
     *
     */
    async ngOnInit() {
      this.data = await this.dishesService.getDishsData();
    }
}
