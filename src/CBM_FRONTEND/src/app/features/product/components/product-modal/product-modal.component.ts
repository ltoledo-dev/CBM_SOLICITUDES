import { Component } from '@angular/core';
import {MatButtonModule, MatFabButton} from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../Services/product.service';
import {ClientCreateDto} from "../../../client/Dtos/ClientCreateDto";
import {ProductCreateDto} from "../../Dtos/ProductCreateDto";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatError,
    MatFabButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  codeFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')
  ]);
  matcher = new MyErrorStateMatcher();
  errorMsg: string | null = null;

  constructor(
    private ProductService: ProductService,
    private dialogRef: MatDialogRef<ProductModalComponent>
  ) {}

  guardarProduct() {
    if (this.codeFormControl.invalid || this.nameFormControl.invalid || this.priceFormControl.invalid) return;

    const product: ProductCreateDto = {
      codigoProducto: this.codeFormControl.value!,
      descripcion: this.nameFormControl.value!,
      costo: Number(this.priceFormControl.value!)
    };

    this.errorMsg = null;
    this.ProductService.crearProduct(product).subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => {
        if (err.status === 409) {
          this.errorMsg = 'El código del producto ya está creado.';
        } else {
          this.errorMsg = 'Ocurrió un error al crear el producto.';
        }
      }
    });
  }
}
