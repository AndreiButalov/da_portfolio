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
      name: 'Team Partner 1',
      status: 'Team Partner',
      description: `Andrei really kept the togenther with his great organisation
      and clear communication. We wouldn't have got this far without his commitment.`,
      descriptionDe: `Andrei hat das Team mit seiner großartigen Organisation und
      klarer Kommunikation zusammengehalten. Ohne sein Engagement wären wir nicht 
      so weit gekommen.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Team Partner 2',
      status: 'Team Partner',
      description: `Andrei was a top team colleague at DA. His positive commitment 
      and willingness to take on responsibility made a singnificant contribution 
      tu us achieving our goals.`,
      descriptionDe: `Andrei war ein hervorragender Teamkollege bei DA. Sein 
      positives Engagement und die Bereitschaft, Verantwortung zu übernehmen, haben 
      maßgeblich dazu beigetragen, dass wir unsere Ziele erreicht haben.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Team Partner 3',
      status: 'Team Partner',
      description: `It was a great pleasure to work with Andrei. He knows how 
      to push and encourage team members to present the best work possible, 
      always adding something to brainstorm.`,
      descriptionDe: `Es war eine große Freude, mit Andrei zu arbeiten. 
      Er weiß, wie man Teammitglieder motiviert und dazu anregt, die besten 
      Ergebnisse zu präsentieren, und trägt immer etwas zur Ideensammlung bei.`
    },
  ] 
    
}
