import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { HeaderComponent } from './header/header.component';
import { ArrowSectionComponent } from './arrow-section/arrow-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutMeComponent,
    ArrowSectionComponent,
    MySkillsComponent,
    PortfolioComponent,
    ReferencesComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
