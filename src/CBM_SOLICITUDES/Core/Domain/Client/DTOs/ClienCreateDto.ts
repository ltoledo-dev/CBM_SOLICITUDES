export class ClientCreateDTO {
    codigoCliente: string;
    nombreCliente: string;

    constructor({ codigoCliente, nombreCliente }: { codigoCliente: string; nombreCliente: string; }) {
        this.codigoCliente = codigoCliente;
        this.nombreCliente = nombreCliente;
    }
}