import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuBasicComponent } from './menu-basic/menu-basic.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
   MenuBasicComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
