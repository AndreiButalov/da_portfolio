import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'menu', component: MenuContentComponent },
    { path: 'imprint', component: ImprintComponent },
];
