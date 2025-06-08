export class ClientsWithRequestsResponseDto {
    clientCode: string;
    clientName: string;
    totalRequests: number;

    constructor(clientCode: string, clientName: string, totalRequests: number) {
        this.clientCode = clientCode;
        this.clientName = clientName;
        this.totalRequests = totalRequests;
    }
}