export interface RequestCreateDetailDTO {
    idProducto: number;
    cantidad: number;
    costo: number;
}

export interface RequestCreateDto {
    codigoSolicitud: string;
    fechaCreacion: Date;
    idCliente: number;
    idEstado: number;
    fechaActualizacion: Date;
    idUsuario: number;
    detalles: RequestCreateDetailDTO[];
}