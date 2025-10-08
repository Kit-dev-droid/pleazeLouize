import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from '../shared/navigation-bar/navigation-bar';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet,NavigationBar],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss'
})
export class LayoutComponent {
 

}
