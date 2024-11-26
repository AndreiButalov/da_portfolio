import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';

export const routes: Routes = [
    { path: 'main', component: MainContentComponent },
    { path: 'menu', component: MenuContentComponent },
];
