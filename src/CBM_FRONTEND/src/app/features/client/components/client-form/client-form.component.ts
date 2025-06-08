import { Component, ViewChild, inject, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ClientModalComponent } from '../client-modal/client-modal.component';
import { ClientService } from '../../Services/Client.service';
import { Cliente } from '../../Models/ClientModel';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
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
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idCliente', 'codigoCliente', 'nombreCliente'];
  dataSource = new MatTableDataSource<Cliente>();

  readonly dialog = inject(MatDialog);
  private clienteService = inject(ClientService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => {
      this.dataSource.data = clientes;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openClientModal() {
    const dialogRef = this.dialog.open(ClientModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.obtenerClientes().subscribe(clientes => {
          this.dataSource.data = clientes;
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
