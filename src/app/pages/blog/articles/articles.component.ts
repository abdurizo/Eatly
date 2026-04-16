import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../../components/article-card/article-card.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

}
