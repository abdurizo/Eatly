
import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-frequently-asked',
  standalone: true,
  imports: [AccordionComponent, ],
  templateUrl: './frequently-asked.component.html',
  styleUrl: './frequently-asked.component.css',
})
export class FrequentlyAskedComponent {}
