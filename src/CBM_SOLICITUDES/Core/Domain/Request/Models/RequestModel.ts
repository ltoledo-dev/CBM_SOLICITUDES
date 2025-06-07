export class RequestModel {
    idSolicitudEncabezado: number;
    codigoSolicitud: string;
    idEstado: number;
    estado: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    idSolicitudDetalle : number;
    idProducto : number;
    codigoProducto: string;
    producto: string;
    cantidad: number;
    costoUnitario: number;
    costoTotal: number;

    constructor({
                    idSolicitudEncabezado,
                    codigoSolicitud,
                    idEstado,
                    estado,
                    fechaCreacion,
                    fechaActualizacion,
                    idSolicitudDetalle,
                    idProducto,
                    codigoProducto,
                    producto,
                    cantidad,
                    costoUnitario,
                    costoTotal
                }: {
        idSolicitudEncabezado: number;
        codigoSolicitud: string;
        idEstado: number;
        estado: string;
        fechaCreacion: Date;
        fechaActualizacion: Date;
        idSolicitudDetalle : number;
        idProducto : number;
        codigoProducto: string;
        producto: string;
        cantidad: number;
        costoUnitario: number;
        costoTotal: number;
    }) {
        this.idSolicitudEncabezado = idSolicitudEncabezado;
        this.codigoSolicitud = codigoSolicitud;
        this.idEstado = idEstado;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.idSolicitudDetalle = idSolicitudDetalle;
        this.idProducto = idProducto;
        this.codigoProducto = codigoProducto;
        this.producto = producto;
        this.cantidad = cantidad;
        this.costoUnitario = costoUnitario;
        this.costoTotal = costoTotal;
    }
}
