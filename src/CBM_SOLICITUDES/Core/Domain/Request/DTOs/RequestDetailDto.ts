export class RequestDetailDto {
    idSolicitudDetalle: number;
    idProducto: number;
    codigoProducto: string;
    producto: string;
    cantidad: number;
    costoUnitario: number;
    costoTotal: number;

    constructor({
                    idSolicitudDetalle,
                    idProducto,
                    codigoProducto,
                    producto,
                    cantidad,
                    costoUnitario,
                    costoTotal
                }: {
        idSolicitudDetalle: number;
        idProducto: number;
        codigoProducto: string;
        producto: string;
        cantidad: number;
        costoUnitario: number;
        costoTotal: number;
    }) {
        this.idSolicitudDetalle = idSolicitudDetalle;
        this.idProducto = idProducto;
        this.codigoProducto = codigoProducto;
        this.producto = producto;
        this.cantidad = cantidad;
        this.costoUnitario = costoUnitario;
        this.costoTotal = costoTotal;
    }
}
