import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from '../shared/nav-bar/navigaton-component/component/navigation-bar';
import { FooterComponent } from '../shared/footer/footer-component/component/footer-component';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [RouterOutlet,NavigationBar,FooterComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss'
})
export class LayoutComponent {
 

}
