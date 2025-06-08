import { Component, OnInit, ViewChild } from '@angular/core';
  import { MatTableDataSource } from '@angular/material/table';
  import { ReportService } from '../../services/report.services';
  import { ClienteTotalProductos } from '../../models/ClienteTotalProductos';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatSort } from '@angular/material/sort';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { MatTableModule } from '@angular/material/table';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatSortModule } from '@angular/material/sort';

  @Component({
    selector: 'app-clientes-con-total-productos',
    standalone: true,
    imports: [
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],
    templateUrl: './clientes-con-total-productos.component.html',
    styleUrl: './clientes-con-total-productos.component.css'
  })
  export class ClientesConTotalProductosComponent implements OnInit {
    displayedColumns: string[] = ['codigoCliente', 'nombreCliente', 'totalProductos'];
    dataSource = new MatTableDataSource<ClienteTotalProductos>([]);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private reportService: ReportService) {}

    ngOnInit() {
      this.reportService.obtenerClientesConTotalProductos().subscribe(data => {
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
