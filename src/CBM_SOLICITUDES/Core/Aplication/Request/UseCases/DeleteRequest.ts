import IRequestRepository from "../../../Contracts/Request/IRequestRepository";
import RequestRepository from "../../../../Infrastructure/Persistence/Request/Repositories/RequestRepository";

export class DeleteRequest {
    private repository: RequestRepository;

    constructor(repository: RequestRepository) {
        this.repository = repository;
    }

    async deleteRequests(idSolicitud: number) {
        const request = await this.repository.deleteRequest(idSolicitud);
    }
}