import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatToolbarModule, MatDividerModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'Inicio',
      icon: 'fal fa-home',
      label: 'Inicio',
    },
    {
      routeLink: 'Solicitudes',
      icon: 'fa fa-shopping-cart',
      label: 'Solicitudes',
    },
    {
      routeLink: 'Productos',
      icon: 'fal fa-box-open',
      label: 'Products',
    },
    {
      routeLink: 'Clientes',
      icon: 'fa fa-users',
      label: 'Clientes',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  logout(): void {
    localStorage.clear();
    // O solo el token: localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
}
