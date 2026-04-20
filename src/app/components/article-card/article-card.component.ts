import { Component, Input } from '@angular/core';
import { ArticleInterface } from '../../models/articles';
import { RouterLink,} from "@angular/router";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
@Input() data!:ArticleInterface;

}
