import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../shared/language/language.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private languageService: LanguageService) { }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }
}
