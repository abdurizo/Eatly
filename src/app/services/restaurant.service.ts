import { Injectable } from '@angular/core';
import { RestaurantInterface } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  async getRestaurantDate(): Promise<RestaurantInterface[]> {
    const data = await fetch('http://localhost:3000/restaurantsDate');
    return (await data.json()) ?? [];
  }
  async getRestaurantDateId(id: number): Promise<RestaurantInterface> {
    const data = await fetch(`http://localhost:3000/restaurantsDate/${id}`);
    return (await data.json()) ?? [];
  }
}
