import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogActions, MatDialogClose, MatDialogRef} from '@angular/material/dialog';
import { Product } from '../../../product/Models/ProductModel';
import { ProductService } from '../../../product/Services/product.service';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { SolicitudCreateDto } from '../../Dtos/SolicitudCreateDto';
import { PurchaseRequestService } from '../../services/purchase-request.service';

@Component({
  selector: 'app-purchase-request-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogActions,
    MatDialogClose,
    CurrencyPipe,
    MatAutocompleteTrigger,
    MatAutocomplete
  ],
  templateUrl: './purchase-request-add.component.html',
  styleUrl: './purchase-request-add.component.css'
})
export class PurchaseRequestAddComponent {

  encabezado = {
    codigoSolicitud: '',
    idEstado: 1,
    fechaCreacion: '',
    fechaActualizacion: ''
  };

  detalles: any[] = [];
  productos: Product[] = [];
  productosFiltrados: Product[][] = [];

  constructor(
    private productService: ProductService,
    private purchaseRequestService: PurchaseRequestService,
    private dialogRef: MatDialogRef<PurchaseRequestAddComponent>
  ) {
    this.productService.obtenerProducto().subscribe(productos => {
      this.productos = productos;
      // Inicializa con una línea por defecto
      this.detalles = [{
        codigoProducto: '',
        producto: '',
        cantidad: 1,
        costoUnitario: 0,
        costoTotal: 0
      }];
      this.productosFiltrados = [this.productos];
    });
  }

  esFormularioValido(): boolean {
    if (!this.encabezado.codigoSolicitud || !this.encabezado.fechaCreacion) {
      return false;
    }
    return this.detalles.every(det =>
      det.codigoProducto &&
      det.producto &&
      det.cantidad > 0 &&
      det.costoUnitario > 0
    );
  }

  agregarLinea() {
    this.detalles = [
      ...this.detalles,
      {
        codigoProducto: '',
        producto: '',
        cantidad: 1,
        costoUnitario: 0,
        costoTotal: 0
      }
    ];
    this.productosFiltrados.push(this.productos);
  }

  filtrarProductos(det: any, index: number) {
    const filtro = (det.producto || '').toLowerCase();
    this.productosFiltrados[index] = this.productos.filter(prod =>
      prod.descripcion.toLowerCase().includes(filtro)
    );
  }

  eliminarLinea(index: number) {
    this.detalles = this.detalles.filter((_, i) => i !== index);
    this.productosFiltrados.splice(index, 1);
  }

  actualizarCostoTotal(linea: any) {
    linea.costoTotal = linea.cantidad * linea.costoUnitario;
  }

  onProductoSeleccionado(det: any, descripcion: string) {
    const prod = this.productos.find(p => p.descripcion === descripcion);
    if (prod) {
      det.codigoProducto = prod.codigoProducto;
      det.costoUnitario = prod.costo;
      this.actualizarCostoTotal(det);
    }
  }

  guardar() {
    const detallesDto = this.detalles.map(det => ({
      idProducto: this.productos.find(p => p.codigoProducto === det.codigoProducto)?.idProducto ?? 0,
      cantidad: det.cantidad,
      costo: det.costoUnitario
    }));

    const solicitud: SolicitudCreateDto = {
      codigoSolicitud: this.encabezado.codigoSolicitud,
      fechaCreacion: this.encabezado.fechaCreacion,
      idCliente: 1, // Ajusta según tu lógica
      idEstado: this.encabezado.idEstado,
      fechaActualizacion: this.encabezado.fechaActualizacion,
      idUsuario: 1, // Ajusta según tu lógica
      detalles: detallesDto
    };

    this.purchaseRequestService.crearSolicitud(solicitud).subscribe({
      next: (resp: any) => {
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        // Maneja error
        console.error('Error al crear solicitud:', err);
      }
    });
  }
}
