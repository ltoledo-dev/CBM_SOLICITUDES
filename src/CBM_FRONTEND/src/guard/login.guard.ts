import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.router.navigate(['/Inicio']);
      return false;
    }
    return true;
  }
}
