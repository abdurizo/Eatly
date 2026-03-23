import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularComponent } from './popular/popular.component';
import { ChickenVegetablesComponent } from './chicken-vegetables/chicken-vegetables.component';
import { FrequentlyAskedComponent } from '../../components/frequently-asked/frequently-asked.component';

@Component({
  selector: 'app-self-product',
  standalone: true,
  imports: [
    HeroComponent,
    PopularComponent,
    ChickenVegetablesComponent,
    FrequentlyAskedComponent,
  ],
  templateUrl: './self-product.component.html',
  styleUrl: './self-product.component.css',
})
export class SelfProductComponent {}
