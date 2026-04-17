import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ArticlesComponent } from './articles/articles.component';
import { FrequentlyAskedComponent } from '../../components/frequently-asked/frequently-asked.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeroComponent,ArticlesComponent,FrequentlyAskedComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
