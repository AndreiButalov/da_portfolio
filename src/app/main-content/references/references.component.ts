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
      name: 'David',
      status: 'Team Partner',
      description: `Andrei is an extremely talented and reliable programmer. 
      His ability to solve complex problems while communicating clearly has 
      greatly advanced our team.`,
      descriptionDe: `Andrei ist ein äußerst talentierter und zuverlässiger 
      Programmierer. Seine Fähigkeit, komplexe Probleme zu lösen und dabei klar 
      zu kommunizieren, hat unser Team enorm vorangebracht.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Frank',
      status: 'Team Partner',
      description: `Working with Andrei was always effective and inspiring. 
      His professionalism and dedication make him an indispensable team member.`,
      descriptionDe: `Die Zusammenarbeit mit Andrei war stets effektiv und 
      inspirierend. Seine Professionalität und sein Engagement machen ihn zu 
      einem unverzichtbaren Teammitglied.`
    },
    {
      image: 'assets/img/format_quote.png',
      name: 'Robert',
      status: 'Team Partner',
      description: `Andrei not only has technical expertise but also brings 
      positive and motivating energy to the team. His cooperative nature makes 
      implementing even the most challenging projects easier.`,
      descriptionDe: `Andrei hat nicht nur technisches Fachwissen, sondern 
      bringt auch eine positive und motivierende Energie ins Team. Seine 
      kooperative Art erleichtert die Umsetzung selbst anspruchsvollster Projekte.`
    },
  ] 
    
}
