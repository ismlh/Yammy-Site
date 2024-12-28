import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../Components/dashBoardComponents/dashboard/dashboard.component';
import { HomeComponent } from '../Components/HomeComponents/home/home.component';
import { NavigationEnd, Router } from '@angular/router';
import { NotFoundComponent } from '../Components/HomeComponents/not-found/not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, HomeComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isHome: boolean = true;
  isNotFoundHome: boolean = true;
  isNotFoundDashboard: boolean = true;
  constructor(private _router: Router) {}
  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects.includes('Home');
        this.isNotFoundHome = !event.urlAfterRedirects.includes('Home');
        this.isNotFoundDashboard =
          !event.urlAfterRedirects.includes('Dashboard');
      }
    });
  }
}
