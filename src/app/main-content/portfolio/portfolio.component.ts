import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  projektsPortfolio = [
    {
      name: 'Join',
      image: 'assets/img/join.png',
      index: '01/04',
      language: 'Angular | TypeScript | HTML | CSS | Firebase',
      link: 'https://github.com/AndreiButalov/join',
      tryLink: 'https://join-209.developerakademie.net',
      description: 'Task manager inspired by the Kanban System. Create and organize task using drag and drop function, assing user and categories.'
    },
    {
      name: 'Sharkie',
      image: 'assets/img/sharkie.png',
      index: '02/04',
      language: 'JavaScript | HTML | CSS',
      link: 'https://github.com/AndreiButalov/sharkie_game',
      tryLink: 'https://andrei-butalov.developerakademie.net/sharkie_game/index.html',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.'
    },
    {
      name: 'DABubble',
      image: 'assets/img/bubble.png',
      index: '03/04',
      language: 'Andular | TypeScript | Firebase',
      link: '',
      tryLink: '',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.'
    },
    {
      name: 'Pokedex',
      image: 'assets/img/pokemon.png',
      index: '04/04',
      language: 'JavaScript | HTML | CSS | Api',
      link: 'https://github.com/AndreiButalov/Pokemon-Wiki',
      tryLink: 'https://andrei-butalov.developerakademie.net/pokemon_wiki/index.html',
      description: 'Based on the PokeApi a simple library that provides and catalogues pokemon information.'
    },
  ]
  
}
