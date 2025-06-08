export class RequestDetailModel {
    idSolicitudDetalle: number;
    idSolicitudEncabezado: number;
    idProducto: number;
    cantidad: number;
    costo: number;

    constructor({
                    idSolicitudDetalle,
                    idSolicitudEncabezado,
                    idProducto,
                    cantidad,
                    costo
                }: {
        idSolicitudDetalle: number;
        idSolicitudEncabezado: number;
        idProducto: number;
        cantidad: number;
        costo: number;
    }) {
        this.idSolicitudDetalle = idSolicitudDetalle;
        this.idSolicitudEncabezado = idSolicitudEncabezado;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}