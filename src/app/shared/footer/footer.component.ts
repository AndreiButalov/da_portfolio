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

  acceptPrivacyPolicy: boolean = false;
  showPrivacyError: boolean = false;

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


  onSubmit(ngForm: NgForm) {
    if (!this.acceptPrivacyPolicy) {
      this.showPrivacyError = true;
      return;
    } else {
      this.showPrivacyError = false;
    }
  
   
    if (ngForm.submitted && ngForm.form.valid) {
      if (!this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              console.log('Mail sent successfully:', response);
              ngForm.resetForm();
              this.acceptPrivacyPolicy = false;
            },
            error: (error) => {
              console.error('Error sending mail:', error);
            },
            complete: () => console.info('Mail sending process complete'),
          });
      } else {
        console.log('Mail test enabled - Simulated form submission:', this.contactData);
        ngForm.resetForm();
        this.acceptPrivacyPolicy = false;
      }
    }
  }  
}
