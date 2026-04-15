import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-feature-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-feature-list.component.html',
  styleUrl: './accordion-feature-list.component.css'
})
export class AccordionFeatureListComponent {
 activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
