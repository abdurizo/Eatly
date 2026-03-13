import { Component } from '@angular/core';
import { PurchasCardComponent } from '../../../components/purchas-card/purchas-card.component';
import { PurchasesIncreasedCardComponent } from '../../../components/purchases-increased-card/purchases-increased-card.component';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [PurchasCardComponent,PurchasesIncreasedCardComponent],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

}
