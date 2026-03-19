import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ReviewsCardComponent } from '../../../components/reviews-card/reviews-card.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewsCardComponent,ButtonModule,CarouselModule,TagModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
products = [1, 2, 3, 4, 5, 6];
}
