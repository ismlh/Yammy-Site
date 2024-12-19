import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CustomSideNavContentComponent } from '../custom-side-nav-content/custom-side-nav-content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    CustomSideNavContentComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  collapsed = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '80px' : '250px'));
}
