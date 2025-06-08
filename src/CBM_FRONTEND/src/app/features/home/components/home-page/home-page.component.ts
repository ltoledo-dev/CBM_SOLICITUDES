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
    const dummyToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoibHRvbGVkbyIsImlhdCI6MTc0OTM1MzU3MSwiZXhwIjoxNzQ5MzU3MTcxfQ.U3QToGy7CKTSv8dMyyykTZ4-DbBxM3pQYUzY8lDYI2w';
    localStorage.setItem('authToken', dummyToken);
    console.log('Token guardado en localStorage al iniciar la página');
  }
}
