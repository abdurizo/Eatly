import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SingUpComponent } from '../sing-up/sing-up.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, SingUpComponent,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  modalType: 'login' | 'sing_up' | null = null;
  /**
   *
   */
  closeModal() {
    this.modalType = null;
    document.body.style.overflow = '';
  }
  /**
   *
   */
  openLogin() {
    this.modalType = 'login';
    document.body.style.overflow = 'hidden';
  }
  /**
   *
   */
  openSingUp() {
    this.modalType = 'sing_up';
    document.body.style.overflow = 'hidden';
  }
  /**
   *
   */
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
