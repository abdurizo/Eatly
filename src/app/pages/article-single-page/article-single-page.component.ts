import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { ArticleInterface } from '../../models/articles';
import { HeroComponent } from './hero/hero.component';
import { AboutArticleComponent } from './about-article/about-article.component';

@Component({
  selector: 'app-article-single-page',
  standalone: true,
  imports: [HeroComponent,AboutArticleComponent],
  templateUrl: './article-single-page.component.html',
  styleUrl: './article-single-page.component.css',
})
export class ArticleSinglePageComponent implements OnInit{
  data!:ArticleInterface;
  id!: number;
  constructor(private route: ActivatedRoute, private articleServiceId:ArticleService) {}
  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = await this.articleServiceId.getArticlesDateId(this.id);
    console.log('DATA:', this.data);
  }
}
