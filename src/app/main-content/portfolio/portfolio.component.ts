import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/language/language.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private languageService: LanguageService) { }

  get isEnglish(): boolean {
    return this.languageService.getLanguage();
  }

  projektsPortfolioFrontend = [
    {
      name: 'DABubble',
      image: 'assets/img/bubble.png',
      index: '01/04',
      language: 'Angular | TypeScript | Firebase',
      link: 'https://github.com/AndreiButalov/DaBubble',
      tryLink: 'https://andrei-butalov.de/angular-projects/daBubble',
      description: `This App is a Slack Clone App. It revolutionizes team communication 
      and collaboration with its intuitive interface, real-time messaging, and robust channel organization.`,
      descriptionDe: `Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation 
      und zusammenarbeit mit einer intuitiven Benutzeroberfläche, Echtzeit-Messaging und einer leistungsstarken Kanalorganisation.`
    },
    {
      name: 'Sharkie',
      image: 'assets/img/sharkie.png',
      index: '02/04',
      language: 'JavaScript | HTML | CSS',
      link: 'https://github.com/AndreiButalov/sharkie_game',
      tryLink: 'https://andrei-butalov.de/sharkie_game/index.html',
      description: `A simple Jump-and-Run game based on an object-oriented approach. 
      Help sharkie to find coins and poison bottles to fight against the killer whale.`,
      descriptionDe: `Ein einfaches Jump-and-Run-Spiel basierend auf einem 
      objektorientierten Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.`
    },
    {
      name: 'Join',
      image: 'assets/img/join.png',
      index: '03/04',
      language: 'JavaScript | HTML | CSS',
      link: 'https://github.com/AndreiButalov/join',
      tryLink: 'https://andrei-butalov.de/join/index.html',
      description: `Task manager inspired by the Kanban System. Create 
      and organize task using drag and drop function, assing user and categories.`,
      descriptionDe: `Task-Manager inspiriert vom Kanban-System. Erstellen 
      und organisieren Sie Aufgaben mit einer Drag-and-Drop-Funktion, weisen Sie Benutzer und Kategorien zu.`
    },
    {
      name: 'Pokedex',
      image: 'assets/img/pokemon.png',
      index: '04/04',
      language: 'JavaScript | HTML | CSS | Api',
      link: 'https://github.com/AndreiButalov/Pokemon-Wiki',
      tryLink: 'https://andrei-butalov.de/pokemon_wiki/index.html',
      description: `Based on the PokeApi a simple library that provides and catalogues pokemon information.`,
      descriptionDe: `Basierend auf der PokeApi ist dies eine einfache Bibliothek, 
      die Pokémon-Informationen bereitstellt und katalogisiert.`
    },
  ]

   projektsPortfolioBacken = [
      {
        name: 'Videoflix',
        image: 'assets/img/Screenshot 2026-04-24 102031.png',
        index: '01/03',
        language: 'Python | DRF | PostgreSQL | Docker | Redis | JWTAuth',
        link: 'https://github.com/AndreiButalov/videoflix_backend',
        description: `This is the backend for the Videoflix platform, built with Django and Django REST Framework. 
        It provides authentication, video management, and API endpoints for the frontend application.`,
        descriptionDe: `Dies ist das Backend für die Videoflix-Plattform, entwickelt mit Django und Django REST Framework. 
        Es bietet Authentifizierung, Video-Management und API-Endpunkte für die Frontend-Anwendung.`
      },
      {
        name: 'Coderr',
        image: 'assets/img/Screenshot 2026-04-24 100525.png',
        index: '02/03',
        language: 'Python | DRF | Token Auth | Postman',
        link: 'https://github.com/AndreiButalov/coderr_backend',
        description: `Coderr is a backend for a freelance platform built with Django and DRF. It allows users 
        to register as either customers or businesses, manage profiles, create and edit offers, place orders, and leave reviews.`,
        descriptionDe: `Coderr ist ein Backend für eine Freelance-Plattform, entwickelt mit Django 
        und DRF. Die Anwendung ermöglicht es Nutzern, sich als Kunde oder Unternehmen         
        zu registrieren, Profile zu verwalten, Angebote zu erstellen und zu bearbeiten, Aufträge zu vergeben 
        und Bewertungen abzugeben.`
      },
      {
        name: 'KanMind',
        image: 'assets/img/Screenshot 2026-04-24 100336.png',
        index: '03/03',
        language: 'Python | DRF | Token Auth | Postman',        
        link: 'https://github.com/AndreiButalov/kanMind_backend',
        description: `KanMind is an intuitive, API-based Kanban board application that enables teams to plan, organize, 
        and comment on tasks. The backend is built with Django and Django REST Framework.`,
        descriptionDe: `KanMind ist eine intuitive, API-basierte Kanban-Board-Anwendung, mit der Teams 
        Aufgaben planen, organisieren und kommentieren können. Das Backend basiert auf Django und Django REST Framework.`
      },  
  ]
  
}


 

