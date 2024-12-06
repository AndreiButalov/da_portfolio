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
 
  mySkills = [
    { name: "Angular", icon: "assets/img/Angular.png"},
    { name: "TypeScript", icon: "assets/img/Vector.png"},
    { name: "JavaScript", icon: "assets/img/Javascript.png"},
    { name: "HTML", icon: "assets/img/html.png"},
    { name: "CSS", icon: "assets/img/Vector (1).png"},
    { name: "Firebase", icon: "assets/img/Firebase.png"},
    { name: "Git", icon: "assets/img/git.png"},
    { name: "Scrum", icon: "assets/img/scrum.png"},
    { name: "Rest-Api", icon: "assets/img/api.png"},
    { name: "Material Design", icon: "assets/img/Group.png"}
  ]
  
}
