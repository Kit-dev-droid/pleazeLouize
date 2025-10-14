import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component/components/home-component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./features/home/home-component/components/home-component').then(m => m.HomeComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact-component/components/contact-component').then(m => m.ContactComponent)
    },
    {
        path: 'about',
        loadComponent: () =>import('./features/about/about-component/components/about-component').then(m => m.AboutComponent)
       
    },
    {
        path: 'store',
        loadComponent: () => import('./features/store/store-component/component/store-component').then(m => m.StoreComponent)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./features/privacy/privacy-component/component/privacy-component').then(m => m.PrivacyComponent)
    },
    {
        path: 'licensing',
        loadComponent: () => import('./features/licensing/licensing-component/component/licensing-component').then(m => m.LicensingComponent)

    },
    {
    path: '',
    component: HomeComponent
  }
];
