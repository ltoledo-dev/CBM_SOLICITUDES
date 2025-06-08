import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from '../../services/report.services';
import { ProductoConFechaIngreso } from '../../models/ProductoConFechaIngreso';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-productos-con-fechas-ingreso',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './productos-con-fechas-ingreso.component.html',
  styleUrl: './productos-con-fechas-ingreso.component.css'
})
export class ProductosConFechasIngresoComponent implements OnInit {
  displayedColumns: string[] = ['codigoProducto', 'descripcion', 'fechaIngreso'];
  dataSource = new MatTableDataSource<ProductoConFechaIngreso>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reportService.obtenerProductosConFechasIngreso().subscribe(data => {
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
