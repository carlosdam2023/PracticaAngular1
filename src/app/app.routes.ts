import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { CardsPageComponent } from './pages/cards/cards-page/cards-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent},
    { path: 'cards', component:CardsPageComponent}
];
