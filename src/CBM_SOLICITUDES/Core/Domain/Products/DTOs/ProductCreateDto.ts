export class ProductCreateDTO {
    codigoProducto: string;
    descripcion: string;
    costo: number;

    constructor({ codigoProducto, descripcion, costo }: { codigoProducto: string; descripcion: string; costo: number; }) {
        this.codigoProducto = codigoProducto;
        this.descripcion = descripcion;
        this.costo = costo;
    }
}