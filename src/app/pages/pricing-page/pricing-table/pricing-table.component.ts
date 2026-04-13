import { Component } from '@angular/core';
import { AccordionFeatureListComponent } from '../../../components/accordion-feature-list/accordion-feature-list.component';

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [AccordionFeatureListComponent],
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.css'
})
export class PricingTableComponent {

}
