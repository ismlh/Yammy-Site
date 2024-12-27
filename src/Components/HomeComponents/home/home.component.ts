import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ChooseUsComponent } from '../choose-us/choose-us.component';
import { OurMenuComponent } from '../our-menu/our-menu.component';
import { OurHefsComponent } from '../our-hefs/our-hefs.component';
import { ClientBookComponent } from '../client-book/client-book.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    AboutUsComponent,
    ChooseUsComponent,
    OurMenuComponent,
    OurHefsComponent,
    ClientBookComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollPosition!: number;
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.scrollPosition = window.scrollY;
  }
  goToTop(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
