import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() showContactForm: boolean = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }


  mailTest = true;

  acceptPrivacyPolicy: boolean = false; // Bindet den Zustand der Checkbox
  showPrivacyError: boolean = false; // Steuert die Anzeige der Fehlermeldung

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  //   onSubmit(ngForm: NgForm) {
  //     if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //       this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //         .subscribe({
  //           next: (response) => {

  //             ngForm.resetForm();            
  //           },
  //           error: (error) => {
  //             console.error(error);
  //           },
  //           complete: () => console.info('send post complete'),
  //         });
  //     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //       ngForm.resetForm();
  //     }
  //   }

  onSubmit(ngForm: NgForm, privacyCheckbox: any) {
    if (!this.acceptPrivacyPolicy) {
      this.showPrivacyError = true;
      return;
    } else {
      this.showPrivacyError = false;
    }

    if (ngForm.valid) {
      console.log('Form submitted:', this.contactData);
      ngForm.resetForm();
      this.acceptPrivacyPolicy = false; // Reset der Checkbox nach dem Senden
    }
  }
}
