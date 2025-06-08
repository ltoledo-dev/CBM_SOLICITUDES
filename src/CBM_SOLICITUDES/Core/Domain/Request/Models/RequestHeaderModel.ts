export class RequestHeaderModel {
    idSolicitudEncabezado: number;
    codigoSolicitud: string;
    fechaCreacion: Date;
    idCliente: number;
    idEstado: number;
    fechaActualizacion: Date;
    idUsuario: number;

    constructor({
                    idSolicitudEncabezado,
                    codigoSolicitud,
                    fechaCreacion,
                    idCliente,
                    idEstado,
                    fechaActualizacion,
                    idUsuario
                }: {
        idSolicitudEncabezado: number;
        codigoSolicitud: string;
        fechaCreacion: Date;
        idCliente: number;
        idEstado: number;
        fechaActualizacion: Date;
        idUsuario: number;
    }) {
        this.idSolicitudEncabezado = idSolicitudEncabezado;
        this.codigoSolicitud = codigoSolicitud;
        this.fechaCreacion = fechaCreacion;
        this.idCliente = idCliente;
        this.idEstado = idEstado;
        this.fechaActualizacion = fechaActualizacion;
        this.idUsuario = idUsuario;
    }
}