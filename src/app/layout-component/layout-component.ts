import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from '../shared/navigation-bar/navigation-bar';
import { FooterComponent } from '../shared/footer-component/footer-component';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [RouterOutlet,NavigationBar,FooterComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss'
})
export class LayoutComponent {
 

}
