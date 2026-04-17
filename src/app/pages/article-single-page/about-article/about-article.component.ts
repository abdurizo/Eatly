import { Component } from '@angular/core';
import { ArticleInterface } from '../../../models/articles';
import { ArticleService } from '../../../services/article.service';
import { ArticleCardComponent } from '../../../components/article-card/article-card.component';

@Component({
  selector: 'app-about-article',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './about-article.component.html',
  styleUrl: './about-article.component.css'
})
export class AboutArticleComponent {
 article!: ArticleInterface[];
  /**
   * 
   */
  constructor(private articleService:ArticleService){}
  async ngOnInit() {
    this.article = await this.articleService.getArticlesDate()
  }
}
