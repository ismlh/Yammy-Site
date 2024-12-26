import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../Components/dashBoardComponents/dashboard/dashboard.component';
import { HomeComponent } from "../Components/HomeComponents/home/home.component";
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  isHome:boolean=true;
  constructor(private _router:Router){

  }
  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome= event.urlAfterRedirects.includes('Home');
      }
    });

  }

}
