import { SolicitudDetalleGetDto } from './SolicitudDetalleGetDto';

export interface SolicitudGetDto {
  idSolicitudEncabezado: number;
  codigoSolicitud: string;
  idEstado: number;
  estado: string;
  fechaCreacion: string;
  fechaActualizacion: string;
  detalles: SolicitudDetalleGetDto[];
}
