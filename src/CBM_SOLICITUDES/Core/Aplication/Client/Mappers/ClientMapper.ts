import { ClientResponseDTO } from "../../../Domain/Client/DTOs/ClientResponseDto";
import { ClientModel } from "../../../Domain/Client/Models/ClientModel";
import {ClientCreateDTO} from "../../../Domain/Client/DTOs/ClienCreateDto";

export const mapClientModelsToClientResponseDTOs = (clients: ClientModel[]): ClientResponseDTO[] => {
    return clients.map(client => new ClientResponseDTO({
        idCliente: client.idCliente,
        codigoCliente: client.codigoCliente,
        nombreCliente: client.nombreCliente,
    }));
};

export const mapClientCreateDtoToClientModel = (client: ClientCreateDTO): ClientModel => {
    return new ClientModel({
        idCliente: 0,
        codigoCliente: client.codigoCliente,
        nombreCliente: client.nombreCliente,
    });
}