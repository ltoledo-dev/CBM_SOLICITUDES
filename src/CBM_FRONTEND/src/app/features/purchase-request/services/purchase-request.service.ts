import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SolicitudGetDto } from '../Dtos/SolicitudGetDto';
import { Solicitud } from '../Models/SolicitudModel';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<SolicitudGetDto[]>(`${this.apiUrl}/v1/solicitudes`).pipe(
      map(dtos =>
        dtos.map(dto => ({
          idSolicitudEncabezado: dto.idSolicitudEncabezado,
          codigoSolicitud: dto.codigoSolicitud,
          idEstado: dto.idEstado,
          estado: dto.estado,
          fechaCreacion: dto.fechaCreacion.replace('T', ' ').substring(0, 19),
          fechaActualizacion: dto.fechaActualizacion.replace('T', ' ').substring(0, 19),
          detalles: dto.detalles.map(det => ({
            idSolicitudDetalle: det.idSolicitudDetalle,
            idProducto: det.idProducto,
            codigoProducto: det.codigoProducto,
            producto: det.producto,
            cantidad: det.cantidad,
            costoUnitario: det.costoUnitario,
            costoTotal: det.costoTotal
          }))
        }))
      )
    );
  }

  actualizarEstadoSolicitud(dto: { idSolicitudEncabezado: number; idEstado: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/v1/solicitudes`, dto);
  }
}
