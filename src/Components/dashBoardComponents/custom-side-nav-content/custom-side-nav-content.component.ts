import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-custom-side-nav-content',
  standalone: true,
  imports: [
    MatListModule,
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './custom-side-nav-content.component.html',
  styleUrl: './custom-side-nav-content.component.css',
})
export class CustomSideNavContentComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
