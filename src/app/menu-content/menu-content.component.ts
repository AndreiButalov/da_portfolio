import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { LanguageService } from '../shared/language/language.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [
    FooterComponent,
    RouterModule
  ],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss'
})
export class MenuContentComponent {
  constructor(private languageService: LanguageService) { }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }
}
