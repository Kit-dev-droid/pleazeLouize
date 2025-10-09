import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { ContactComponent } from './features/contact-component/contact-component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent}
];
