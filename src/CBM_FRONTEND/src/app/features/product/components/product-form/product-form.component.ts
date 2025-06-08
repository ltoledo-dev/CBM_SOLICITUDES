import { Component, ViewChild, inject, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/ProductModel';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['idProducto', 'codigoProducto', 'descripcion', 'costo'];
  dataSource = new MatTableDataSource<Product>();

  readonly dialog = inject(MatDialog);
  private productService = inject(ProductService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.productService.obtenerProducto().subscribe(product => {
      this.dataSource.data = product;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openProductModal() {
    const dialogRef = this.dialog.open(ProductModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.obtenerProducto().subscribe(product => {
          this.dataSource.data = product;
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
