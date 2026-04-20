import { Component, Input, SimpleChanges } from '@angular/core';
import { ArticleInterface } from '../../../models/articles';
import { ArticleService } from '../../../services/article.service';
import { ArticleCardComponent } from '../../../components/article-card/article-card.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-article',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink, RouterModule],
  templateUrl: './about-article.component.html',
  styleUrl: './about-article.component.css',
})
export class AboutArticleComponent {
  article: ArticleInterface[] = [];
  filteredArticles: ArticleInterface[] = [];
  /**
   *
   */
  @Input() currentId!: number;
  constructor(private articleService: ArticleService) {}

  async ngOnInit() {
    this.article = await this.articleService.getArticlesDate();
    this.updateFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentId']) {
      this.updateFilter();
    }
  }

  updateFilter() {
    this.filteredArticles = this.article
      .filter((i) => String(i.id) !== String(this.currentId))
      .slice(0, 3);
  }
}
