import { RequestUpdateDto } from "../../../Domain/Request/DTOs/RequestUpdateDto";
import RequestRepository from "../../../../Infrastructure/Persistence/Request/Repositories/RequestRepository";
import { mapUpdateRequestDTOToModels } from "../Mappers/RequestMapper";

export class UpdateRequest {
    private repository: RequestRepository;

    constructor(repository: RequestRepository) {
        this.repository = repository;
    }

    async execute(dto: RequestUpdateDto) {
        const header = mapUpdateRequestDTOToModels(dto);
        await this.repository.updateHeaderRequest(header);
    }
}