import { SolicitudDetalleCreateDto } from './SolicitudDetalleCreateDto';

export interface SolicitudCreateDto {
  codigoSolicitud: string;
  fechaCreacion: string;
  idCliente: number;
  idEstado: number;
  fechaActualizacion: string;
  idUsuario: number;
  detalles: SolicitudDetalleCreateDto[];
}
