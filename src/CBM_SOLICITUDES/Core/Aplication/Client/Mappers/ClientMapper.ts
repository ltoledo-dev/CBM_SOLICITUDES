import { ClientResponseDTO } from "../../../Domain/Client/DTOs/ClientResponseDto";
import { ClientModel } from "../../../Domain/Client/Models/ClientModel";

export const mapClientModelsToClientResponseDTOs = (clients: ClientModel[]): ClientResponseDTO[] => {
    return clients.map(client => new ClientResponseDTO({
        idCliente: client.idCliente,
        codigoCliente: client.codigoCliente,
        nombreCliente: client.nombreCliente,
    }));
};