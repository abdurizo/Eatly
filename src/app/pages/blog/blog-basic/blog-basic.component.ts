import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ArticlesComponent } from '../articles/articles.component';
import { FrequentlyAskedComponent } from '../../../components/frequently-asked/frequently-asked.component';

@Component({
  selector: 'app-blog-basic',
  standalone: true,
  imports: [HeroComponent,ArticlesComponent,FrequentlyAskedComponent],
  templateUrl: './blog-basic.component.html',
  styleUrl: './blog-basic.component.css'
})
export class BlogBasicComponent {

}
