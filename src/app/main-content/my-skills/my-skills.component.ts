import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  // skillsNames = [
  //   'Angular',
  //   'TypeScript',
  //   'JavaScript',
  //   'HTML',
  //   'CSS',
  //   'Firebase',
  //   'Git',
  //   'Scrum',
  //   'Rest-Api',
  //   'Material Design'
  // ];

  // skillsIcons = [
  //   'src/assets/img/Angular.png',
  //   'src/assets/img/Vector.png',
  //   'src/assets/img/Javascript.png',
  //   'src/assets/img/html.png',
  //   'src/assets/img/Vector (1).png',
  //   'src/assets/img/Firebase.png',
  //   'src/assets/img/git.png',
  //   'src/assets/img/scrum.png',
  //   'src/assets/img/api.png',
  //   'src/assets/img/Group.png',
  // ]
  mySkills = [
    {
      "name": "Angular",
      "icon": "/assets/img/Angular.png"
    },
    {
      "name": "TypeScript",
      "icon": "/assets/img/Vector.png"
    },
    {
      "name": "JavaScript",
      "icon": "/assets/img/Javascript.png"
    },
    {
      "name": "HTML",
      "icon": "/assets/img/html.png"
    },
    {
      "name": "CSS",
      "icon": "/assets/img/Vector (1).png"
    },
    {
      "name": "Firebase",
      "icon": "/assets/img/Firebase.png"
    },
    {
      "name": "Git",
      "icon": "/assets/img/git.png"
    },
    {
      "name": "Scrum",
      "icon": "/assets/img/scrum.png"
    },
    {
      "name": "Rest-Api",
      "icon": "/assets/img/api.png"
    },
    {
      "name": "Material Design",
      "icon": "/assets/img/Group.png"
    }
  ]
  
}
