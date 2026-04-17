import { Component, Input } from '@angular/core';
import { ArticleInterface } from '../../../models/articles';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
@Input() data!:ArticleInterface
}
