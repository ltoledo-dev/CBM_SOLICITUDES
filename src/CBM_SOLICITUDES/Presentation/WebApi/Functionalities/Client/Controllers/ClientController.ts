import { Request, Response } from 'express';
import * as clientCaseUse from '../../../../../Core/Aplication/Client/UseCases/GetAllClients';
import ClientRepository from '../../../../../Infrastructure/Persistence/Client/Repositories/ClientRepository';

export const getAllClient = async (req: Request, res: Response) => {
    try {
        const clientRepository = new ClientRepository();
        const clientDto = await clientCaseUse.getAllClients(clientRepository);
        res.status(200).json(clientDto);
    } catch (error: any) {
        res.status(500).json({ message: 'Error al obtener los clientes', error: error.message });
    }
};