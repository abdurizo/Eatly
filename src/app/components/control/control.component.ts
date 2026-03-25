import { Component } from '@angular/core';
import { PurchasCardComponent } from '../purchas-card/purchas-card.component';
import { PurchasesIncreasedCardComponent } from '../purchases-increased-card/purchases-increased-card.component';


@Component({
  selector: 'app-control',
  standalone: true,
  imports: [PurchasCardComponent,PurchasesIncreasedCardComponent],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

}
