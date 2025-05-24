import { Routes } from '@angular/router';
import { EsempioComponent } from './esempio/esempio.component';
import {WelcomeComponent} from './welcome/welcome.component';
export const routes: Routes = [
  { path: 'esempio', component: EsempioComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
