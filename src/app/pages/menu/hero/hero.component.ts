import { Component } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { GetDiscountComponent } from '../../../components/get-discount/get-discount.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CategoryCardComponent } from '../../../components/category-card/category-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RouterLink,
    SliderModule,
    GetDiscountComponent,
    ButtonModule,
    CarouselModule,
    TagModule,
    CategoryCardComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  products = [1, 2, 3];
}
