export interface SolicitudDetalleGetDto {
  idSolicitudDetalle: number;
  idProducto: number;
  codigoProducto: string;
  producto: string;
  cantidad: number;
  costoUnitario: number;
  costoTotal: number;
}
