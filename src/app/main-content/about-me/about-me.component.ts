import { Component } from '@angular/core';
import { LanguageService } from '../../shared/language/language.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private languageService: LanguageService) { }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }

  aboutMeEn = `I’m a front-end developer based in Kerpen, 
  Germany, helping designers and companies turn their ideas 
  into reality. With creativity and logical thinking, I transform 
  concepts into high-quality products. If you think I’d be a great 
  fit for your project, feel free to get in touch!`;

  aboutMeDe = `Ich bin ein Frontend-Entwickler aus Kerpen, 
  Deutschland, und helfe Designern und Unternehmen dabei, 
  ihre Ideen in die Realität umzusetzen. Mit Kreativität und 
  logischem Denken verwandle ich Konzepte in hochwertige Produkte. 
  Wenn Sie denken, dass ich gut zu Ihrem Projekt passe, zögern 
  Sie nicht, mich zu kontaktieren!`;
}
