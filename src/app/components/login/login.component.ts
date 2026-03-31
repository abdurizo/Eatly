import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  @Output() openSingUp = new EventEmitter<void>();
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
