import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [Menubar],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit() {
     this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home', 
                command: () => {
                    this.router.navigate(['/home']);
                }
            },
            {
                label: 'Shop',
                icon: 'pi pi-search',
                command: () => {
                    this.router.navigate(['/store']);
                }
            },
            {
                label: 'about',
                icon: 'pi pi-star',
                command: () => {
                    this.router.navigate(['/about']);
                }
               
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope',
                command: () => {
                    this.router.navigate(['/contact']);
                }
            }
        ]
    }
  }

