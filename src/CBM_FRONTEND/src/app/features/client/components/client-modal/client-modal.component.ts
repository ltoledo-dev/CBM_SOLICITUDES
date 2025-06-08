import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../Services/Client.service';
import { ClientCreateDto } from '../../Dtos/ClientCreateDto';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-modal',
  standalone: true,
  imports: [MatDialogModule, MatIcon, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './client-modal.component.html',
  styleUrl: './client-modal.component.css'
})
export class ClientModalComponent {
  codeFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  errorMsg: string | null = null;

  constructor(
    private clientService: ClientService,
    private dialogRef: MatDialogRef<ClientModalComponent>
  ) {}

  guardarCliente() {
    if (this.codeFormControl.invalid || this.nameFormControl.invalid) return;

    const cliente: ClientCreateDto = {
      codigoCliente: this.codeFormControl.value!,
      nombreCliente: this.nameFormControl.value!
    };

    this.errorMsg = null;
    this.clientService.crearCliente(cliente).subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => {
        if (err.status === 409) {
          this.errorMsg = 'El código de cliente ya está creado.';
        } else {
          this.errorMsg = 'Ocurrió un error al crear el cliente.';
        }
      }
    });
  }
}
