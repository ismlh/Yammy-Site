import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from '../header/header.component';
import { AboutUsComponent } from "../about-us/about-us.component";
import { ChooseUsComponent } from "../choose-us/choose-us.component";
import { OurMenuComponent } from "../our-menu/our-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, AboutUsComponent, ChooseUsComponent, OurMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
