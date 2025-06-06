import {HttpError} from "../../../Domain/Exceptions/HttpError";
import ClientRepository from "../../../../Infrastructure/Persistence/Client/Repositories/ClientRepository";

export const validateClientByCode = async (code: string ) => {
    const clientRepository = new ClientRepository();
    const clientExists: boolean = await clientRepository.getClientByCode(code);

    if (clientExists) {
        throw new HttpError('El cliente con el código proporcionado ya existe', 409);
    }
};