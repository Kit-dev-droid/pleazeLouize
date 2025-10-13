import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { ContactComponent } from './features/contact-component/contact-component';
export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./features/home-component/home-component').then(m => m.HomeComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact-component/contact-component').then(m => m.ContactComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about-component/about-component').then(m => m.AboutComponent)
    },
    {
        path: 'store',
        loadComponent: () => import('./features/store-component/store-component').then(m => m.StoreComponent)
    },
    {
    path: '',
    component: HomeComponent
  }
];
