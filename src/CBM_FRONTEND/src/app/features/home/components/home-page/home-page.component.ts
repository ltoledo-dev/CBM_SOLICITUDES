import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isLeftSidebarCollapsed = input.required<boolean>();

   ngOnInit(): void {
    // Guarda el token en localStorage al iniciar la página (para pruebas)
    const dummyToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoibHRvbGVkbyIsImlhdCI6MTc0OTM2MDQ3NCwiZXhwIjoxNzQ5MzY0MDc0fQ.uNH3EjmWl01BMtJEzYLIASZ5Ts8k0bNuEEBMf0HXlYI';
    localStorage.setItem('authToken', dummyToken);
    console.log('Token guardado en localStorage al iniciar la página');
  }
}
