import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
})
export class SingUpComponent {
  @Output() close = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
