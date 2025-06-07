import {RequestCreateDto} from "../../../Domain/Request/DTOs/RequestCreateDto";
import RequestRepository from "../../../../Infrastructure/Persistence/Request/Repositories/RequestRepository";
import {mapCreateRequestDTOToModels} from "../Mappers/RequestMapper";

export class CreateRequest {
    private repository: RequestRepository;

    constructor(repository: RequestRepository) {
        this.repository = repository;
    }

    async execute(dto: RequestCreateDto) {
        //Mapear DTO a modelos de encabezado y detalles
        const { header, detalles } = mapCreateRequestDTOToModels(dto);

        //Insertar encabezado y obtener ID generado
        const idSolicitudEncabezado = await this.repository.insertHeaderRequest(header);

        //Insertar detalles con el ID del encabezado
        for (const detalle of detalles) {
            detalle.idSolicitudEncabezado = idSolicitudEncabezado;
            await this.repository.insertDetailRequest(detalle);
        }
    }
}