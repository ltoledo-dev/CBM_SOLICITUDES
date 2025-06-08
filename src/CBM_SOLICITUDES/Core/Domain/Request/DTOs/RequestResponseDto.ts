import {RequestDetailDto} from "./RequestDetailDto";

export class RequestResponseDTO {
    idSolicitudEncabezado: number;
    codigoSolicitud: string;
    idEstado: number;
    estado: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    detalles: RequestDetailDto[];

    constructor({
                    idSolicitudEncabezado,
                    codigoSolicitud,
                    idEstado,
                    estado,
                    fechaCreacion,
                    fechaActualizacion,
                    detalles
                }: {
        idSolicitudEncabezado: number;
        codigoSolicitud: string;
        idEstado: number;
        estado: string;
        fechaCreacion: Date;
        fechaActualizacion: Date;
        detalles: RequestDetailDto[];
    }) {
        this.idSolicitudEncabezado = idSolicitudEncabezado;
        this.codigoSolicitud = codigoSolicitud;
        this.idEstado = idEstado;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.detalles = detalles;
    }
}
