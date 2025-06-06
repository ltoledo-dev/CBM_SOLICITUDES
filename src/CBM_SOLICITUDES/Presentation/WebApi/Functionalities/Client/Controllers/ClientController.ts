import { Request, Response } from 'express';
import * as GetAllClient from '../../../../../Core/Aplication/Client/UseCases/GetAllClients';
import * as CreateClient from '../../../../../Core/Aplication/Client/UseCases/CreateClient';
import ClientRepository from '../../../../../Infrastructure/Persistence/Client/Repositories/ClientRepository';

export const getAllClient = async (req: Request, res: Response) => {
    try {
        const clientRepository = new ClientRepository();
        const clientDto = await GetAllClient.getAllClients(clientRepository);
        res.status(200).json(clientDto);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener los clientes', error: error.message });
    }
};

export const createClient = async (req: Request, res: Response) => {
    try {
        const clientDto = { ...req.body };
        const clientRepository = new ClientRepository();
        await CreateClient.CreateClients(clientRepository, clientDto);
        res.status(204).json();
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al crear el cliente', error: error.message });
    }
};