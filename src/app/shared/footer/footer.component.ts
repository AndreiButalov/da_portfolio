import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../language/language.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LanguageService
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() showContactForm: boolean = false;

  flagSrc: string = 'assets/img/pngwing.com.png';

  constructor(private languageService: LanguageService) {
    this.setFlagImage();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
    this.setFlagImage();
  }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }

  private setFlagImage() {
    this.flagSrc = this.languageService.getLanguage()
      ? 'assets/img/pngwing.com.png'
      : 'assets/img/englisch.png';
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false;

  acceptPrivacyPolicy: boolean = false;
  showPrivacyError: boolean = false;
  showSuccessMessage: boolean = false;

  post = {
    endPoint: 'https://andrei-butalov.de/angular-projects/da_portfolio/sendMail.php',
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
              this.displaySuccessMessage();
              ngForm.resetForm();
              this.acceptPrivacyPolicy = false;
            },
            error: (error) => {
              console.error('Error sending mail:', error);
            },
          });
      } else {
        console.log('Mail test enabled - Simulated form submission:', this.contactData);
        ngForm.resetForm();
        this.acceptPrivacyPolicy = false;
      }
    }
  }


  displaySuccessMessage() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}
