import { Injectable } from '@angular/core';
import { DishInterface } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  async getDishsData(): Promise<DishInterface[]> {
    const data = await fetch('http://localhost:3000/dishesData');
    return (await data.json()) ?? [];
  }
}
