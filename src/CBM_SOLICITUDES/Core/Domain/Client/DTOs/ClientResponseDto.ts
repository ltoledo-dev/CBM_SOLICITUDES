export class ClientResponseDTO {
    idCliente: number;
    codigoCliente: string;
    nombreCliente: string;

    constructor({ idCliente, codigoCliente, nombreCliente }: { idCliente: number; codigoCliente: string; nombreCliente: string; }) {
        this.idCliente = idCliente;
        this.codigoCliente = codigoCliente;
        this.nombreCliente = nombreCliente;
    }
}