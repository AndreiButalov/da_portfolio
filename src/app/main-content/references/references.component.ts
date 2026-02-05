import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LanguageService } from '../../shared/language/language.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LanguageService
],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  constructor(private languageService: LanguageService) { }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }


  references = [
    {
      image: 'assets/img/format_quote.png',
      name: 'David Meier',
      status: 'Team Partner',
      description: `Andrei works very reliably and competently. He solves complex problems and communicates clearly, which has helped the team make progress.`,
      descriptionDe: `Andrei arbeitet sehr zuverlässig und kompetent. Er löst komplexe Probleme und kommuniziert dabei klar, was das Team vorangebracht hat.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Frank Marchner',
      status: 'Team Partner',
      description: `Working with Andrei is effective and pleasant. His professionalism and commitment contribute to the team's success.`,
      descriptionDe: `Die Zusammenarbeit mit Andrei ist effektiv und angenehm. Seine Professionalität und sein Engagement tragen zum Erfolg des Teams bei.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Robert Winner',
      status: 'Team Partner',
      description: `Andrei brings technical knowledge to the team and supports the implementation of projects constructively. His cooperative approach makes collaboration easier.`,
      descriptionDe: `Andrei bringt technisches Wissen ins Team und unterstützt die Umsetzung von Projekten konstruktiv. Seine kooperative Art erleichtert die Zusammenarbeit.`
    },
  ] 
    
}
