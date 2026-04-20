import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from '../../../components/article-card/article-card.component';
import { ArticleInterface } from '../../../models/articles';
import { ArticleService } from '../../../services/article.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleCardComponent ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  article!: ArticleInterface[];
  /**
   * 
   */
  constructor(private articleService:ArticleService){}
  async ngOnInit() {
    this.article = await this.articleService.getArticlesDate()
  }
}
