import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ArticlesComponent } from './articles/articles.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeroComponent,ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
