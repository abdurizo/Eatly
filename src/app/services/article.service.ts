import { Injectable } from '@angular/core';
import { ArticleInterface } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  async getArticlesDate(): Promise<ArticleInterface[]> {
    const data = await fetch('http://localhost:3000/articlesDate');
    return (await data.json()) ?? [];
  }
  async getArticlesDateId(id:number): Promise<ArticleInterface>{
    const data = await fetch(`http://localhost:3000/articlesDate/${id}`)
     return await data.json();
  }
}
