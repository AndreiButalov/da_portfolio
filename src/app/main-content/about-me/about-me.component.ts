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

  aboutMeEn = `I am a fullstack developer and I build modern, user-friendly 
  applications with great passion. My goal is to turn ideas into innovative 
  and reliable solutions that create real value. I work on both frontend and 
  backend, placing strong emphasis on clean code, creative thinking, 
  and continuous development—both professionally and personally.`;

  aboutMeDe = `Ich bin Fullstack-Entwickler und entwickle mit großer Begeisterung moderne, 
  benutzerfreundliche Anwendungen. Mein Ziel ist es, Ideen in innovative und zuverlässige 
  Lösungen umzusetzen, die echten Mehrwert schaffen. Dabei arbeite ich sowohl im Frontend 
  als auch im Backend und lege großen Wert auf sauberen Code, kreatives Denken und 
  kontinuierliche Weiterentwicklung – sowohl fachlich als auch persönlich`;
}
