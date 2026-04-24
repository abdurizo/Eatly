import { Component } from '@angular/core';
import { SupportServiceService } from '../../services/support-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(
    private supportServiceService: SupportServiceService,
    private messageService: MessageService,
  ) {}
  /**
   *
   */
  async submit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      this.messageService.add({
      severity: 'error',
      summary: 'error',
    });
      return;
    }

    await this.supportServiceService.postSupport(form.value);

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent!',
    });
    form.resetForm();
  }
}
