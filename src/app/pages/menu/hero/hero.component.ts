import { Component } from '@angular/core';
import { GetDiscountComponent } from '../../../components/get-discount/get-discount.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GetDiscountComponent,ButtonModule,CarouselModule,TagModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  products = [1,2,3]
}
