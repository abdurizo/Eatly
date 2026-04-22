import { Component, Input, OnInit } from '@angular/core';
import { RestaurantInterface } from '../../../models/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  data!: RestaurantInterface;
  id!: number;
  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
  ) {}
  /**
   *
   */
  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = await this.restaurantService.getRestaurantDateId(this.id);
  }
}
