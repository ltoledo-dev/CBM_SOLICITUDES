export class ClientsWithTotalProductsResponseDto {
    clientCode: string;
    clientName: string;
    totalProducts: number;

    constructor(clientCode: string, clientName: string, totalProducts: number) {
        this.clientCode = clientCode;
        this.clientName = clientName;
        this.totalProducts = totalProducts;
    }
}