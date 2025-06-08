import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/Authentication.Service';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../models/AuthenticationModel';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCard} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatLabel, MatFormFieldModule, MatInputModule, MatCard, MatButtonModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credenciales: AuthenticationModel = this.loginForm.value;
      this.authService.login(credenciales.usuario, credenciales.clave).subscribe({
        next: () => this.router.navigate(['/Inicio']),
        error: () => this.error = 'Usuario o clave incorrectos'
      });
    }
  }
}
