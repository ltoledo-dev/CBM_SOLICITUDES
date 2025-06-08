import { Component, OnInit, ViewChild } from '@angular/core';
        import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
        import { ReportService } from '../../services/report.services';
        import { SolicitudReporte } from '../../models/SolicitudReporte';
        import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
        import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

        @Component({
          selector: 'app-clientes-con-solicitudes',
          templateUrl: './clientes-con-solicitudes.component.html',
          styleUrl: './clientes-con-solicitudes.component.css',
          standalone: true,
          imports: [
            MatIconModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
          ]
        })
        export class ClientesConSolicitudesComponent implements OnInit {
          displayedColumns: string[] = ['codigoCliente', 'nombreCliente', 'totalSolicitudes'];
          dataSource = new MatTableDataSource<SolicitudReporte>([]);

          @ViewChild(MatPaginator) paginator!: MatPaginator;
          @ViewChild(MatSort) sort!: MatSort;

          constructor(private reportService: ReportService) {}

          ngOnInit() {
            this.reportService.obtenerReporteSolicitudes().subscribe(data => {
              this.dataSource.data = data;
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
          }

          applyFilter(event: Event) {
            const filterValue = (event.target as HTMLInputElement).value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }
