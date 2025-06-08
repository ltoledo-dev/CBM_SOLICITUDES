import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import { Solicitud } from '../../Models/SolicitudModel';
import { MatTableModule } from '@angular/material/table';
import {CurrencyPipe, DatePipe, CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    CurrencyPipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatDialogActions,
    MatDialogClose,
    MatFabButton,
    MatIcon
  ],
  standalone: true
})
export class PurchaseRequestDetailComponent {

  estados = [
    { id_estado: 1, descripcion: 'Pendiente de aprobación' },
    { id_estado: 2, descripcion: 'Aprobada' },
    { id_estado: 3, descripcion: 'En proceso de compra' },
    { id_estado: 4, descripcion: 'Recibida parcialmente' },
    { id_estado: 5, descripcion: 'Recibida completamente' },
    { id_estado: 6, descripcion: 'Cerrada' },
    { id_estado: 7, descripcion: 'Rechazada' },
    { id_estado: 8, descripcion: 'Cancelada' }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { solicitud: Solicitud }) {}

  get solicitud() {
    return this.data.solicitud;
  }

  displayedColumns: string[] = [
    'idSolicitudDetalle',
    'codigoProducto',
    'producto',
    'cantidad',
    'costoUnitario',
    'costoTotal'
  ];
}
