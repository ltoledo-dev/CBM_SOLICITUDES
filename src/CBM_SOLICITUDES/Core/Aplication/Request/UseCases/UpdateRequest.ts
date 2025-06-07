import { RequestUpdateDto } from "../../../Domain/Request/DTOs/RequestUpdateDto";
import RequestRepository from "../../../../Infrastructure/Persistence/Request/Repositories/RequestRepository";
import { mapUpdateRequestDTOToModels } from "../Mappers/RequestMapper";

export class UpdateRequest {
    private repository: RequestRepository;

    constructor(repository: RequestRepository) {
        this.repository = repository;
    }

    async execute(dto: RequestUpdateDto) {
        const { header, detalles } = mapUpdateRequestDTOToModels(dto);

        await this.repository.updateHeaderRequest(header);

        for (const detalle of detalles) {
            await this.repository.updateDetailRequest(detalle);
        }
    }
}