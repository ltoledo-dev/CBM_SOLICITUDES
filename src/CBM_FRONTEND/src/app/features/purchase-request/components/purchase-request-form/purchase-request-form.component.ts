import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { PurchaseRequestService } from '../../services/purchase-request.service';
import { Solicitud } from '../../Models/SolicitudModel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseRequestDetailComponent } from '../purchase-request-detail/purchase-request-detail.component';
import {PurchaseRequestAddComponent} from "../purchase-request-add/purchase-request-add.component";

@Component({
  selector: 'app-purchase-request-form',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    DatePipe,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './purchase-request-form.component.html',
  styleUrl: './purchase-request-form.component.css'
})
export class PurchaseRequestFormComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idSolicitudEncabezado',
    'codigoSolicitud',
    'estado',
    'fechaCreacion',
    'fechaActualizacion',
    'acciones'
  ];
  dataSource = new MatTableDataSource<Solicitud>();

  private purchaseRequestService = inject(PurchaseRequestService);
  private dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.purchaseRequestService.obtenerSolicitudes().subscribe(solicitudes => {
      this.dataSource.data = solicitudes;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

verDetalle(solicitud: Solicitud) {
  const dialogRef = this.dialog.open(PurchaseRequestDetailComponent, {
    width: '1280px',
    maxWidth: '100vw',
    data: { solicitud }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.purchaseRequestService.obtenerSolicitudes().subscribe(solicitudes => {
        this.dataSource.data = solicitudes;
      });
    }
  });
}

  agregarSolicitud() {
    const dialogRef = this.dialog.open(PurchaseRequestAddComponent, {
      width: '1450px',
      maxWidth: '100vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.purchaseRequestService.obtenerSolicitudes().subscribe(solicitudes => {
          this.dataSource.data = solicitudes;
        });
      }
    });
  }

  eliminarSolicitud(solicitud: Solicitud) {
    // Lógica para eliminar la solicitud
  }
}
