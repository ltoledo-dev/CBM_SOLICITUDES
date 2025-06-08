import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SolicitudReporteDto } from '../dtos/SolicitudReporteDto';
import { SolicitudReporte } from '../models/SolicitudReporte';
import {ClienteTotalProductos} from "../models/ClienteTotalProductos";
import {ClienteTotalProductosDto} from "../dtos/ClienteTotalProductosDto";
import {ProductoConFechaIngreso} from "../models/ProductoConFechaIngreso";
import {ProductoConFechaIngresoDto} from "../dtos/ProductoConFechaIngresoDto";
import {SolicitudPorDia} from "../models/SolicitudPorDia";
import {SolicitudPorDiaDto} from "../dtos/SolicitudPorDiaDto";
import {SolicitudConEstado} from "../models/SolicitudConEstado";
import {SolicitudConEstadoDto} from "../dtos/SolicitudConEstadoDto";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerReporteSolicitudes(): Observable<SolicitudReporte[]> {
    return this.http.get<SolicitudReporteDto[]>(`${this.apiUrl}/v1/clientes-con-solicitudes`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          codigoCliente: dto.clientCode,
          nombreCliente: dto.clientName,
          totalSolicitudes: dto.totalRequests
        }))
      )
    );
  }

  obtenerClientesConTotalProductos(): Observable<ClienteTotalProductos[]> {
    return this.http.get<ClienteTotalProductosDto[]>(`${this.apiUrl}/v1/clientes-con-total-productos`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          codigoCliente: dto.clientCode,
          nombreCliente: dto.clientName,
          totalProductos: dto.totalProducts
        }))
      )
    );
  }

  obtenerProductosConFechasIngreso(): Observable<ProductoConFechaIngreso[]> {
    return this.http.get<ProductoConFechaIngresoDto[]>(`${this.apiUrl}/v1/productos-con-fechas-ingreso`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          codigoProducto: dto.productCode,
          descripcion: dto.description,
          fechaIngreso: dto.entryDate.replace('T', ' ').substring(0, 19)
        }))
      )
    );
  }

  obtenerSolicitudesPorDia(): Observable<SolicitudPorDia[]> {
    return this.http.get<SolicitudPorDiaDto[]>(`${this.apiUrl}/v1/solicitudes-por-dia`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          fecha: dto.date.substring(0, 10),
          totalSolicitudes: dto.totalRequests
        }))
      )
    );
  }

  obtenerSolicitudesConEstado(): Observable<SolicitudConEstado[]> {
    return this.http.get<SolicitudConEstadoDto[]>(`${this.apiUrl}/v1/solicitudes-con-estado`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          codigoSolicitud: dto.requestCode,
          descripcionEstado: dto.statusDescription
        }))
      )
    );
  }
}
