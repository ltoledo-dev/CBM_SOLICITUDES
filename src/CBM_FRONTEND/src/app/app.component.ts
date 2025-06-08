import { Component, HostListener, OnInit, signal } from '@angular/core';
    import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
    import { MainComponent } from './main/main.component';
    import { Router } from '@angular/router';
    import { NgIf } from '@angular/common'; // <-- Importa NgIf

    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [LeftSidebarComponent, MainComponent, NgIf], // <-- Agrega NgIf aquí
      templateUrl: './app.component.html',
      styleUrl: './app.component.css',
    })
    export class AppComponent implements OnInit {
      constructor(private router: Router) {}

      isLeftSidebarCollapsed = signal<boolean>(false);
      screenWidth = signal<number>(window.innerWidth);

      @HostListener('window:resize')
      onResize() {
        this.screenWidth.set(window.innerWidth);
        if (this.screenWidth() < 768) {
          this.isLeftSidebarCollapsed.set(true);
        }
      }

      ngOnInit(): void {
        this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
      }

      changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
        this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
      }

      mostrarSidebar(): boolean {
        const url = this.router.url.toLowerCase();
        return url !== '/login' && url !== '/';
      }
    }
