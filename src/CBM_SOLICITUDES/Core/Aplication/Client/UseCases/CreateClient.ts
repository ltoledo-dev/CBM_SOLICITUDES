import IClientRepository from '../../../Contracts/Client/Repositories/IClientRepository';
import {ClientCreateDTO} from "../../../Domain/Client/DTOs/ClienCreateDto";
import { mapClientCreateDtoToClientModel } from '../Mappers/ClientMapper';
import * as clientValidator from '../Validators/ClientValidator'

export const createClients = async (clientRepository: IClientRepository, clientCreateDto: ClientCreateDTO ) => {

    // validamos que el cliente no exista
    await clientValidator.validateClientByCode(clientCreateDto.codigoCliente)

    // insertamos en la base de datos si no existe el cliente
    const clientCreate = mapClientCreateDtoToClientModel(clientCreateDto)
    await clientRepository.createClient(clientCreate);

};