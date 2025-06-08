export class ProductModel {
    idProducto: number;
    codigoProducto: string;
    descripcion: string;
    costo: number;

    constructor({ idProducto, codigoProducto, descripcion, costo }: { idProducto: number; codigoProducto: string; descripcion: string; costo: number; }) {
        this.idProducto = idProducto;
        this.codigoProducto = codigoProducto;
        this.descripcion = descripcion;
        this.costo = costo;
    }
}