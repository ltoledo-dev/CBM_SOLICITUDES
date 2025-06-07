export interface RequestUpdateDetailDTO {
    idSolicitudDetalle: number;
    idProducto: number;
    cantidad: number;
    costo: number;
}

export interface RequestUpdateDto {
    idSolicitudEncabezado: number;
    codigoSolicitud: string;
    fechaCreacion: Date;
    idCliente: number;
    idEstado: number;
    fechaActualizacion: Date;
    idUsuario: number;
    detalles: RequestUpdateDetailDTO[];
}