import IClientRepository from '../../../Contracts/Client/Repositories/IClientRepository';
import { mapClientModelsToClientResponseDTOs } from '../Mappers/ClientMapper';

export const getAllClients = async (clientRepository: IClientRepository) => {
    const clients = await clientRepository.getAllClients();
    return mapClientModelsToClientResponseDTOs(clients);
};