import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'about_me', component: AboutMeComponent },
    { path: 'my_skills', component: MySkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'menu', component: MenuContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy_policy', component: PrivacyPolicyComponent },
];
