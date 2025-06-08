export interface SolicitudDetalle {
  idSolicitudDetalle: number;
  idProducto: number;
  codigoProducto: string;
  producto: string;
  cantidad: number;
  costoUnitario: number;
  costoTotal: number;
}

export interface Solicitud {
  idSolicitudEncabezado: number;
  codigoSolicitud: string;
  idEstado: number;
  estado: string;
  fechaCreacion: string;
  fechaActualizacion: string;
  detalles: SolicitudDetalle[];
}
